import React, { Component } from 'react';
import Tickets from './components/Tickets.js';
import Home from './components/Home.js';
import Header from './components/layout/Header.js';
import './App.css';
import uuid from 'uuid';
import Content from './Content.js';


// import {
//   Router, Route, Link
// } from 'react-router-dom'

class App extends Component {

  // const db = firebase.firestore();
  // const dbRef = db.ref().child('data');

  // set up way to switch between home and tickets pages

  state = {
    currPage: "Home", // should be kept client-side, determines which js is shown (Home.js or Tickets.js)

    ticket: { // represents ticket user can currently see. should always be synced to the database. set here w/ default values for now.
      id: null,  // unique ID for each ticket
      type: null, // type of ticket - can be text, link, or photo. string.
      url: null,  // firebase url for raw actual data
      data: null,
      upvotes: 0, // following is scoring metrics for each given ticket
      downvotes: 0,
    },

    comments: { // Represents relevant comments to current ticket. Has placeholder numm values
      1: {
        commentId: null,
        ticketId: null,
        creator: null,
        contentText: null
      }
    }
  }

  setTicketData = (data) => {
    this.setState({
      currPage: this.state.currPage, // should be kept client-side, determines which js is shown (Home.js or Tickets.js)

      ticket: { // represents ticket user can currently see. should always be synced to the database. set here w/ default values for now.
        id: this.state.id,  // unique ID for each ticket
        type: this.state.type, // type of ticket - can be text, link, or photo. string.
        url: this.state.url,  // firebase url for raw actual data
        data: data,
        upvotes: this.state.upvotes, // following is scoring metrics for each given ticket
        downvotes: this.state.downvotes,
      }
    })
  }

  togglePageFlag = () => {
    if (this.state.currPage === "Home") {
      this.setState({ currPage: "Content" })
    } else if (this.state.currPage === "Content") {
      this.setState({ currPage: "Home" })
    }
  }
  

  // checks for a hit in the firebase, returns 0 if miss, returns ticket id otherwise
  checkTicket = (data, type) => {
    const snapshot = db.collection("ticket").where("data", "==", data).get();
    if(snapshot.empty){
      return 0;
    }
    else{
      docSnapshots = snapshot.docs;
      const doc = docSnapshots[0].data();
      return doc.id;
    }
  }

  // makes new ticket with new id from uuid v4 extension, correct type/url, and zeroed upvotes downvotes
  setTicket = (data, type) => {

    if (type === 'text') {
      // go through database, check for a hit on all tickets for matching data and data
      // firebase.database.ref("ticket") //  TODO
      const ret = checkTicket(data, type);
      if(ret){

      }
    }

    // check to see if we have matching entry in database
    // const ret = checkTicket(data, type)

    // if so, we set ticket to match that entry's data, pulling data from firebasee

    // if not, we make new ticket
    this.setState(
      {
        ticket: {
          id: uuid.v4(),  // unique ID for each ticket
          type: type, // type of ticket - can be text, link, or photo. string.
          data: 'TODO',  // firebase url for raw actual data

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
      thispage = <Home ticket={this.state.ticket} toggle={this.togglePageFlag} setTicket={this.setTicket} setTicketData={this.setTicketData} />
    } else if (this.state.currPage === "Tickets") {
      thispage = <Tickets />
    } else if (this.state.currPage === "Content") {
      thispage = <Content ticket={this.state.ticket} toggle={this.togglePageFlag} />
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
