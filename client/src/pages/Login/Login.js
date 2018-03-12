import "./login.css";
import "../common.css";
import React, { Component } from 'react';
import Heading from "../../components/Heading";
import {Row, Col, Button} from 'react-materialize'
import GoogleLogin from 'react-google-login';
import logo from './milkcartonlogo.png';

class Login extends Component {
    handleLoginResponse(response) {
        if (response.error == null) {
            this.props.setLoginState(true);
            fetch('api/user/login', {
                method: 'POST',
                body: JSON.stringify(response.profileObj),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                return res
            }).catch(err => err);
        } else {
            this.props.setLoginState(false);
        }
    }
    handleLogout() {
        this.props.setLoginState(false);
    }
    render() {
        let loginOrOut = null;
        let savedCaseButton = null;
        if (this.props.loggedIn) {
            loginOrOut = (<Button 
                className="login-buttons center-align black" 
                waves='light' 
                onClick= {this.handleLogout.bind(this)}>Logout</Button>)
            savedCaseButton = (<Button 
                className="login-buttons center-align black" 
                waves='light' 
                node="a" 
                href="/saved">Saved Cases</Button>);
        } else {
            loginOrOut = (<GoogleLogin
                clientId="277659205285-9aqgv54koa3l693gcqcs2knt9lqrg9e9.apps.googleusercontent.com"
                buttonText="Login with Google"
                className="btn login-buttons center-align black"
                onSuccess={this.handleLoginResponse.bind(this)}
                onFailure={this.handleLoginResponse.bind(this)}
                style={{}} // This clears out the style from the component
            />);
        }
        return (
                <Row className="body-background-gradient">
                    <Col s={12} m={5} className="left-gradient">
                    <div className="left-gradient-content">
                        <img className="logo" src={logo} alt={"logo"}/>
                        <Heading level={1}>Milk Carton</Heading>
                        {loginOrOut}
                        <div className="or-seperator">
                           <div className="line"></div>
                           <div className="or-text">or</div> 
                           <div className="line"></div> 
                        </div>
                        {savedCaseButton}
                        <Button className="login-buttons center-align black" waves='light' node="a" href="/search">Search Cases</Button>
                        <Button className="login-buttons black" waves='light' node="a" href="/resources">Resources</Button>
                        </div>
                    </Col>
                    <Col m={7} className="right-banner center-align">
                        <div className="right-banner-text">
                        <Heading level={2}>FIND MISSING PERSONS</Heading>
                        <Heading level={5}>Search Cases. Report Sightings. Save lives.</Heading>
                        </div>
                    </Col>
                </Row>
        );
    }
}
  
export default Login;