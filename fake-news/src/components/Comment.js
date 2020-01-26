import React, { Component } from 'react';

export class Comment extends Component {
    getStyle = () => {
        return {
            padding: '10px',
            borderBottom: '1px #ccc dotted',        }
    }
    // const contentInput = this.props.comment.contentInput;
    render() {
        return (
            <div style={this.getStyle()}>
                <p>
                    { this.props.comment.contentInput }
                </p>
            </div>
        )
    }
}

export default Comment
