import React, { Component } from 'react';

var subdivisionsViewStyle = {
    height: "500px",
    position: "absolute",
    top: "100%",
    width: "100%",
    marginBottom: "0px",
    backgroundImage: "url(http://www.mrwallpaper.com/wallpapers/edinburgh-castle-great-britain-1920x1080.jpg)",
    backgroundAttachment: "fixed"
}

var subdivisionsViewLabelStyle = {
    width: "100%",
    backgroundColor: "white",
    textAlign: "center"
}

var subdivisionsViewMain = {
    width: "100%",
    height: "100%",
    
}


export default class SubdivisionsPage extends Component {
    render() {
        return (
            <div className="subdivisions-view" style={subdivisionsViewStyle}>
                <div style={subdivisionsViewLabelStyle}>
                    <div>Edinburgh Entreupenuers Subdivisions</div>
                </div>
                <div style={subdivisionsViewMain}>
                </div>
            </div>
        );
    }
}