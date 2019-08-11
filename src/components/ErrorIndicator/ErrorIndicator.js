import React from 'react'

import './Errorindicator.css'
import icon from './error.png';

export default function () {
  return(
    <div className="error-box">
      <h3>UPSs...</h3>
      <img src={icon} alt="Error icon"/>
      <p>Տեղի է ունեցել անդառնալին․․․</p>
    </div>
  );
}