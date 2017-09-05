import React, { Component } from 'react';
import SubdivisionIcon from './SubdivisionIcon';

var subdivisionsViewStyle = {
    marginBottom: "0px",
    backgroundColor: "azure"
}

var subdivisionsViewLabelStyle = {
    width: "100%",
    textAlign: "center",
    marginTop: "40px"
}

var subdivisionsViewMain = {
    width: "100%",
    PaddingBotton: "50px"
}


export default class SubdivisionsPage extends Component {
    render() {
        return (
            <div className="subdivisions-view" style={subdivisionsViewStyle}>
                <div style={subdivisionsViewMain}>
                    <h1 style={subdivisionsViewLabelStyle}>SUBDIVISONS</h1>
                    <hr/>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <SubdivisionIcon name="EntPALS" img="/img/subdivisions/EntPALS/EP2.png"/>
                            </div>
                            <div className="col">
                                <SubdivisionIcon name="FinENT" img="/img/subdivisions/FinENT/FE2.png"/>
                            </div>
                            <div className="col">
                                <SubdivisionIcon name="Personal Development" img="/img/subdivisions/PDev/PD2.png"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <SubdivisionIcon name="SocENT" img="/img/subdivisions/SocENT/SE2.png"/>
                            </div>
                            <div className="col">
                                <SubdivisionIcon name="TechENT" img="/img/subdivisions/TechENT/TE-01.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}