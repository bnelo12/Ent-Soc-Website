import React, { Component } from 'react';
import CounterView from './CounterView';
import ScrollButton from './ScrollButton';

var parallaxScrollStyle = {
  height: "100%",
  position: "absolute",
  backgroundAttachment: "fixed",
  width: "100%",
  backgroundImage: "url(https://images8.alphacoders.com/469/469681.jpg)"
}

export default class Header extends Component {
  render() {
    return (
      <div className="page_1" style={parallaxScrollStyle}>
        <div className="container">
            <img className="main-logo img-fluid mx-auto d-block" src="img/main/entsoc LOGO WHITE.png"/>
            <div className="row align-items-center">
              <CounterView/>
            </div>
        </div>
        <div className="row align-items-end">
          <ScrollButton/>
        </div>
      </div>
    );
  }
}