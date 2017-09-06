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
      <button type="button" className="btn btn-secondary" style={scrollButtonStyle} data-toggle="modal" data-target="#JoinModal" href="https://entsoc.typeform.com/to/lZRrKT">
        Join Us
      </button>
    );
  }
}