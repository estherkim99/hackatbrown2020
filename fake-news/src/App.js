import React, { Component } from 'react';
import Tickets from './components/Tickets.js';
import Home from './components/Home.js';
import './App.css';
import uuid from 'uuid';

class App extends Component {

  // const db = firebase.database();
  // const dbRef = db.ref().child('data');

  state = {
    Tickets: []
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Home />
        </header>
      </div>
    );
  }
  
}

export default App;
