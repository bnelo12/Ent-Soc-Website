import React, { Component } from 'react';

var scrollButtonStyle = {
  textAlign: "center",
  fontSize: "20px",
  margin: "auto",
  marginTop: "20px"
}

var customButtonStyle = `
  .btn-custom {
    background-color: #f0544f;
    border-color: #f0544f;
    color: white;
    border-radius: 40.0px;
    width: 300px
  }
  .btn-custom:hover,
  .btn-custom:focus,
  .btn-custom:active,
  .btn-custom.active {
    background-color: #ee3d38;
    border-color: #ec2620;
  }
  .btn-custom.disabled:hover,
  .btn-custom.disabled:focus,
  .btn-custom.disabled:active,
  .btn-custom.disabled.active,
  .btn-custom[disabled]:hover,
  .btn-custom[disabled]:focus,
  .btn-custom[disabled]:active,
  .btn-custom[disabled].active,
  fieldset[disabled] .btn-custom:hover,
  fieldset[disabled] .btn-custom:focus,
  fieldset[disabled] .btn-custom:active,
  fieldset[disabled] .btn-custom.active {
    background-color: #f0544f;
    border-color: #f0544f;
  }
`

export default class ScrollButton extends Component {
  render() {
    return (
      <button type="button" className="btn btn-custom" style={scrollButtonStyle} data-toggle="modal" data-target="#JoinModal" href="https://entsoc.typeform.com/to/lZRrKT">
        <style>
          {customButtonStyle}
        </style>
        Join Us
      </button>
    );
  }
}