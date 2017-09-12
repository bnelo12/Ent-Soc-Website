import React, { Component } from 'react';

var headerStyle = {
  width: "100%",
  zIndex: "1",
  top: "calc(100% - 70px)",
  position: "absolute",
  WebkitBoxShadow: "0 8px 6px -6px #999",
  MozBoxShadow: "0 8px 6px -6px #999",
  boxShadow: "0 8px 6px -6px #999",
}

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="header" style={headerStyle}>
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
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}