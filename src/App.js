import './App.css';
import React, { Component } from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Canvas from './components/canvas/canvas'
import GraphSettings from './components/graphSettings/graphSettings'
import GraphData from './components/graphData/graphData'


class App extends Component {
  state = {}

  onGraphWeightChange(weight) {
    this.setState({ graphWeight: weight })
  }
  
  render() { 
    return (
      <div className="App">
        <span>
          <GraphSettings ></GraphSettings>
        </span>
        <div className="Graph-data">
          <CardColumns>
            <Card style={{ width: '20rem', height: "78.5%"}}>
              <GraphData></GraphData>
            </Card>
            <Card style={{ width: "50%", height: "78.5%"}}>
              <Canvas></Canvas>
            </Card>
          </CardColumns>
        </div>
      </div>
    )
  }
}
 
export default App;