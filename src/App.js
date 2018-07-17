import React, { Component } from "react";
import "./App.css";
import Tweets from "./components/Tweets";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Twitter Clone</h1>
        </header>
		<Tweets/>
      </div>
    );
  }
}

export default App;