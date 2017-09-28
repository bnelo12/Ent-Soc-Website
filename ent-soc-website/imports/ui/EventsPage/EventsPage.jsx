import React, { Component } from 'react';
import Event from './Event'
import request from 'request'

var styles = {
    eventsListStyle: {
        marginTop: "1ppx"
    }, 
    eventsPageStyle: {
        paddingTop: "30px",
        paddingBottom: "30px",
        backgroundColor: "#fafffd"
    }
}

export default class EventsPage extends Component {
    render() {
        return (
            <div id="events-page" style={styles.eventsPageStyle}>
                <div className="container">
                    <h1>Upcoming</h1>
                    <h5>Events</h5>
                    <hr/>
                    <div className="events-list row" style={styles.eventsListStyle}>
                        <Event/>
                    </div>
                </div>
            </div>
        );
    }
}