import './canvas.css';
import React, { Component } from 'react';
import { Stage, Layer, Rect, Text, Circle, Line, Star} from 'react-konva';

const CANVAS_WIDTH=window.innerWidth/2
const CANVAS_HEIGHT=window.innerHeight*0.8
const RADIUS=window.innerHeight*window.innerWidth/120000
const STAGE_X= 0 // window.innerWidth/4
const STAGE_Y= 0 //window.innerHeight/20

function generateShapes() {
  return [...Array(10)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * CANVAS_WIDTH,
    y: Math.random() * CANVAS_HEIGHT + (window.innerHeight-CANVAS_HEIGHT),
  }));
}

const INITIAL_STATE = generateShapes();

class Canvas extends Component {
  state = {initial: INITIAL_STATE}
  render() { 
    return (
      <div>
        <Stage 
          width={window.innerWidth} height={window.innerHeight} x={STAGE_X} y={STAGE_Y}>
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
            {this.state['initial'].map((node) => (
              <Circle 
                x={node.x} 
                y={node.y} 
                radius={RADIUS} 
                draggable
                dragBoundFunc={ function (pos) {
                  var newY = pos.y < STAGE_Y+RADIUS ? STAGE_Y+RADIUS : pos.y > STAGE_Y + CANVAS_HEIGHT - RADIUS ? STAGE_Y + CANVAS_HEIGHT - RADIUS : pos.y;
                  var newX = pos.x > STAGE_X + CANVAS_WIDTH - RADIUS ? STAGE_X + CANVAS_WIDTH - RADIUS : pos.x < STAGE_X + RADIUS ? STAGE_X + RADIUS :  pos.x;
                  return {
                    x: newX,
                    y: newY,
                  };
                }}
              stroke="black"/>
            ))}
          </Layer>
        </Stage>
      </div>

    );
  }
}
 
export default Canvas;