import React, { Component } from 'react';

var styles = {
    event: {
        minWidth: "230px",
        maxWidth: "230px",
        height: "300px",
        backgroundColor: "#173653",
        margin: "auto",
        position: "relative",
        textAlign: "center",
        marginTop: "20px",
        marginBottom: "20px"
    },
    eventDecoration: {
        position: "absolute",
        top: "20px",
        height: "150px",
        width: "15px",
        left: "1px",
        backgroundColor: "white"
    },
    eventMonth: {
        color: "white",
        position: "absolute",
        top: "17px",
        left: "20px"
    },
    eventDay: {
        position: "absolute",
        top: "20px",
        fontSize: "130px",
        color: "white"
    },
    eventDescriptionBanner: {
        position: "absolute",
        top: "200px",
        height: "75px",
        width: "100%",
        backgroundColor: "#f0544f",
        left: "0px",
        textDecoration: "none",
        color: "white",
        textAlign: "center",
        paddingTop: "10px"
    }
}

export default class Event extends Component {
    render() {
        return (
            <div className="paper col-4" id="event-template" style={styles.event}>
                <div className="event-decoration" style={styles.eventDecoration}/>
                <div className="event-month" style={styles.eventMonth}>
                </div>
                <div className="event-day" style={styles.eventDay}>
                </div>
                <a href="#" className="event-description-banner" style={styles.eventDescriptionBanner}>
                    <h5 className="event-description-name" style={{fontSize: "12px", padding: "0px 5px"}}></h5>
                    <p className="event-description-location" style={{fontSize: "10px", padding: "0px 5px"}}></p>
                </a>
            </div>
        );
    }
}