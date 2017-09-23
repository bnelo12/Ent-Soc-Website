import React, { Component } from 'react';
 
import Header from './Header.jsx';
import HomePage from './HomePage/HomePage.jsx';
import SubdivisionsPage from './SubdivisionsPage/SubdivisionsPage.jsx';
import TeamPage from './TeamPage/TeamPage'
import NewsletterPage from './NewsletterPage/NewsletterPage'
import AboutPage from './AboutPage/AboutPage'
import EventsPage from './EventsPage/EventsPage'

var pagesStyle = {
  position: "absolute",
  top: "100%",
  width: "100%",
}

export default class App extends Component {
  render() {
    return (
      <div>
        <HomePage/>
        <Header/>
        <div className="pages" style={pagesStyle}>
          <AboutPage/>
          <SubdivisionsPage/>
          <EventsPage/>
        </div>
      </div>
    );
  }
}
