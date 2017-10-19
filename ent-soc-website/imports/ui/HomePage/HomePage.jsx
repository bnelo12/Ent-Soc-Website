import React, { Component } from 'react';
import CounterView from './CounterView';
import ScrollButton from './ScrollButton';
import JoinModal from './JoinModal'

var parallaxScrollStyle = {
  height: "100%",
  position: "absolute",
  backgroundAttachment: "fixed",
  width: "100%",
  backgroundColor: "#173653"
  // backgroundImage: "url(https://images8.alphacoders.com/469/469681.jpg)"
}

var subHeadingStyle = {
  color: "white",
  textAlign: "center",
  margin: "50px"
}

var nextEventStyle = {
  position: "absolute",
  left: "0px",
  top: "0px",
  padding: "10px",
  color: "white",
  fontSize: "12px",
  backgroundColor: "#f0544f"
}

export default class Header extends Component {
  render() {
    return (
      <div id="home-page" style={parallaxScrollStyle}>
        <JoinModal/>
        <div className="container">
            <a id="next-event" class="paper" style={nextEventStyle} target="_blank">
              Next Event:
            </a>
            <img className="main-logo img-fluid mx-auto d-block" src="img/main/entsoc LOGO WHITE.png"/>
            <div style={subHeadingStyle}>
              <h5>Inspiring Innovative Connecting</h5>
            </div>
            <div className="row align-items-end">
              <ScrollButton/>
            </div>
        </div>
      </div>
    );
  }
}
