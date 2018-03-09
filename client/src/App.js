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
  setLoginState(loggedIn) {
      this.setState({
        loggedIn: loggedIn
    });
  }
  render() {
    //this.props.loggedIn = this.state.loggedIn;
    return (
      <div className="App">
        <Switch>
            <Route exact path='/' render={() => <Login loggedIn={this.state.loggedIn} setLoginState={this.setLoginState.bind(this)} />}/>
            <Route path='/landing' render={() => <Landing loggedIn={this.state.loggedIn}/>}/>
            <Route path='/search' render={() => <Search loggedIn={this.state.loggedIn}/>}/>
            <Route path='/saved' render={() => <Saved loggedIn={this.state.loggedIn}/>}/>
            <Route path='/spotted' render={() => <Spotted loggedIn={this.state.loggedIn}/>}/>
            <Route path='/resources' render={() => <Resources loggedIn={this.state.loggedIn}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
