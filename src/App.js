import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Form from './components/Form';
import AsteroidInfo from "./components/AsteriodInfo";
import Requests from './services/requests';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      asteroidInfo: null,
    };
  }

  getAsteroidById = async (id) => {
    try {
      const asteroid = await Requests.getAsteroidById(id);    
      console.log(asteroid);
      this.setState({
        asteroidInfo: asteroid.data
      });
      
    }
    catch(e) {
      console.error(e);
    }
  }

  getRandomAsteroid = async () => {
    try {
      const randomAsteroids = await Requests.getRandomAsteroid();
      const randomAsteroidIndex = Math.floor(Math.random() * randomAsteroids.data.near_earth_objects.length);
      const randomAsteroid = await Requests.getAsteroidById(randomAsteroids.data.near_earth_objects[randomAsteroidIndex].id);
      console.log(randomAsteroid);
      this.setState({
        asteroidInfo: randomAsteroid.data
      });
      
    }
    catch(e) {
      console.error(e);
    }
  }

  clearData = () => {
    this.setState({asteroidInfo: null});
  }

  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <Form {...props} getAsteroidById={this.getAsteroidById} getRandomAsteroid={this.getRandomAsteroid} asteroidInfo={this.state.asteroidInfo}/>} />
          <Route exact path="/asteroid-info" render={(props) => <AsteroidInfo {...props} asteroidInfo={this.state.asteroidInfo} clearData={this.clearData}/>}/>
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
