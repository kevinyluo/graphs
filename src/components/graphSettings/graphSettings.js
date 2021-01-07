import React, { Component } from 'react';
import { Button, ButtonGroup, ToggleButton, ToggleButtonGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './graphSettings.css'


class graphSettings extends Component {
    state = { directionality: 'undirected',
              graphWeight: 'unweighted',
              indexType: 'numberIndex'}

    getDirectionality = (props) =>{
        console.log(props)
    }

    render() { 
        return (
            <div className="Spacer">
                <span>
                    <ToggleButtonGroup type="checkbox" value={this.state.directionality} onChange={this.changeDirectionality}>
                        <ToggleButton size='sm' variant='dark' value={'undirected'}>Undirected</ToggleButton>
                        <ToggleButton size='sm' variant='dark'value={'directed'}>Directed</ToggleButton>
                    </ToggleButtonGroup>
                </span>
                <span>
                    <ToggleButtonGroup type="checkbox" value={this.state.graphWeight} onChange={this.changeGraphWeight}>
                        <ToggleButton size='sm' variant='dark' value={'unweighted'}>Unweighted</ToggleButton>
                        <ToggleButton size='sm' variant='dark'value={'weighted'}>weighted</ToggleButton>
                    </ToggleButtonGroup>
                </span>
                <span>
                    <ToggleButtonGroup type="checkbox" value={this.state.indexType} onChange={this.changeindexType}>
                        <ToggleButton size='sm' variant='dark' value={'numberIndex'}>Number Index</ToggleButton>
                        <ToggleButton size='sm' variant='dark'value={'letterIndex'}>Letter Index</ToggleButton>
                        <ToggleButton size='sm' variant='dark' value={'customindex'}>Custom Index</ToggleButton>
                    </ToggleButtonGroup>    
                </span>
            </div>);
    }

    changeDirectionality = (e) => {
        this.setState({ directionality: e[1] });
    }

    changeGraphWeight = (e) => {
        this.setState({ graphWeight: e[1] });
    }

    changeindexType= (e) => {
        this.setState({ indexType: e[1] });
    }
}
 
export default graphSettings;