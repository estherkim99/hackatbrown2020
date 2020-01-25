import React, { Component } from 'react';
import Tickets from './components/Tickets.js';
import Home from './components/Home.js';
import Header from './components/layout/Header.js';
import './App.css';
import uuid from 'uuid';
import {
  Router, Route, Link
} from 'react-router-dom'

class App extends Component {

  // const db = firebase.database();
  // const dbRef = db.ref().child('data');

  // set up way to switch between home and tickets pages

  state = {
    currPage: "Home",
    Ticket: {
      uploaded: false,
      id: 0,
      type: 'null',
      url: 'null',
      upvotes: 0,
      downvotes: 0,
      score: 0,
      comments: {
      
      }
    }
  }

  togglePageFlag = () => {
    if (this.state.currPage === "Home") {
      this.setState({ currPage: "Tickets" })
    } else if (this.state.currPage === "Tickets") {
      this.setState({ currPage: "Home" })
    }
  }

  render() {
    let thispage = <Home />
    if (this.state.currPage === "Home") {
      thispage = <Home />
    } else if (this.state.currPage === "Tickets") {
      thispage = <Tickets />
    }
    return (
        <div className="App">
          <header className="App-header">
            <Header />
            {thispage}
          </header>
        </div>
    );
  }
}

export default App;
