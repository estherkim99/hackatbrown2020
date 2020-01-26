import React, { Component } from 'react';

export class Comment extends Component {
    getStyle = () => {
        return {
            background: '#f4f4#f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',        }
    }

    render() {
        const contentInput = this.props.comment.contentInput;
        return (
            <div style={this.getStyle()}>
                <p>
                    { contentInput }
                </p>
            </div>
        )
    }
}

export default Comment
