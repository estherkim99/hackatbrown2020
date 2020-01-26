import React, { Component } from 'react';

export class Comment extends Component {
    getStyle = () => {
        return {
            background: '#f4f4#f4',
            padding: '10px',
            // fontSize: 'medium',
            borderBottom: '1px #ccc dotted',
        }
    }
    // const contentInput = this.props.comment.contentInput;
    render() {
        return (
            <div class="comment-entry">
                <p >
                    {this.props.comment.commentText}
                </p>
            </div>
        )
    }
}

export default Comment
