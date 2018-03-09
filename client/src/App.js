import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Spotted from "./pages/Spotted";
import Resources from "./pages/Resources"

// The app component that is being rendered at the root in index.html
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loggedIn: false
    };
}
  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/landing' component={Landing}/>
            <Route path='/search' component={Search}/>
            <Route path='/saved' component={Saved}/>
            <Route path='/spotted' component={Spotted}/>
            <Route path='/resources' component={Resources}/>
        </Switch>
      </div>
    );
  }
}

export default App;
