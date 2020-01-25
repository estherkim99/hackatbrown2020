import React, { Component } from 'react';
import Tickets from './components/Tickets.js';
import Home from './components/Home.js';
import Header from './components/layout/Header.js';
import './App.css';
import uuid from 'uuid';

class App extends Component {

  // const db = firebase.database();
  // const dbRef = db.ref().child('data');

  // set up way to switch between home and tickets pages

  state = {
    Tickets: []
  }

  render() {
    return (
      // <Router>
        <div className="App">
          <header className="App-header">
            <Header />
            <Home />
          </header>
        </div>
      // </Router>
    );
  }
  
}

export default App;
