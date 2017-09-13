import React, { Component } from 'react';

var aboutImageDivStyle = {
    top: "0px",
    width: "40%",
    display: "inline-block",
    marginLeft: "70px"
}

var aboutImageStyle = {
    top: "0px",
    width: "100%",
    marginTop: "20px",
    marginBottom: "20px",
    borderRadius: "50px"
}

var aboutPageStyle = {
    width: "100%",
    backgroundColor: "cornsilk"
}

var aboutPageSubStyle = {
    top: "0px",
    display: "inline-flex",
    width: "100%",
}

var aboutTextSection = {
    display: "inline-block",
    width: "50%",
    paddingTop: "20px"
}

var aboutHeading = {
    textAlign: "right",
    color: "black",
    fontSize: "60px",
    marginRight: "70px"
}

var paragraphStyle = {
    margin: "15px",
    marginRight: "70px",
    color: "grey",
    textAlign: "right"
}

var dividerStyle = {
    textAlign: "center",
    width: "300px",
    margin: "auto",
    marginTop: "-70px",
    marginBottom: "-70px"
}

var aboutParagraph1 = `
These are the most fundamental baselines the new Edinburgh Entrepreneurs follow at any time.
In any setting. Entrepreneurship is not about business, not about finance, or making money at
all. It is about this inner drive, this feeling that we cannot suppress. The urge to change the world
that surrounds us. The invisible bond we feel with each and every peer in our community and the
call to make ourselves, our environment, and the world as a whole better. Day by day. Step by
step.
`

var aboutParagraph2 = `
Founded in September 2016, we are one of the youngest, yet most aspiring societies at the
University of Edinburgh. With a current committee of 10 people, 2 invaluable sponsors and 80
paid members we have the thrust to create a new world within our reach and well beyond. We
already have initiated deep cooperations with other societies, including the Economics Society,
the Business Society and EUTIC (Edinburgh University Trading & Investment Club) on campus,
as well as the Entrepreneurship Societies at Heriot-Watt and Napier, promising ever growing
fellowship.
`

var aboutParagraph3 = `
The new structure will allow us to engage with more people and their very specific interests.
As a community, as a platform for change, we have to engage on every level with each other. We
want to give members a chance to explore new frontiers and build up the skill & knowledge they
need in order to pursue their aspirations and dreams. We want to change how Entrepreneurship
on and off campus is perceived by first re-defining ourselves.
`

export default class AboutPage extends Component {
    render() {
        return (
            <div id="about-page" style={aboutPageStyle}>
                <div style={aboutPageSubStyle}>
                    <div className="about-image" style={aboutImageDivStyle}>
                        <img src="img/about1.jpg" style={aboutImageStyle}/>
                    </div>
                    <div className="about-text-section" style={aboutTextSection}>
                        <h1 style={aboutHeading}>Not a society a community.</h1>
                        <h5 style={paragraphStyle}>{ aboutParagraph1 }</h5>
                    </div>
                </div>
                <div style={dividerStyle} >
                    <img src="img/red-divider.svg" width="100%"/>
                </div>
                <div style={aboutPageSubStyle}>
                    <div className="about-text-section" style={aboutTextSection}>
                        <h1 style={aboutHeading}>Not one to many, but many to many.</h1>
                        <h5 style={paragraphStyle}>{ aboutParagraph2 }</h5>
                    </div>
                    <div className="about-image" style={aboutImageDivStyle}>
                        <img src="img/about1.jpg" style={aboutImageStyle}/>
                    </div>
                </div>
                <div style={dividerStyle} >
                    <img src="img/red-divider.svg" width="100%"/>
                </div>
                <div style={aboutPageSubStyle}>
                    <div className="about-image" style={aboutImageDivStyle}>
                        <img src="img/about2.jpg" style={aboutImageStyle}/>
                    </div>
                    <div className="about-text-section" style={aboutTextSection}>
                        <h1 style={aboutHeading}>Inspiring. Innovative. Connecting.</h1>
                        <h5 style={paragraphStyle}>{ aboutParagraph3 }</h5>
                    </div>
                </div>
            </div>
        );
    }
}