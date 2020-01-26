import React, { Component } from 'react';

class Content extends Component {
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