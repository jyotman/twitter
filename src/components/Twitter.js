import React, { Component } from "react";
import "./Twitter.css";
import TweetBox from "./TweetBox";
import Tweet from "./Tweet";
import util from '../util';

class Twitter extends Component {
  constructor(props) {
    super(props);
    this.state = { tweets: [] };
    this.tweetHandler = this.tweetHandler.bind(this);
  }

  async componentDidMount() {
    try {
      const result = await fetch('http://localhost:4000/tweet', {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "User": "Jyot"
        }
      });
      this.setState({ tweets: await result.json() });
    } catch (err) {
      console.error(err);
    }
  }

  async tweetHandler(tweetMessage) {
    try {
      const tweetMessages = util.splitMessage(tweetMessage);
      const createdTweets = [];
      for (const tweet of tweetMessages) {
        const createdTweet = await postData('http://localhost:4000/tweet', { tweet });
        createdTweets.unshift(createdTweet);
      }
      const tweets = createdTweets.concat(this.state.tweets);
      this.setState({ tweets });
    } catch (err) {
      if (err.message.includes('too long'))
        alert(err.message);
      else
        console.error(err);
    }
  }

  render() {
    const tweets = this.state.tweets.map((tweet, i) => <Tweet key={i} tweet={tweet} />)
    return (
      <div>
        <TweetBox onTweet={this.tweetHandler} />
        {tweets}
      </div>
    );
  }
}

const postData = (url, data = {}) => {
  return fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "User": "Jyot"
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .catch(error => Promise.reject(error));
};

export default Twitter;