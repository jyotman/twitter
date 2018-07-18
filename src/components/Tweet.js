import React, { Component } from "react";
import "./Tweet.css";

class Tweet extends Component {

  render() {
    return (
      <div className="Tweet-tweet">
        <p><b>@{this.props.tweet.handle}</b> - <span className="Tweet-date">{new Date(this.props.tweet.createdAt).toGMTString()}</span></p>
        <p>{this.props.tweet.body}</p>
      </div>
    );
  }
}

export default Tweet;