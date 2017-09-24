import React, { Component } from 'react';

var headerStyle = {
  width: "100%",
  zIndex: "1",
  top: "calc(100% - 70px)",
  position: "absolute",
  backgroundColor: "#173653"
}

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark" id="header" style={headerStyle}>
        <a className="navbar-brand" href="#">
          <img src="img/main/entsoc LOGO WHITE.png" style={{height: 50 + 'px'}}/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="dropup">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#home-page">HOME<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#about-page">ABOUT<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#sudivisons-page">SUBDIVISIONS</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#events-page">EVENTS</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}