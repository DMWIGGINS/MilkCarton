import "./landing.css";
import React, { Component } from 'react';
import Heading from "../../components/Heading";
import {Divider, Row, Col, Button, Container} from 'react-materialize'
// import Parallax from "react-materialize/lib/Parallax";

const jumbotronStyle = {
    paddingBottom: '20px',
    paddingRight:'100px',
    paddingLeft:'100px',
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"
  }

class Landing extends Component {
    render() {
        return (
            <Container >
                <Row className="card-panel grey lighten-2 " style={jumbotronStyle}>
                    <Row>
                        <Col s={12} l={12} className="center-align">
                            <div>
                                <Heading level={1}>Milk Carton</Heading>
                                <Heading level={4}> #/# </Heading>
                            </div>
                        </Col>
                    </Row>   
                    <Row>
                        <Col s={6} className="right-align">
                                <h6>Open cases</h6>
                        </Col>
                        <Col s={6} className="left-align">
                                <h6>Total cases</h6>
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Col s={10} offset="s1">
                        <Divider/>
                    </Col>
                </Row>
                <Row>
                    <Col s={10} offset="s1" className="center-align landing-buttons">
                        <div className="button-container">
                            <Button waves='light' node="a" href="/resources">Resources</Button>
                        </div>
                        <div className="button-container">
                            <Button waves='light' node="a" href="/spotted">Spotted</Button>
                        </div>
                        <div className="button-container">
                            <Button waves='light' node="a" href="/search">Search</Button>
                        </div>
                        <div className="button-container">
                            <Button waves='light' node="a" href="/saved">Saved</Button>
                        </div>
                        
                    </Col>
                </Row>
            </Container> 
        ); 
    }
}
  
export default Landing;