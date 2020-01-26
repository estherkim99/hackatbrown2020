import React, { Component } from 'react';

class Content extends Component {
    render() {
        let score = 50;
        return (
            <div class="content-container">
                <section class="content-display">
                    <p>show content here</p>
                </section>
                <section class="content-analysis">
                    <div>
                        <h2>Truthworthiness : {score}</h2>
                        <h3>User Votes: ?</h3>
                        <h3>Vera Score: ?</h3>
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