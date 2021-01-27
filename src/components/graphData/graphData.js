import React, { Component, useContext } from 'react';
import "./graphData.css"
import { Table, TabPane } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GraphSettings from '../graphSettings/graphSettings'
import {GraphContext} from '../graphContext'


const GraphData = () => {
    const [nodeList, setNodeList, edgeList, setEdgeList] = useContext(GraphContext)

        return (  
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Vertex</th>
                        <th>Edges</th>
                    </tr>
                </thead>
                <tbody>
                {Array.from({ length: nodeList.length }).map((_, index) => (
                    <tr>
                     <td >{index}</td>
                     <td >1</td>
                    </tr> 
                 ))}
                </tbody>
            </Table>
        );
}
 
export default GraphData;