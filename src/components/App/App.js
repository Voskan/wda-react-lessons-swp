import React, { Component } from 'react';

import Header from '../Header';
import Footer from '../Footer';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';

import './App.css';
import ErrorButton from "../ErrorButton";
import ErrorPage from "../ErrorPage";

export default class App extends Component {
  state = {
    hasError: false,
    randomPlanet: true,
    peopleId: 1
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true
    });
  }

  toggleRandomPlanet = () => {
    this.setState(({randomPlanet}) => {
      return {
        randomPlanet: !randomPlanet
      }
    });
  };

  onItemClicked = (event, id) => {
    event.preventDefault();
    this.setState({
      peopleId: id
    });
  };

  render () {
    const {randomPlanet, hasError} = this.state;
    if(hasError) return <ErrorPage/>;

    let rPlanetComponent = null;
    let btnText = 'Միացնել';
    let btnClasses = 'btn btn-info btn-lg';

    if(randomPlanet) {
      rPlanetComponent = <RandomPlanet/>;
      btnText = 'Անջատել';
      btnClasses = 'btn btn-success btn-lg';
    }

    return (
      <>
        <div className="container">
          <Header />
          {rPlanetComponent}
          <button onClick={this.toggleRandomPlanet} className={btnClasses}>{btnText}</button>
          <ErrorButton/>
          <div className="row central-box">
            <ItemList onItemClicked={this.onItemClicked}/>
            <PersonDetails peopleId={this.state.peopleId}/>
          </div>
        </div>
        <Footer/>
      </>
    );
  }
} 