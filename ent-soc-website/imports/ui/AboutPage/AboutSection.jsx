import React, { Component } from 'react';

var aboutSectionStyle = {
    color: "#fafffd",
    backgroundColor: "#f0544f",
    height: "100%",
    minWidth: "300px",
}

var lineBreakStyle= {
    color: "#fafffd",
    backgroundColor: "#fafffd"
}

export default class AboutSection extends Component {
    render() {
        return (
            <div className="about-section paper" style={aboutSectionStyle}>
                <h3>{this.props.title}</h3>
                <hr style={lineBreakStyle}/>
                {this.props.text}
            </div>
        );
    }
}