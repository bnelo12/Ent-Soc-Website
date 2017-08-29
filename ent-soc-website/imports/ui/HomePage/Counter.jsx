import React, { Component } from 'react';

var counterText = {
  textAlign: "center",
  fontSize: "70px"
}

var counterLabel = {
  textAlign: "center"
}

export default class App extends Component {
  render() {
    return (
      <div className="counter-component">
        <div className="counter-text" style={counterText}>0</div>
        <div className="counter-label" style={counterLabel}>COUNTER LABEL</div>
      </div>
    );
  }
}