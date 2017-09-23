import React, { Component } from 'react';
import Event from './Event'

export default class EventsPage extends Component {
    render() {
        return (
            <div className="events-page">
                <div className="container">
                    <div className="row" style={{height: "100px"}}>
                        <Event/>
                    </div>
                </div>
            </div>
        );
    }
}