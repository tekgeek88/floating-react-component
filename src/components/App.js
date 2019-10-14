import React, { Component } from "react";
import "./App.css";

import Content from './Content';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
          <div>Header</div>
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
