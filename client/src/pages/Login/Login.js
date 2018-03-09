import "./login.css";
import React, { Component } from 'react';
import Heading from "../../components/Heading";
import {Row, Col, Button} from 'react-materialize'
import GoogleLogin from 'react-google-login';
import logo from './milkcartonlogo.png';

class Login extends Component {
    handleLoginResponse(response) {
        if (response.error == null) {
            fetch('api/user/login', {
                method: 'POST',
                body: JSON.stringify(response.profileObj),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                return res
            }).catch(err => err);
        }
    }
    render() {
        return (
                <Row className="body-background-gradient">
                    <Col s={5} className="login-gradient">
                    <div className="login-gradient-content">
                        <img className="logo" src={logo} alt={"logo"}/>
                        <Heading level={1}>Milk Carton</Heading>
                        <GoogleLogin
                        clientId="277659205285-9aqgv54koa3l693gcqcs2knt9lqrg9e9.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        className="login-buttons center-align black"
                        onSuccess={this.handleLoginResponse}
                        onFailure={this.handleLoginResponse}
                        style={{}} // This clears out the style from the component
                        />
                        <div className="or-seperator">
                           <div className="line"></div>
                           <div className="or-text">or</div> 
                           <div className="line"></div> 
                        </div>
                        <Button className="login-buttons center-align black" waves='light'>Search Cases</Button>
                        <Button className="login-buttons black" waves='light'>Resources</Button>
                        </div>
                    </Col>
                    <Col s={7} className="login-banner center-align">
                        <div>
                        <Heading level={2}>FIND MISSING PERSONS</Heading>
                        <Heading level={5}>Search Cases. Report Sightings. Save lives.</Heading>
                        </div>
                    </Col>
                </Row>
        );
    }
}
  
export default Login;