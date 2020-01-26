import React, { Component } from 'react';
import c from "classnames";
import uuid from 'uuid';
import Comments from './components/Comments.js'

class Content extends Component {

    state = {
        upvotes: this.props.ticket.upvotes,
        downvotes: this.props.ticket.downvotes,
        downvoteActive: false,
        upvoteActive: false,
        commentInput: null,
        comments: [
            // {
            //     commentId: null,
            //     ticketId: null,
            //     // creator: null,
            //     contentText: null
            // }
        ]
    }

    setDownvote() {
        if (this.state.downvoteActive) {
            this.props.minusDown();
        } else {
            this.props.plusDown();
        }
        this.setState({
            downvoteActive: !this.state.downvoteActive  // flips
        })
        
    }

    setUpvote() {
        if (this.state.upvoteActive) {
            this.props.minusUp();
        } else {
            this.props.plusUp();
        }
        this.setState({
            upvoteActive: !this.state.upvoteActive  // flips
        })
        
    }

    handleDownvote() {
        if (this.state.upvoteActive) {
            this.setDownvote();
            this.setUpvote();
        }
        this.setDownvote();
    }

    handleUpvote() {
        if (this.state.downvoteActive) {
            this.setUpvote();
            this.setDownvote();
        }
        this.setUpvote();
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            commentId: uuid.v4(),
            ticketId: this.props.ticket.id,
            commentInput: this.state.commentInput
        }
        this.setState({
            comments: [...this.state.comments, newComment]
        })
        // add comment
    }

    onChange = (e) => {
        this.setState({
            commentInput: e.target.value
        })
    }

    render() {
        return (
            <div class="content-container">
                <section class="content-display">
                    <p>{this.props.ticket.data}</p>
                </section>
                <section class="content-analysis">
                    <div>
                        <h2>Truthworthiness :  
                            {Number(((100 * (this.props.ticket.upvotes) / (this.props.ticket.upvotes + this.props.ticket.downvotes))).toFixed(0))}</h2>
                        <h3>Upvotes: {this.props.ticket.upvotes}</h3>
                        <h3>Downvotes: {this.props.ticket.downvotes}</h3>
                    </div>

                    <div>
                        <button
                            onClick={() => this.handleUpvote()}
                            className={c({ ["active"]: this.state.upvoteActive })}
                            >
                            {this.props.ticket.upvotes}
                        </button>
                        <button
                            className={c({ ["active"]: this.state.downvoteActive })}
                            onClick={() => this.handleDownvote()}
                            >
                            {this.props.ticket.downvotes}
                        </button>
                    </div>

                    <div>
                        <h2>Comments</h2>
                        <div class="comment">
                            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                                <input 
                                    type="text" 
                                    name="title"
                                    style={{ flex: '10', padding: '5px' }}
                                    placeholder="Add comment..."
                                    value={this.state.commentInput}
                                    onChange={this.onChange}
                                /> 
                                <input 
                                    type="submit" 
                                    value="Submit"
                                    className="btn"
                                    style={{ flex: '1' }}
                                />
                            </form>
                            <Comments comments={this.state.comments} commentInput={this.state.commentInput}/>
                            {/* <form action="#" method="post">
                                <textarea placeholder="What are your thoughts about this article?" name="comment"></textarea>
                                <div>
                                    <button type="submit">Submit</button>
                                </div>
                            </form> */}
                        </div>
                    </div>
                </section>
            </div >
        );
    }
}

export default Content;