import React, {Component} from "react";

export default class ErrorButton extends Component{
  state = {
    renderError: false
  };

  render() {
    if(this.state.renderError) {
      this.esim.inch = 'Barlusss!!!';
    }

    return(
      <button
        className="btn btn-danger btn-lg float-right"
        onClick={() => {this.setState({renderError: true})}}
      >
        Ստանալ սխալ
      </button>
    )
  }
}