import './canvas.css';
import React, { Component, useContext} from 'react';
import { Stage, Layer, Text, Circle, Line, Group} from 'react-konva';
import {GraphContext} from '../graphContext'

const CANVAS_WIDTH=window.innerWidth/2
const CANVAS_HEIGHT=window.innerHeight*0.8
const RADIUS=15//window.innerHeight*window.innerWidth/120000
const STAGE_X= 0
const STAGE_Y= 0

var nodeCount = -1
var previousNode=null
var currentNode=null

const Canvas = () => {

  const [nodeList, setNodeList, edgeList, setEdgeList] = useContext(GraphContext)

  // When a node is dragged or its location changes, update its coordinates, and redraw its edges
  const updateNodeLocation = (id, newX, newY) => {
    var copyEdgeList = {}
    var copyNodeList = [...nodeList]
    Object.assign(copyEdgeList, edgeList)

    const node=copyNodeList[id]
    const edges=node['edges']
    // Update the coordinates of the node
    node['x'] = newX
    node['y'] = newY
    // Update the points of each of the edges touching this node
    edges.forEach(edge => {
      const otherNodeID = copyEdgeList[edge].endNodeID === id ? copyEdgeList[edge].startNodeID : copyEdgeList[edge].endNodeID
      const points = getEdgePoints(node, copyNodeList[otherNodeID])
      copyEdgeList[edge].startX = points.startX
      copyEdgeList[edge].startY = points.startY
      copyEdgeList[edge].endX = points.endX
      copyEdgeList[edge].endY = points.endY
    })
    setNodeList([...copyNodeList])
    setEdgeList(copyEdgeList)
  }

  // Add a new node
  const addNode = (e) => {
    if(e.evt.button != 0)
      return
    // Get the location of the cursor
    const stage = e.currentTarget.getStage()
    const location = stage._changedPointerPositions[0]
    const posX = location.x
    const posY = location.y
    
    // Exit if the user clicked outside of the canvas
    if(posX > CANVAS_WIDTH || posY > CANVAS_HEIGHT)
      return

    // Detect if an existing node has been clicked
    var selectedNode = null
    for (var i = 0; i < nodeList.length; i++){
      const dict=nodeList[i]
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
      nodeCount += 1
      setNodeList(prevNodeList => [...prevNodeList, {id: nodeCount, x: posX, y: posY, edges: []}])
      previousNode=null;
    }
    else{
      // Add an edge
      if(previousNode !== null && currentNode !== previousNode){
        var copyEdgeList = {}
        var copyNodeList = [...nodeList]
        Object.assign(copyEdgeList, edgeList)

        const startNode = copyNodeList[previousNode]
        const endNode = copyNodeList[currentNode]
        const edgeID = startNode.id.toString() + endNode.id.toString()

        copyEdgeList[edgeID] = (getEdgePoints(startNode, endNode))
        // Add the edgeID to the list of edges in both the nodes
        startNode.edges.push(edgeID)
        endNode.edges.push(edgeID)
        setNodeList([...copyNodeList])
        setEdgeList(copyEdgeList)

        //clear all selected nodes
        previousNode=null
        currentNode=null
      }

    }
  }

  // Given a start node and an end node, return a dictionary of the points to draw an edge
  const getEdgePoints = (startNode, endNode) =>{
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


  return (
      <div>
        <Stage 
          width={window.innerWidth} height={window.innerHeight} x={STAGE_X} y={STAGE_Y} onClick={addNode}>
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
            {nodeList.map((node) => (
              <Group
                x={node.x}
                y={node.y}
                draggable
                onDragMove={(e) => {
                  updateNodeLocation(e.target.index, e.target.attrs.x, e.target.attrs.y)
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
            {(Object.values(edgeList)).map((edge) => 
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
 
export default Canvas;