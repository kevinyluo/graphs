import React, { Component } from 'react';
import "./graphData.css"
import { Table, TabPane } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GraphSettings from '../graphSettings/graphSettings'

class graphData extends Component {
    state = { graphWeight: 'unweighted'}

    render() { 
        return (  
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Vertex</th>
                        <th>Edges</th>
                    </tr>
                </thead>
                <tbody>
                {Array.from({ length: 20 }).map((_, index) => (
                    <tr>
                     <td >{index}</td>
                     <td >1</td>
                    </tr> 
                 ))}
                </tbody>
            </Table>
        );
    }
}
 
export default graphData;