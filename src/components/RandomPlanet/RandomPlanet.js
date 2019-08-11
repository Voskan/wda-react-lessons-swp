import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';
import Loading from "../Loading";
import ErrorIndicator from "../ErrorIndicator";

import './RandomPlanet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    });
  };

  onPlanetError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updatePlanet = async () => {
    try{
      const id = Math.floor(Math.random() * 18) + 3;

      const planet = await this.swapiService.getPlanet(id);
      this.onPlanetLoaded(planet);
    } catch (e) {
      this.onPlanetError(e);
    }
  };

  render() {
    const {loading, planet, error} = this.state;

    const errorMessage = error? <ErrorIndicator/>: null;
    const spinner = loading? <Loading/>: null;
    const content = !loading && !error? <PlanetView planet={planet}/>: null;

    return (
      <>
        <div className="row bg-primary random-planets">
          {errorMessage}
          {spinner}
          {content}
        </div>
      </>
    );
  }
}

const PlanetView = ({planet}) => {

  const {id, name, population,
    rotationPeriod, diameter} = planet;

  return (
    <>
      <div className="col-md-4 random-planets-image">
        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" className="img-responsive"/>
      </div>

      <div className="col-md-8 random-planets-data">
        <h3>{name}</h3>
        <ul>
          <li>Population {population}</li>
          <li>Rotation pereiud {rotationPeriod}</li>
          <li>Diameter {diameter}</li>
        </ul>
      </div>
    </>
  )
}