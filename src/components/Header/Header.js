import React, { Component } from 'react';

import './Header.css';

export default class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div className="container">
          <div className="navbar-brand">
            <a href="/" className="header-logo">SDB</a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="/">People</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Planets</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Starships</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

}