import React, { Component } from 'react';
import c from "classnames";

class Content extends Component {

    state = {
        upvotes: this.props.ticket.upvotes,
        downvotes: this.props.ticket.downvotes,
        downvoteActive: false,
        upvoteActive: false
    }

    setDownvote() {
        this.setState({
            downvoteActive: !this.state.downvoteActive  // flips
        })
        if (this.state.downvoteActive) {
            this.props.minusDown();
        } else {
            this.props.plusDown();
        }
        
    }

    setUpvote() {
        this.setState({
        upvoteActive: !this.state.upvoteActive  // flips
        })
        if (this.state.upvoteActive) {
            this.props.minusUp();
        } else {
            this.props.plusUp();
        }
        
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

    render() {
        return (
            <div class="content-container">
                <section class="content-display">
                    <p>{this.props.ticket.data}</p>
                </section>
                <section class="content-analysis">
                    <div>
                        <h2>Truthworthiness : {(this.props.ticket.upvotes - this.props.ticket.downvotes) / (this.props.ticket.upvotes + this.props.ticket.downvotes)}</h2>
                        <h3>User Votes: {this.props.ticket.upvotes}</h3>
                        <h3>Vera Score: {this.props.ticket.downvotes}</h3>
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
                            <form action="#" method="post">
                                <textarea placeholder="What are your thoughts about this article?" name="comment"></textarea>
                                <div>
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div >
        );
    }
}

export default Content;