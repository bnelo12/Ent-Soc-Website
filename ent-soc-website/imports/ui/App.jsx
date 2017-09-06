import React, { Component } from 'react';
 
import Header from './Header.jsx';
import HomePage from './HomePage/HomePage.jsx';
import SubdivisionsPage from './SubdivisionsPage/SubdivisionsPage.jsx';
import TeamPage from './TeamPage/TeamPage'
import NewsletterPage from './NewsletterPage/NewsletterPage'

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
          <SubdivisionsPage/>
          <TeamPage/>
          <NewsletterPage/>
        </div>
      </div>
    );
  }
}
