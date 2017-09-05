import React, { Component } from 'react';

var scrollButtonStyle = {
  textAlign: "center",
  fontSize: "36px",
  margin: "auto",
  marginTop: "20px"
}

export default class ScrollButton extends Component {
  render() {
    return (
      <button type="button" className="btn btn-secondary" style={scrollButtonStyle}>
        Join Us
      </button>
    );
  }
}