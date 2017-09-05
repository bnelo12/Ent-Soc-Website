import React, { Component } from 'react';

var subdivisionsViewStyle = {
    height: "500px",
    position: "absolute",
    top: "100%",
    width: "100%",
    marginBottom: "0px",
    backgroundColor: "azure"
}

var subdivisionsViewLabelStyle = {
    width: "100%",
    backgroundColor: "white",
    textAlign: "center"
}

var subdivisionsViewMain = {
    width: "100%",
    height: "500px",
    backgroundColur: "white"
}


export default class SubdivisionsPage extends Component {
    render() {
        return (
            <div className="subdivisions-view" style={subdivisionsViewStyle}>
                <div style={subdivisionsViewMain}>
                </div>
            </div>
        );
    }
}