import React, { Component } from 'react';
import Counter from './Counter';

var counterViewStyle = {
  marginTop: "55px"
}

var colRightBorderStyle = {
  borderRight: "solid 1px"
} 

export default class App extends Component {
  render() {
    return (
      <div className="container" style={counterViewStyle}>
        <div className="row">
          <div className="col" style={colRightBorderStyle}>
            <Counter/>
          </div>
          <div className="col" style={colRightBorderStyle}>
            <Counter/>
          </div>
          <div className="col">
            <Counter/>
          </div>
        </div>
      </div>
    );
  }
}