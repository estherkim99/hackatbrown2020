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
var db = firebase.firestore();
// import {
//   Router, Route, Link
// } from 'react-router-dom'

class App extends Component {

  // const dbRef = db.ref().child('data');

  // set up way to switch between home and tickets pages

  state = {
    currPage: "Home", // should be kept client-side, determines which js is shown (Home.js or Tickets.js)

    ticket: { // represents ticket user can currently see. should always be synced to the database. set here w/ default values for now.
      type: null, // type of ticket - can be text, link, or photo. string.
      data: null,
      upvotes: 0, // following is scoring metrics for each given ticket
      downvotes: 0,
      docId: null
    }
  }

  setTicketData = (data) => {
    this.setState({
      currPage: this.state.currPage, // should be kept client-side, determines which js is shown (Home.js or Tickets.js)

      ticket: { // represents ticket user can currently see. should always be synced to the database. set here w/ default values for now.
        type: this.state.type, // type of ticket - can be text, link, or photo. string.
        data: data,
        upvotes: this.state.upvotes, // following is scoring metrics for each given ticket
        downvotes: this.state.downvotes,
        docId: this.state.docId
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
  checkTicket = (data) => {
  // this now returns a promise, if you want value of check ticket you want a ret before db.collection
  // checkTicket will eturn a promise that is ultimately refid
  return db.collection("ticket").where("data", "==", data).get().then(snapshot => {
      console.log(snapshot);
      if (snapshot.empty === true) {
        return 0;
      }
      else {
        const docSnapshots = snapshot.docs;
        return docSnapshots[0].ref.id;
      }
    });
  }

  // makes new ticket with new id from uuid v4 extension, correct type/url, and zeroed upvotes downvotes
  setTicket = (data, type) => {

    // go through database, check for a hit on all tickets for matching data and data
    const promise = this.checkTicket(data);
    promise.then(ret => { // this pulls ret from the promise
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
            docId: null
          }
        }
      )
      // upload new ticket to firebase
      const mark = db.collection("ticket").add(this.state.ticket); // TODO: Look up API on how to add a document to a collection
      mark.then(docRef => {
        this.setState(  // set local state to that of new ticket
          {
            currPage: this.state.currPage,
            ticket: {
              type: type, // type of ticket - can be text, link, or photo. string.
              data: data,  // actual data
              upvotes: 0, // following is scoring metrics for each given ticket
              downvotes: 0,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              docId: docRef.id
=======
              docId: docRef.ids,
              id: this.state.id
>>>>>>> 42a27f6ddc8955c4a1ef57ff3df3646a128e4fa0
=======
              docId: docRef.ids
>>>>>>> parent of 42a27f6... Merge branch 'web-app' of https://github.com/estherkim99/hackatbrown2020 into web-app
=======
              docId: docRef.ids
>>>>>>> parent of 42a27f6... Merge branch 'web-app' of https://github.com/estherkim99/hackatbrown2020 into web-app
            }
          }
        );


          
      })

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
          this.docId = documentSnapshot.get("docId");
        });
    }
    });

    this.togglePageFlag();

  }

  updateTicketLocalToFirebase = () => {
    // this now returns a promise, if you want value of check ticket you want a ret before db.collection
    // checkTicket will eturn a promise that is ultimately refid
    // go through database, check for a hit on all tickets for matching data and data
   //  const promise = this.checkTicket(data);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   const promise = db.collection("ticket").doc(this.state.docId);
   promise.then(docRef => {docRef.update(this.state.ticket);
  });
=======
    // this now returns a promise, if you want value of check ticket you want a ret before db.collection
    // checkTicket will eturn a promise that is ultimately refid
    // const hit = db.collection("ticket").where("id", "==", this.state.ticket.id).get().then(snapshot => {
    //     // console.log(snapshot);
    //     if (snapshot.empty === true) {
    //       return 0;
    //     }
    //     else {
    //       const docSnapshots = snapshot.docs;
    //       return docSnapshots[0].ref.id;
    //     }
    //   });
=======
>>>>>>> parent of 42a27f6... Merge branch 'web-app' of https://github.com/estherkim99/hackatbrown2020 into web-app
=======
>>>>>>> parent of 42a27f6... Merge branch 'web-app' of https://github.com/estherkim99/hackatbrown2020 into web-app
  }
>>>>>>> 42a27f6ddc8955c4a1ef57ff3df3646a128e4fa0

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

  handleHome = () => {
    this.setState({ currPage: "Home" })
    window.location.reload(false);
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
          <nav fixed="top" class="nav">
            <ul>
              <li class="brand"><a href="" onClick={this.handleHome}>VERA</a></li>
              <li>How to Use</li>
            </ul>
          </nav>
          {thispage}
        </header>
      </div>
    );
  }
}

export default App;
