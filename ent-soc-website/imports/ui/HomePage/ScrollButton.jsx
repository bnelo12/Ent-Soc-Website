import React, { Component } from 'react';

var scrollButtonStyle = {
  textAlign: "center",
  fontSize: "36px",
  margin: "auto",
  width: "75px",
  marginTop: "20px"
}

export default class ScrollButton extends Component {
  render() {
    return (
      <button type="button" className="btn btn-outline-light" style={scrollButtonStyle}>
        <i className="fa fa-chevron-down" aria-hidden="true"></i>
      </button>
    );
  }
}