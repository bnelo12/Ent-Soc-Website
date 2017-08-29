import React, { Component } from 'react';
 
import Header from './Header.jsx';
import HomePage from './HomePage/HomePage.jsx';
import SubdivisionsPage from './SubdivisionsPage/SubdivisionsPage.jsx';
 
export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <HomePage/>
        <SubdivisionsPage/>
      </div>
    );
  }
}
