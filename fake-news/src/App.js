import React, { Component } from 'react';
import Tickets from './components/Tickets.js';
import Home from './components/Home.js';
import Header from './components/layout/Header.js';
import './App.css';
import uuid from 'uuid';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  // const db = firebase.database();
  // const dbRef = db.ref().child('data');

  // set up way to switch between home and tickets pages

  state = {
    Tickets: []
  }

  render() {
    return (
      <div>
        <Navbar fixed="top">
          <Navbar.Brand href="#home">Fake News</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>About Us</Nav.Link>
              <Nav.Link>Help</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
        <div className="App">
          <header className="App-header">
            {/* <Header /> */}
            <Home />
          </header>
        </div>
      </div>
    );
  }

}

export default App;
