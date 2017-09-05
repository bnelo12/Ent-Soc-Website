import React, { Component } from 'react';

var teamPageStyle = {
    height: "600px",
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
            <div className="team-page" style={teamPageStyle}>
                <h1 style={teamPageHeaderStyle}>THE TEAM</h1>
            </div>
        );
    }
}