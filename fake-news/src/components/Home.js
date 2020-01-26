import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchType: 'null',
            selectedFile: null
        };
    }

    changeHandler = (event) => {
        this.setState({ searchType: event.target.value });
        // alert("You have selected " + event.target.value);
    }

    // handles image upload, logs if triggered
    onChangeHandler=event=>{
      this.setState({
        searchType: 'picture',
        selectedFile: event.target.files[0],
        loaded: 0,
      })

    }

    render() {
        let searchBox = '';
        if (this.state.searchType === 'link') {
          searchBox = <p>Paste link to article</p>

        } else if (this.state.searchType === 'picture') {
          searchBox =  <input type="file" name="file" onChange={this.onChangeHandler}/>
        
        } else if (this.state.searchType === "text") {
          searchBox = <p>Paste article text</p>

        }

        return (
            <body>
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