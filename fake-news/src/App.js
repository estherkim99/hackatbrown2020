import React, { Component } from 'react';
import Tickets from './components/Tickets.js';
import Home from './components/Home.js';
import Header from './components/layout/Header.js';
import './App.css';
import uuid from 'uuid';
import Content from './Content.js';
const firebase = require("firebase");
require("firebase/firestore");
firebase.initializeApp({
  apiKey: "AIzaSyDa9hWI4iSClSsxd1kWXlrvmVyc7CptPyg",
  authDomain: "hab2020-twdbeproud.firebaseapp.com",
  databaseURL: "https://hab2020-twdbeproud.firebaseio.com",
  projectId: "hab2020-twdbeproud",
  storageBucket: "hab2020-twdbeproud.appspot.com",
  messagingSenderId: "557519037753",
  appId: "1:557519037753:web:fc75a0f0c2b455713534e8",
  measurementId: "G-XVE5XLSR39"
});
var db = firebase().firestore();
// import {
//   Router, Route, Link
// } from 'react-router-dom'

class App extends Component {

  // const dbRef = db.ref().child('data');

  // set up way to switch between home and tickets pages

  state = {
    currPage: "Content", // should be kept client-side, determines which js is shown (Home.js or Tickets.js)

    ticket: { // represents ticket user can currently see. should always be synced to the database. set here w/ default values for now.
      type: null, // type of ticket - can be text, link, or photo. string.
      data: null,
      upvotes: 0, // following is scoring metrics for each given ticket
      downvotes: 0,
    },

    // comments: { // Represents relevant comments to current ticket. Has placeholder numm values
    //   1: {
    //     commentId: null,
    //     ticketId: null,
    //     creator: null,
    //     contentText: null
    //   }
    // }
  }

  setTicketData = (data) => {
    this.setState({
      currPage: this.state.currPage, // should be kept client-side, determines which js is shown (Home.js or Tickets.js)

      ticket: { // represents ticket user can currently see. should always be synced to the database. set here w/ default values for now.
        type: this.state.type, // type of ticket - can be text, link, or photo. string.
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
<<<<<<< HEAD
  // checkTicket = (data, type) => {
  //   const snapshot = db.collection("ticket").where("data", "==", data).get();
  //   if (snapshot.empty) {
  //     return 0;
  //   }
  //   else {
  //     const docSnapshots = snapshot.docs;
  //     const doc = docSnapshots[0].data();
  //     return doc.id;
  //   }
  // }
=======
  checkTicket = (data, type) => {
    const snapshot = db.collection("ticket").where("data", "==", data).get();
    if (snapshot.empty) {
      return 0;
    }
    else {
      const docSnapshots = snapshot.docs;
      const docRef = docSnapshots[0].ref();
      return docRef.id;
    }
  }
>>>>>>> b38b1fd9d599bbb066d3b3e6877c979ad0b9754f

  // makes new ticket with new id from uuid v4 extension, correct type/url, and zeroed upvotes downvotes
  setTicket = (data, type) => {

    // go through database, check for a hit on all tickets for matching data and data
    const ret = this.checkTicket(data, type);
    // if miss, make new local ticket
    if (ret === 0) {
      this.setState(  // set local state to that of new ticket
        {
          currPage: this.state.currPage,
          ticket: {
            type: type, // type of ticket - can be text, link, or photo. string.
            data: data,  // actual data
            upvotes: 0, // following is scoring metrics for each given ticket
            downvotes: 0,
          }
        }
      )
      // upload new ticket to firebase 
      db.collection("ticket").doc(data).add(this.ticket);
    } else {  // when we get a hit
      // copy over data from firebase ticket to local ticket state
      db.collection("ticket")
      .doc(ret)
      .get()
      .then(documentSnapshot => {
        this.type = documentSnapshot.get("type");
        this.data = documentSnapshot.get("data");
        this.upvotes = documentSnapshot.get("upvotes");
        this.downvotes = documentSnapshot.get("downvotes");
      });
    }
  }

  // makes new ticket with new id from uuid v4 extension, correct type/url, and zeroed upvotes downvotes
  setTicket = (data, type) => {

    // go through database, check for a hit on all tickets for matching data and data
    const ret = this.checkTicket(data, type);
    // if miss, make new local ticket
    if(ret === 0){
      this.setState(  // set local state to that of new ticket
        {
          currPage: this.state.currPage,
          ticket: {
            type: type, // type of ticket - can be text, link, or photo. string.
            data: data,  // actual data
            upvotes: 0, // following is scoring metrics for each given ticket
            downvotes: 0,
          }
        }
      )
      // upload new ticket to firebase 
    } else {  // when we get a hit
      // copy over data from firebase ticket to local ticket state
    }

    // switch to content page once data and state has been set
    this.togglePageFlag();
  }

  // function to increase ticket upvote state field by 1
  plusUpScore = () => {
    this.setState({
      ticket: { // represents ticket user can currently see. should always be synced to the database. set here w/ default values for now.
        type: this.state.ticket.type, // type of ticket - can be text, link, or photo. string.
        data: this.state.ticket.data,
        upvotes: this.state.ticket.upvotes + 1, // following is scoring metrics for each given ticket
        downvotes: this.state.ticket.downvotes
      }
    })
  }

  minusUpScore = () => {
    this.setState({
      ticket: { // represents ticket user can currently see. should always be synced to the database. set here w/ default values for now.
        id: this.state.ticket.id,  // unique ID for each ticket
        type: this.state.ticket.type, // type of ticket - can be text, link, or photo. string.
        data: this.state.ticket.data,
        upvotes: this.state.ticket.upvotes - 1, // following is scoring metrics for each given ticket
        downvotes: this.state.ticket.downvotes
      }
    })
  }

  // function to increase downvote by 1
  plusDownScore = () => {
    this.setState({
      ticket: { // represents ticket user can currently see. should always be synced to the database. set here w/ default values for now.
        id: this.state.ticket.id,  // unique ID for each ticket
        type: this.state.ticket.type, // type of ticket - can be text, link, or photo. string.
        data: this.state.ticket.data,
        upvotes: this.state.ticket.upvotes, // following is scoring metrics for each given ticket
        downvotes: this.state.ticket.downvotes + 1
      }
    })
  }

  minusDownScore = () => {
    this.setState({
      ticket: { // represents ticket user can currently see. should always be synced to the database. set here w/ default values for now.
        id: this.state.ticket.id,  // unique ID for each ticket
        type: this.state.ticket.type, // type of ticket - can be text, link, or photo. string.
        data: this.state.ticket.data,
        upvotes: this.state.ticket.upvotes, // following is scoring metrics for each given ticket
        downvotes: this.state.ticket.downvotes - 1
      }
    })
  }

  render() {
    let thispage = <Home />
    if (this.state.currPage === "Home") {
      thispage = <Home ticket={this.state.ticket} toggle={this.togglePageFlag} setTicket={this.setTicket} setTicketData={this.setTicketData} />
    } else if (this.state.currPage === "Tickets") {
      thispage = <Tickets />
    } else if (this.state.currPage === "Content") {
      thispage = <Content minusDown={this.minusDownScore} minusUp={this.minusUpScore} plusDown={this.plusDownScore} plusUp={this.plusUpScore} ticket={this.state.ticket} toggle={this.togglePageFlag} setTicket={this.setTicket} setTicketData={this.setTicketData} />
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
