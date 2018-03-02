import "./landing.css";
import React, { Component } from 'react';
import {Divider, Row, Col, Button, Container} from 'react-materialize'

class Landing extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col s={12} className="center-align">
                        <div className="section">
                            <h1>Milk Carton</h1>
                            <h2># / #</h2>
                        </div>
                    </Col>
                    <Col s={6} className="right-align">
                        <h6>Open cases</h6>
                    </Col>
                    <Col s={6} className="left-align">
                        <h6>Total cases</h6>
                    </Col>
                </Row>
                <Row>
                    <Col s={10} offset="s1">
                        <Divider/>
                    </Col>
                </Row>
                <Row>
                    <Col s={10} offset="s1" className="center-align landing-buttons">
                        <Button waves='light' node="a" href="/resources">Resources</Button>
                        <Button waves='light' node="a" href="/search">Search</Button>
                        <Button waves='light' node="a" href="/saved">Saved</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
  
export default Landing;