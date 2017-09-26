import React, { Component } from 'react';
import Event from './Event'
import request from 'request'

export default class EventsPage extends Component {
    render() {
        return (
            <div id="events-page">
                <div className="container">
                    <div className="events-list row">
                        <Event/>
                        <Event/>
                        <Event/>
                        <Event/>
                        <Event/>
                        <Event/>
                    </div>
                </div>
            </div>
        );
    }
}