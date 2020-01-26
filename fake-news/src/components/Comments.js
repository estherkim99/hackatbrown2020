import React, { Component } from 'react';
import Comment from './Comment.js'

class Comments extends Component {
  render() {
    // console.log(this.props.todos)
    // return this.props.todos.map((todo) => (
    //   <TodoItem key={todo.id} todo={todo} markComplete=
    //   {this.props.markComplete} delTodo = {this.props.delTodo}/>
    // ));
    return this.props.comments.map((comment) => (
        <Comment comment={comment}/>
    ));
  }
}

export default Comments;
