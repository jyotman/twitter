import React, { Component } from "react";
import "./App.css";
import Twitter from "./components/Twitter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Twitter Clone</h1>
        </header>
        <Twitter />
      </div>
    );
  }
}

export default App;