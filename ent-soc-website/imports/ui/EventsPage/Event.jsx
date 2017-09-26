import React, { Component } from 'react';

var styles = {
    event: {
        minWidth: "230px",
        maxWidth: "230px",
        height: "300px",
        backgroundColor: "#173653",
        margin: "auto",
        position: "relative",
        textAlign: "center"
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
            <div className="event paper col-4" style={styles.event}>
                <div className="event-decoration" style={styles.eventDecoration}/>
                <div className="event-month" style={styles.eventMonth}>
                    September
                </div>
                <div className="event-day" style={styles.eventDay}>
                    23
                </div>
                <a href="#" className="event-description-banner" style={styles.eventDescriptionBanner}>
                    <h5 className="event-description-name" style={{fontSize: "12px", padding: "0px 5px"}}>This is the event name which is really really long</h5>
                    <p className="event-description-location" style={{fontSize: "10px", padding: "0px 5px"}}>Appelton Tower G101</p>
                </a>
            </div>
        );
    }
}