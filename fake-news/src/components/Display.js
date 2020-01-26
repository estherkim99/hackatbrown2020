import React, { Component } from 'react';
import logo from "./logo512.png";

export class Display extends Component {

    render() {
        if (this.props.ticket.type === "picture") {
            // return picture
            const pic = './pudding.jpeg';
            return (
                <div>
                    <p>
                        <img src={pic} alt="Logo" />
                    </p>
                </div>
            )
        } else {
            return (
                <div>
                    <p>
                        { this.props.ticket.data }
                    </p>
                </div>
            )
        }
        
    }
}

export default Display
