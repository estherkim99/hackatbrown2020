import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchType: 'link',
        };
    }

    changeHandler = (event) => {
        this.setState({ searchType: event.target.value });
        // alert("You have selected " + event.target.value);

    }

    render() {
        let searchBox = '';
        if (this.state.searchType == 'link') {
            searchBox = <p>Paste link to article</p>

        } else if (this.state.searchType == 'screenshot') {
            searchBox = <p>Upload image</p >
        } else if (this.state.searchType == "text") {
            searchBox = <p>Paste article text</p>

        }

        return (
            <body>
                <div>
                    <hl>Fake News App!</hl>
                </div>
                <select value={this.state.searchType} onChange={this.changeHandler}>
                    <option value='link'>link</option>
                    <option value='screenshot'>screenshot</option>
                    <option value='text'>text</option>
                </select>
                {searchBox}

            </body >
        );
    }
}

export default Home;