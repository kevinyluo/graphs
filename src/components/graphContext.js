import React, {useState, createContext} from 'react';

export const GraphContext = createContext();

export const GraphProvider = (props) => {
    const [nodeList, setNodeList] = useState([])
    const [edgeList, setEdgeList] = useState({})

    return(
        <GraphContext.Provider value={[nodeList, setNodeList, edgeList, setEdgeList]}>
            {props.children}
        </GraphContext.Provider>
    );
}