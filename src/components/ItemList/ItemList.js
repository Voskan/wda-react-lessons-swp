import React, { Component } from 'react';

import SwapiService from "../../services/SwapiService";

import './ItemList.css';
import ErrorIndicator from "../ErrorIndicator";
import Loading from "../Loading";

export default class ItemList extends Component {

  swapiService = new SwapiService();

  state = {
    peopleList: null,
    loading: true,
    error: false
  };

  onDataError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  };

  async componentDidMount() {
    try{
      const peopleList = await this.swapiService.getAllPeoples();
      this.setState({
        peopleList,
        error: false,
        loading: false
      })
    }catch (e) {
      this.onDataError(e);
    }
  }

  renderItems = (arr) => {
    return arr.map(({id, name}) => {
      return (
        <a href="/"
           className="list-group-item list-group-item-action"
           key={id}
           onClick={(e) => {this.props.onItemClicked(e, id)}}
        >
          {name}
        </a>
      )
    });
  };

  render () {
    const {loading, peopleList, error} = this.state;
    const errorMessage = error? <ErrorIndicator/>: null;
    const spinner = loading? <Loading/>: null;
    let content = null;

    if(!loading && !error) {
      content = this.renderItems(peopleList);
    }

    return (
      <div className="col-md-4 list-group item-list">
        {errorMessage}
        {spinner}
        {content}
      </div>
    )
  }
}