import React, { Component } from 'react';
import Comment from './Comment.js'

class Comments extends Component {
  render() {
    return this.props.comments.map((comment) => (
        <Comment comment={comment}/>
    ));
  }
}

export default Comments;
