import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchType: 'link',
            data: null
        };
        this.handleChange = this.handleChange.bind(this);
    }

    changeHandler = (event) => {
        this.setState({
            searchType: event.target.value,
            data: this.state.data
        });
        // alert("You have selected " + event.target.value);
    }

    // handles image upload, logs if triggered
    onChangeHandler = event => {
        this.setState({
            searchType: this.state.searchType,
            data: event.target.files[0]
        })

    }

    handleChange(event) {
        this.setState({
            searchType: this.state.searchType,
            data: event.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.setTicket(this.state.data, this.state.searchType);
        // this.props.setTicketData(this.state.data);
        // this.props.toggle();
    }

    render() {
        let searchBox = '';
        if (this.state.searchType === 'link') {
            searchBox =
                <form onSubmit={this.onSubmit}>
                    <input
                        class="text-input paste-link"
                        type="text"
                        name="title"
                        style={{ flex: '10', padding: '5px' }}
                        placeholder="Add Link..."
                        value={this.state.data}
                        onChange={this.handleChange.bind(this)} /><br />
                    <input
                        type="submit"
                        value="Submit"
                        className="btn"
                        style={{ flex: '1' }} />
                </form>

        } else if (this.state.searchType === 'picture') {
            searchBox =
                <form onSubmit={this.onSubmit}>
                        <input type="file" name="file" onChange={this.onChangeHandler} />
                    <input
                        type="submit"
                        value="Submit"
                        className="btn"
                        style={{ flex: '1' }} />
                </form>


        } else if (this.state.searchType === "text") {
            searchBox =
                <form onSubmit={this.onSubmit}>
                    <textarea
                        class="text-input paste-article"
                        type="text"
                        name="title"
                        placeholder="Add Text..."
                        value={this.state.data}
                        onChange={this.handleChange.bind(this)} />
                    <br />
                    <input
                        type="submit"
                        value="Submit"
                        className="btn"
                        style={{ flex: '1' }}
                    />
                </form>

        }
        return (
            <body>
                <div>

                </div>
                 <div>
                    
                </div>
                <div class="descript">
                    <hl>We are the first crowdsourced platform on the internet harnessing the power of the public to verify the truthfulness of forwarded messages and media.<br /><br />
                        If you received a photo, message or link that you'd like to verify, select the appropriate type from the dropdown box below and upload your ticket to continue.</hl>
                </div>
                <select value={this.state.searchType} onChange={this.changeHandler}>
                    <option value='link'>link</option>
                    <option value='picture'>picture</option>
                    <option value='text'>text</option>
                </select>
                {searchBox}

            </body >
        );
    }
}

export default Home;