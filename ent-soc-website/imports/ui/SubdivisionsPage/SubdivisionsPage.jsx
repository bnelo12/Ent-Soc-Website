import React, { Component } from 'react';
import SubdivisionIcon from './SubdivisionIcon';

var subdivisionsViewStyle = {
    marginBottom: "0px",
    backgroundColor: "azure"
}

var subdivisionsViewLabelStyle = {
    width: "100%",
    textAlign: "center",
    paddingTop: "40px"
}

var subdivisionsViewMain = {
    width: "100%",
    PaddingBotton: "50px"
}


export default class SubdivisionsPage extends Component {
    render() {
        return (
            <div className="subdivisions-view" id="sudivisons-page" style={subdivisionsViewStyle}>
                <div style={subdivisionsViewMain}>
                    <h1 style={subdivisionsViewLabelStyle}>Subdivisions</h1>
                    <hr/>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <SubdivisionIcon name="EntPALS" img="/img/subdivisions/EntPALS/EP2.png" desc="EntPALS is the new scheme for first and second year Management Courses like industrial management, techniques of management, and innovation driven entrepreneurship."/>
                            </div>
                            <div className="col">
                                <SubdivisionIcon name="FinENT" img="/img/subdivisions/FinENT/FE2.png" desc="The new hub for Financial Entrepreneurship at the University of Edinburgh. With events, guest speakers, and workshops around the world of finance, economics, business, and law."/>
                            </div>
                            <div className="col">
                                <SubdivisionIcon name="Personal Development" img="/img/subdivisions/PDev/PD2.png" desc="Extroversion, vision, empathy, and public speaking come from hard training and our newly founded Personal Development subdivision will help with special and exclusive workshops to engage with the most private topics that stop us from showcasing our awesomeness."/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <SubdivisionIcon name="SocENT" img="/img/subdivisions/SocENT/SE2.png" desc="Not every business has to land in Silicon Valley to do good. Social Entrepreneurship handles local, regional, national, and even international social hardship through innovative and one-of-a-kind solutions."/>
                            </div>
                            <div className="col">
                                <SubdivisionIcon name="TechENT" img="/img/subdivisions/TechENT/TE-01.png" desc="A network of excellent coders, engineers, and tech visionaries comes together at the University of Edinburgh to empower and drive the Tech Entrepreneurial scene in Scotland."/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}