import React, { Component } from 'react';

var personProfileStyle = {
    backgroundColor: "white",
    height: "300px",
    width: "250px",
    textAlign: "center",
    margin: "auto",
    marginTop: "20px",
    borderRadius: "20px"
}

var imageStyle = {
    padding: "20px"
}

export default class PersonProfile extends Component {
    render() {
        return (
            <div className="person-profile" style={personProfileStyle}>
                <img src="img/profile-pic-default.png" className="rounded" width="150px" style={imageStyle}/>
                <h3>First LastName</h3>
                <h4 className="text-muted">Position</h4>
                <hr/>
                <p></p>
            </div>
        );
    }
}