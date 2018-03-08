import "./login.css";
import React, { Component } from 'react';
import Heading from "../../components/Heading";
import {Row, Col, Button} from 'react-materialize'
import GoogleLogin from 'react-google-login';

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
                        <Heading level={1}>Milk Carton</Heading>
                        <Button className="button" waves='light'>Sign In</Button>
                        <Button className="button" waves='light'>New User</Button>
                        <GoogleLogin
                        clientId="277659205285-9aqgv54koa3l693gcqcs2knt9lqrg9e9.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        className="button"
                        onSuccess={this.handleLoginResponse}
                        onFailure={this.handleLoginResponse}
                        style={{}} // This clears out the style from the component
                        />
                    </Col>
                    <Col s={7} className="login-banner">
                    </Col>
                </Row>
        );
    }
}
  
export default Login;