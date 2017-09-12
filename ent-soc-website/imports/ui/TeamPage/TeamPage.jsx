import React, { Component } from 'react';
import PersonProfile from './PersonProfile'

var teamPageStyle = {
    textAlign: "center",
    backgroundImage: "url(/img/fqySIM.jpg)",
    backgroundAttachment: "fixed"
}

var teamPageHeaderStyle = {
    paddingTop: "50px",
    color: "white",
}

export default class TeamPage extends Component {
    render() {
        return (
            <div className="team-page" id="team-page" style={teamPageStyle}>
                <h1 style={teamPageHeaderStyle}>MEET THE TEAM</h1>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <PersonProfile/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <PersonProfile/>
                        </div>
                        <div className="col">
                            <PersonProfile/>
                        </div>
                        <div className="col">
                            <PersonProfile/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <PersonProfile/>
                        </div>
                        <div className="col">
                            <PersonProfile/>
                        </div>
                        <div className="col">
                            <PersonProfile/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}