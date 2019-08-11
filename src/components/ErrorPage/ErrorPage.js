import React from 'react';

const errorStyles = {
  'background': '#353643',
  'color': '#eee',
  'text-align': 'center'
};

export default function () {
  return (
    <div className="container">
      <div className="jumbotron" style={errorStyles}>
        <h1 className="display-4">ԱՊՍՈՍ!</h1>
        <p className="lead">Տեղի է ունեցել ահավոր բան․․․</p>
        <hr className="my-4"/>
          <p>Դուք փորձում էիք դառնալ ծրագրավորող, բայց, ավախ դա ձեզ չի հաջողվի :)</p>
      </div>
    </div>
  );
}