import React, { Component } from 'react';

import './PersonDetails.css';
import SwapiService from "../../services/SwapiService";
import ErrorIndicator from "../ErrorIndicator";
import Loading from "../Loading";

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    people: null,
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.peopleId !== this.props.peopleId){
      this.updatePerson();
    }
  }

  async updatePerson() {
    try{
      const {peopleId} = this.props;
      if(!peopleId) {
        return;
      }

      const people = await this.swapiService.getPersone(peopleId);
      this.setState({
        people,
        loading: false,
        error: false
      });
    }catch (e) {
      this.onDataError(e);
    }
  }

  onDataError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  };

  render() {
    const {people, loading, error} = this.state;
    const errorMessage = error? <ErrorIndicator/>: null;
    const spinner = loading? <Loading/>: null;
    let content = null;

    if(!loading && !error) {
      content = <CentralContent people={people}/>;
    }

    return (
      <div className="col-md-8 person-details">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const CentralContent = ({people}) => {
  return (
    <>
      <div className="row">
        <div className="col-md-4 person-details-image">
          <img src={`https://starwars-visualguide.com/assets/img/characters/${people.id}.jpg`} alt="" className="img-responsive"/>
        </div>

        <div className="col-md-8 person-details-data">
          <h3>{people.name}</h3>
          <ul>
            <li>Gender {people.gender}</li>
            <li>Birth Year {people.birthYear}</li>
            <li>Eye Color {people.eyeColor}</li>
          </ul>
        </div>
      </div>
    </>
  )
};