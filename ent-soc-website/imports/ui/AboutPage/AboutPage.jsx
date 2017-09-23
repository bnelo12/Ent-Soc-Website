import React, { Component } from 'react';
import AboutSection from "./AboutSection"

var aboutPageStyle = {
    backgroundColor: "#f3a712",
}

var aboutTextSectionStlye = {
    padding: "30px"
}

export default class AboutPage extends Component {
    render() {
        return (
            <div id="about-page" style={aboutPageStyle}>
                <div className="callout">
                    <div className="text-vertical-center">
                        <h1>About Our Community</h1>
                    </div>
                </div>
                <div className="container" style={aboutTextSectionStlye}>
                    <div className="row">
                        <div className="col">
                            <AboutSection title="Not a society, a community" text="Founded in September 2016, we are one of the youngest, yet most aspiring societies at the University of Edinburgh."/>
                        </div>
                        <div className="col">
                            <AboutSection title="Not one to many, but many to many." text="With a current committee of 10 people, 2 invaluable sponsors and 80 paid members we have the thrust to create a new world within our reach and well beyond."/>
                        </div>
                        <div className="col">
                            <AboutSection title="Inspiring. Innovative. Connecting." text="These are the most fundamental baselines the new Edinburgh Entrepreneurs follow at any time. In any setting."/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}