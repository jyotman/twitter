import React, { Component } from 'react';
import './App.css';
import TweetBox from './components/TweetBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Twitter Clone</h1>
        </header>
		<TweetBox/>
      </div>
    );
  }
}

export default App;