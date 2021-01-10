import './canvas.css';
import React, { Component } from 'react';
import { Stage, Layer, Text, Circle, Line, Group} from 'react-konva';

const CANVAS_WIDTH=window.innerWidth/2
const CANVAS_HEIGHT=window.innerHeight*0.8
const RADIUS=15//window.innerHeight*window.innerWidth/120000
const STAGE_X= 0 // window.innerWidth/4
const STAGE_Y= 0 //window.innerHeight/20

var initialNodes = []
var initialEdges={}
var nodeCount = 0
var previousNode=null
var currentNode=null

class Canvas extends Component {
  state = {nodes: initialNodes,
           edges: initialEdges}

  render() { 
    return (
      <div>
        <Stage 
          width={window.innerWidth} height={window.innerHeight} x={STAGE_X} y={STAGE_Y} onClick={this.addNode}>
          {/* Outline the canvas */}
          <Layer>
            <Line
              points={[0, 0, CANVAS_WIDTH, 0, CANVAS_WIDTH, CANVAS_HEIGHT, 0, CANVAS_HEIGHT]}
              stroke="black"
              strokeWidth={1}
              closed/>
          </Layer>

          {/* Draw all the nodes in current state */}
          <Layer>
            {this.state['nodes'].map((node) => (
              <Group
                x={node.x}
                y={node.y}
                draggable
                onDragMove={(e) => {
                  this.updateNodeLoation(e.target.index, e.target.attrs.x, e.target.attrs.y)
                }}
                dragBoundFunc={ function (pos) {
                  var newY = pos.y < RADIUS ? RADIUS : pos.y > STAGE_Y + CANVAS_HEIGHT - RADIUS ? STAGE_Y + CANVAS_HEIGHT - RADIUS : pos.y;
                  var newX = pos.x > STAGE_X + CANVAS_WIDTH - RADIUS ? STAGE_X + CANVAS_WIDTH - RADIUS : pos.x < STAGE_X + RADIUS ? STAGE_X + RADIUS :  pos.x;
                  return {
                    x: newX,
                    y: newY,
                  };
                }}>
              <Circle 
                radius={RADIUS} 
                stroke="black"/>
                <Text 
                x={-8}
                y={-5}
                align="center"
                width={RADIUS}
                fontStyle="bold"
                text={node.id}/>
                </Group>
            ))}
            {(Object.values(this.state.edges)).map((edge) => 
                <Line
                  points={[edge.startX, edge.startY, edge.endX, edge.endY]}
                  stroke='black'
                  width={10}/>
            )}
          </Layer>
        </Stage>
      </div>

    );
  }

  // When a node is dragged or its location changes, update its coordinates, and redraw its edges
  updateNodeLoation = (id, newX, newY) => {
    const node=initialNodes[id]
    const edges=node['edges']
    // Update the coordinates of the node
    node['x'] = newX
    node['y'] = newY
    // Update the points of each of the edges touching this node
    edges.forEach(edge => {
      const otherNodeID = initialEdges[edge].endNodeID === id ? initialEdges[edge].startNodeID : initialEdges[edge].endNodeID
      const points = this.getEdgePoints(node, initialNodes[otherNodeID])
      initialEdges[edge].startX = points.startX
      initialEdges[edge].startY = points.startY
      initialEdges[edge].endX = points.endX
      initialEdges[edge].endY = points.endY
    })
    this.setState({ nodes: initialNodes, edges: initialEdges});
  }

  // Add a new node
  addNode = (e) => {
    // Get the location of the cursor
    const stage = e.currentTarget.getStage()
    const location = stage._changedPointerPositions[0]
    const posX = location.x
    const posY = location.y
    //console.log(posX, posY)

    // Detect if an existing node has been clicked
    var selectedNode = null
    for (var i = 0; i < initialNodes.length; i++){
      const dict=initialNodes[i]
      var x = dict.x
      var y = dict.y
      var dist = Math.sqrt(Math.pow(posX-x, 2) + Math.pow(posY-y, 2))
      if(dist < RADIUS*1.5){
        selectedNode = true
        if(currentNode != null)
          previousNode=currentNode
        currentNode = dict.id
        break
      }

    }

    // If no node has been selected, add a node
    if(!selectedNode){
      initialNodes.push({id: nodeCount++, x: posX, y: posY, edges: []})
      this.setState({ nodes: initialNodes });
      previousNode=null;
    }
    else{
      // Add an edge
      if(previousNode !== null && currentNode !== previousNode){
        const startNode = initialNodes[previousNode]
        const endNode = initialNodes[currentNode]
        const edgeID = startNode.id.toString() + endNode.id.toString()

        initialEdges[edgeID] = (this.getEdgePoints(startNode, endNode))
        // Add the edgeID to the list of edges in both the nodes
        startNode.edges.push(edgeID)
        endNode.edges.push(edgeID)
        this.setState({ edges: initialEdges });

        //clear all selected nodes
        previousNode=null
        currentNode=null
      }

    }
  }

  // Given a start node and an end node, return a dictionary of the points to draw an edge
  getEdgePoints = (startNode, endNode) =>{
    //find slope
    const slope = (endNode.y - startNode.y)/(endNode.x-startNode.x)
    const norm = (endNode.x-startNode.x)/Math.abs(endNode.x-startNode.x)

    const theta = Math.atan(slope)
    const startNodeOffsetX = Math.cos(theta)*RADIUS*norm
    const startNodeOffsetY = Math.sin(theta)*RADIUS*norm

    const phi = Math.PI/2 - theta
    const endNodeOffsetX = Math.cos(phi)*RADIUS*norm
    const endNodeOffsetY = Math.sin(phi)*RADIUS*norm

    return {startNodeID: startNode.id, endNodeID: endNode.id, startX: startNode.x + startNodeOffsetX, startY: startNode.y + startNodeOffsetY, endX: endNode.x - endNodeOffsetY, endY: endNode.y - endNodeOffsetX}
  }

}
 
export default Canvas;