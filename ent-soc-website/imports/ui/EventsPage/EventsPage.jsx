import React, { Component } from 'react';
import Event from './Event'
import request from 'request'

var styles = {
    eventsListStyle: {
        marginTop: "30px"
    }
}

export default class EventsPage extends Component {
    render() {
        return (
            <div id="events-page">
                <h1>Upcoming Events</h1>
                <div className="container">
                    <div className="events-list row" style={styles.eventsListStyle}>
                        <Event/>
                    </div>
                </div>
            </div>
        );
    }
}