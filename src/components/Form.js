import React, {Component} from 'react';
import { Button, Input, Container } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ""
        };
    }

    submitHandler = async (e) => {
        e.preventDefault();
        this.props.getAsteroidById(this.state.id);
    }

    changeValue = (e) => {
        this.setState({
            id: e.target.value
        });
    }

    getRandomAsteroid = async () => {
        this.props.getRandomAsteroid();
    }

    render() {
        if(this.props.asteroidInfo) {
            return <Redirect to="/asteroid-info" />
        }
        return (
            <Container maxWidth="sm">
                <form onSubmit={this.submitHandler}>
                    <Input placeholder="Enter Asteroid ID" type="number" onChange={this.changeValue} value={this.state.id}/>
                    <Button type="submit" disabled={!this.state.id} variant="contained" color="secondary">Submit</Button>
                </form>
                <Button onClick={this.getRandomAsteroid} color="primary" variant="contained">Random Asteroid</Button>
            </Container>
           
        );
    }
}

export default Form;