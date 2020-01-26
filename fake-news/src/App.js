import React, { Component } from 'react';
import Tickets from './components/Tickets.js';
import Home from './components/Home.js';
import Header from './components/layout/Header.js';
import './App.css';
import uuid from 'uuid';

// import {
//   Router, Route, Link
// } from 'react-router-dom'

class App extends Component {

  // const db = firebase.database();
  // const dbRef = db.ref().child('data');

  // set up way to switch between home and tickets pages

  state = {
    currPage: "Home", // should be kept client-side, determines which js is shown (Home.js or Tickets.js)

    ticket: { // represents ticket user can currently see. should always be synced to the database. set here w/ default values for now.
      id: 0,  // unique ID for each ticket
      type: 'null', // type of ticket - can be text, link, or photo. string.
      url: 'null',  // firebase url for raw actual data

      upvotes: 0, // following is scoring metrics for each given ticket
      downvotes: 0,
      score: 0,
    },

    comments: { // Represents relevant comments to current ticket. Has placeholder numm values
      1: {
        commentId: 0,
        ticketId: 0,
        creator: 'null',
        contentText: 'null'
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

  // checks for a hit in the firebase, returns 0 if miss, returns ticket id otherwise
  checkTicket = (data, type) => {  
    
  }

  // makes new ticket with new id from uuid v4 extension, correct type/url, and zeroed upvotes downvotes
  setTicket = (data, type) => {

    // check to see if we have matching entry in database
    // const ret = checkTicket(data, type)

    // if so, we set ticket to match that entry's data, pulling data from firebasee

    // if not, we make new ticket
    this.setState(
      {
        ticket: {
          id: uuid.v4(),  // unique ID for each ticket
          type: type, // type of ticket - can be text, link, or photo. string.
          url: 'TODO',  // firebase url for raw actual data

          upvotes: 0, // following is scoring metrics for each given ticket
          downvotes: 0,
          score: 0,
        }
      }
    )
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
