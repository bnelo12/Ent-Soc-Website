import React, { Component } from 'react';
import Event from './Event'
import request from 'request'

export default class EventsPage extends Component {

    render() {
        return (
            <div id="events-page">
                <div className="container">
                    <div className="row" style={{height: "100px"}}>
                        <div className="col">
                            <Event/>
                        </div>
                        <div className="col">
                            <Event/>
                        </div>
                        <div className="col">
                            <Event/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}