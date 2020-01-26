import React, { Component } from "react";
import Home from "./pages/Home.js";
import Content from "./Content.js"
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";


class App extends Component {
  // setEntry = (name, data) => {
  //   this.setState({
  //     ticket: { // represents ticket user can currently see. should always be synced to the database. set here w/ default values for now.
  //       type: this.state.type, // type of ticket - can be text, link, or photo. string.
  //       data: data,
  //       upvotes: this.state.upvotes, // following is scoring metrics for each given ticket
  //       downvotes: this.state.downvotes,
  //     }
  //   })
  // }


  // // makes new ticket with new id from uuid v4 extension, correct type/url, and zeroed upvotes downvotes
  // setTicket = (data, type) => {

  //   // go through database, check for a hit on all tickets for matching data and data
  //   const ret = this.checkTicket(data, type);
  //   // if miss, make new local ticket
  //   if (ret === 0) {
  //     this.setState(  // set local state to that of new ticket
  //       {
  //         currPage: this.state.currPage,
  //         ticket: {
  //           type: type, // type of ticket - can be text, link, or photo. string.
  //           data: data,  // actual data
  //           upvotes: 0, // following is scoring metrics for each given ticket
  //           downvotes: 0,
  //         }
  //       }
  //     )
  //     // upload new ticket to firebase
  //     db.collection("ticket").doc(data).add(this.ticket);
  //   } else {  // when we get a hit
  //     // copy over data from firebase ticket to local ticket state
  //     db.collection("ticket")
  //       .doc(ret)
  //       .get()
  //       .then(documentSnapshot => {
  //         this.type = documentSnapshot.get("type");
  //         this.data = documentSnapshot.get("data");
  //         this.upvotes = documentSnapshot.get("upvotes");
  //         this.downvotes = documentSnapshot.get("downvotes");
  //       });
  //   }
  // }

  // // function to increase ticket upvote state field by 1
  // plusUpScore = () => {
  //   this.setState({
  //     ticket: { // represents ticket user can currently see. should always be synced to the database. set here w/ default values for now.
  //       type: this.state.ticket.type, // type of ticket - can be text, link, or photo. string.
  //       data: this.state.ticket.data,
  //       upvotes: this.state.ticket.upvotes + 1, // following is scoring metrics for each given ticket
  //       downvotes: this.state.ticket.downvotes
  //     }
  //   })
  // }

  // minusUpScore = () => {
  //   this.setState({
  //     ticket: { // represents ticket user can currently see. should always be synced to the database. set here w/ default values for now.
  //       id: this.state.ticket.id,  // unique ID for each ticket
  //       type: this.state.ticket.type, // type of ticket - can be text, link, or photo. string.
  //       data: this.state.ticket.data,
  //       upvotes: this.state.ticket.upvotes - 1, // following is scoring metrics for each given ticket
  //       downvotes: this.state.ticket.downvotes
  //     }
  //   })
  // }

  // // function to increase downvote by 1
  // plusDownScore = () => {
  //   this.setState({
  //     ticket: { // represents ticket user can currently see. should always be synced to the database. set here w/ default values for now.
  //       id: this.state.ticket.id,  // unique ID for each ticket
  //       type: this.state.ticket.type, // type of ticket - can be text, link, or photo. string.
  //       data: this.state.ticket.data,
  //       upvotes: this.state.ticket.upvotes, // following is scoring metrics for each given ticket
  //       downvotes: this.state.ticket.downvotes + 1
  //     }
  //   })
  // }

  // minusDownScore = () => {
  //   this.setState({
  //     ticket: { // represents ticket user can currently see. should always be synced to the database. set here w/ default values for now.
  //       id: this.state.ticket.id,  // unique ID for each ticket
  //       type: this.state.ticket.type, // type of ticket - can be text, link, or photo. string.
  //       data: this.state.ticket.data,
  //       upvotes: this.state.ticket.upvotes, // following is scoring metrics for each given ticket
  //       downvotes: this.state.ticket.downvotes - 1
  //     }
  //   })
  // }


  render() {
    return (
      <Router>
        <div className="App App-header">
          <nav fixed="top" class="nav">
            <ul>
              <li class="brand"><Link to="/">VERA</Link></li>
              <li><Link to="/howto">How to Use</Link></li>
              <li><Link to="/articles">Articles</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/articles" component={withRouter(Content)} />
            <Route exact path="/" component={withRouter(Home)} />
            <Route exact path="/howto"></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
