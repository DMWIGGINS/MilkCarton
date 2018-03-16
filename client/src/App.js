import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from "./pages/Login";
import Search from "./pages/Search";
import Spotted from "./pages/Spotted";
import Resources from "./pages/Resources"
import API from "./utils/API.js";

// The app component that is being rendered at the root in index.html
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            currentUser: null
        };
        let app = this;
        API.checkLogin().then(function(res) {
            app.setLoginState(res.data.status, res.data.user)
        });
    }
    setLoginState(loggedIn, user) {
        this.setState({
            loggedIn: loggedIn,
            currentUser: user
        });
    }

    render() {
        //this.props.loggedIn = this.state.loggedIn;
        return (
        <div className="App">
            <Switch>
                <Route exact path='/' render={() => <Login loggedIn={this.state.loggedIn} setLoginState={this.setLoginState.bind(this)} user={this.state.currentUser} />}/>
                <Route path='/search' render={() => <Search loggedIn={this.state.loggedIn} user={this.state.currentUser} />}/>
                <Route path='/spotted/:id' render={(props) => <Spotted loggedIn={this.state.loggedIn} user={this.state.currentUser} case={props.match.params.id}/>}/>
                <Route path='/resources' render={() => <Resources loggedIn={this.state.loggedIn} user={this.state.currentUser}/>}/>
            </Switch>
        </div>
        );
    }
}

export default App;
