import React, { Component } from 'react';

var logoStyle = {
    textAlign: "center"
}

var logoImageStyle = {
    maxWidth: "200px",
    textAlign: "center"
}

var logoHeadingStyle = {
    textAlign: "center"
}

var descriptionStyle = {
    textAlign: "left"
}

export default class SubdivisionIcon extends Component {
    render() {
        return (
            <div className="subdivsion-icon" style={logoHeadingStyle}>
                <img src={this.props.img} style={logoImageStyle}/>
                <h3 style={logoHeadingStyle}>{this.props.name}</h3>
                <p style={descriptionStyle}>{this.props.desc}</p>
            </div>
        );
    }
}
