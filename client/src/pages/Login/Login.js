import "./login.css";
import React, { Component } from 'react';
import Heading from "../../components/Heading";
import {Row, Col, Button, Container, Input} from 'react-materialize'
import GoogleLogin from 'react-google-login';

class Login extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col s={12} className="center-align">
                        <Heading level={1}>Milk Carton</Heading>
                    </Col>
                </Row>
                <Row>
                    <Col s={6} offset="s3" className="center-align">
                        <Input s={12} label="Email" />
                        <Input s={12} label="Password" />
                    </Col>
                </Row>
                <Row>
                    <Col s={10} offset="s1" className="center-align login-buttons">
                        <Button className="button" waves='light'>Sign In</Button>
                        <Button className="button" waves='light'>New User</Button>
                    </Col>
                </Row>
                <Row>
                    <Col s={12} className="center-align">
                    <GoogleLogin
                        tag="a"
                        clientId="277659205285-9aqgv54koa3l693gcqcs2knt9lqrg9e9.apps.googleusercontent.com"
                        buttonText="Authenticate through gmail/google sign in."
                        className="google-login"
                        //onSuccess={}
                        //onFailure={}
                        style={{}} // This clears out the style from the component
                    />
                    </Col>
                </Row>
                
            </Container>
        );
    }
}
  
export default Login;