import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav fixed="top" class="nav">
                <ul>
                    <li class="brand"><a href="#home">VERA</a></li>
                    <li>About</li>
                </ul>
            </nav>
        );
    }
}

export default Header;
