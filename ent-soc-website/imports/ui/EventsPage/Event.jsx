import React, { Component } from 'react';

var styles = {
    event: {
        width: "230px",
        height: "300px",
        backgroundColor: "#173653",
        margin: "20px 40px 20px 40px",
        position: "relative"
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
        top: "13px"
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
        left: "0px"
    }
}

export default class Event extends Component {
    render() {
        return (
            <div className="event paper" style={styles.event}>
                <div className="event-decoration" style={styles.eventDecoration}/>
                <div className="event-month" style={styles.eventMonth}>
                    SEPTEMBER
                </div>
                <div className="event-day" style={styles.eventDay}>
                    23
                </div>
                <div className="event-description-banner" style={styles.eventDescriptionBanner}>
                </div>
            </div>
        );
    }
}