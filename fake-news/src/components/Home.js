import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchType: 'link'
        }
    }

    render() {
        return (
            <form>
                <div>
                    <hl>Fake News App!</hl>
                </div>
                <select value={this.state.searchType}>
                    <option value='link'>link</option>
                    <option value='picture'>screenshot</option>
                    <option value='text'>text</option>
                </select>
            </form>
        );
    }
}

export default Home;