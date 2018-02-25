import React, { Component } from 'react';
import NavBar from "./components/NavBar";

// The app component that is being rendered at the root in index.html
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
