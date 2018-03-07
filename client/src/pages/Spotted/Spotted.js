import "./spotted.css";
import React, { Component } from 'react';
import {Row, Col, Button, Container, Input, Card} from 'react-materialize';
import MyMapComponent from "../../components/GoogleMaps/GoogleMaps.js";


class Spotted extends Component {
    render() {
        return (
            <Container>
            <Row className="center-align">
            <h1 className="title">Spotted</h1>
            </Row>        
            <Row>
                <Col s={12} l={8} offset="l2" className="center-align">
                    <Card className="horizontal saved-case grey lighten-4 valign-wrapper">
                    <img className='responsive-image'src="https://www.findthemissing.org/en/photos/thumb/59767"></img>
                    </Card>    
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
            </Row>               
            </Container>
        );
    }
}
  
export default Spotted;