import "./resources.css";
import React, { Component } from 'react';
import {Row, Col, Container} from 'react-materialize'

class Resources extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col s={6} offset="s3" className="center-align">
                        <h5>Useful Links and Resources</h5>
                    </Col>
                </Row>
                <Row>
                    <Col s={6} offset="s3">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.namus.gov/">National Missing and Unidentified Persons System</a>
                    </Col>
                </Row>
            </Container>
        );
    }
}
  
export default Resources;