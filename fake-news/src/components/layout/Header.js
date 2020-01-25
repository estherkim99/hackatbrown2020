import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
    render() {
        return (
            <nav fixed="top" class="nav">
                <ul>
                    <li class="brand"><a href="#home">VERA</a></li>
                    <li>About Us</li>
                    <li>How to Use</li>
                </ul>
            </nav>
        );
    }
}

export default Header;
