import React, { Component } from 'react';

export class Comment extends Component {
    getStyle = () => {
        return {
            // fontSize: 'medium',
            borderBottom: '1px #ccc dotted',        }
    }
    // const contentInput = this.props.comment.contentInput;
    render() {
        return (
            <div>
                <p>
                    { this.props.comment.commentText }
                </p>
            </div>
        )
    }
}

export default Comment
