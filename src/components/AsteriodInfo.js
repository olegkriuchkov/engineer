import React, {Component} from 'react';
import { Redirect } from "react-router-dom";
import { List, ListItemText, ListItem } from '@material-ui/core';

class AsteroidInfo extends Component {
    componentWillUnmount() {
        this.props.clearData();
    }
    render() {
        if(!this.props.asteroidInfo) {
            return <Redirect to="/" />
        }
        return (
            <List className="asteroid-info">
                <ListItem>
                    <ListItemText>Name: {this.props.asteroidInfo? this.props.asteroidInfo.name : "asteroid name"}</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>nasa_jpl_url: {this.props.asteroidInfo? this.props.asteroidInfo.nasa_jpl_url : "asteroid nasa_jpl_url"}</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>is_potentially_hazardous_asteroid: {this.props.asteroidInfo? `${this.props.asteroidInfo.is_potentially_hazardous_asteroid}` : "is_potentially_hazardous_asteroid"}</ListItemText>
                </ListItem>
            </List>
        );
    }
}

export default AsteroidInfo;