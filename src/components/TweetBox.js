import React, { Component } from "react";
import "./TweetBox.css";

class TweetBox extends Component {
  constructor(props) {
    super(props);
    this.state = { tweetBody: "" };

    this.onSubmit = this.onSubmit.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  onTextChange(event) {
    this.setState({ tweetBody: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({ tweetBody: "" });
    // this.props.onSend(this.state.chatInput);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input className="TweetBox-inputbox" type="text" value={this.state.tweetBody}
          name="tweet" placeholder="What's happening?" onChange={this.onTextChange} required />
        <input type="submit" className="TweetBox-tweetbutton" value="Tweet" />
      </form>
    );
  }
}

export default TweetBox;