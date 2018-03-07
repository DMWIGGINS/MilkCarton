import "./login.css";
import React, { Component } from 'react';
import Heading from "../../components/Heading";
import {Row, Col, Button, Container, Input} from 'react-materialize'
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
            <Container>
                <Row>
                    <Col s={12} className="center-align title">
                        <Heading level={1}>Milk Carton</Heading>
                    </Col>
                </Row>
                    <Col s={10} offset="s1" className="center-align login-buttons">
                        <Button className="button" waves='light'>Search</Button>
                    </Col>

                <Row>
                </Row>    
                <Row>
                    <Col s={10} offset="s1" className="center-align login-buttons">
                        <Button className="button" waves='light'>Google Sign in</Button>
                    </Col>
                </Row>
                <Row>
                    <Col s={12} className="center-align">
                    <GoogleLogin
                        tag="a"
                        clientId="277659205285-9aqgv54koa3l693gcqcs2knt9lqrg9e9.apps.googleusercontent.com"
                        buttonText="Authenticate through gmail/google sign in."
                        className="google-login"
                        onSuccess={this.handleLoginResponse}
                        onFailure={this.handleLoginResponse}
                        style={{}} // This clears out the style from the component
                    />
                    </Col>
                </Row>
                <Row>
                    <div className="center-align">Help find the ones we've lost</div>
                </Row>
                
            </Container>
        );
    }
}
  
export default Login;