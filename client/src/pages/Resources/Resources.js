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
                        <p><a target="_blank" rel="noopener noreferrer" href="https://www.namus.gov/">National Missing and Unidentified Persons System</a></p>
                        <p><a target="_blank" rel="noopener noreferrer" href="http://www.missingkids.com/">National Center for Missing & Exploited Children</a></p>
                        <p><a target="_blank" rel="noopener noreferrer" href="https://www.mentalhealth.gov/basics">Mental Health</a></p>
                        <p><a target="_blank" rel="noopener noreferrer" href="https://www.drugabuse.gov/publications/drugfacts/understanding-drug-use-addiction">Understanding Drug Use and Addiction</a></p>
                        <p><a target="_blank" rel="noopener noreferrer" href="https://www.alz.org/care/alzheimers-dementia-wandering.asp">Wandering and Dementia</a></p>
                    </Col>
                </Row>
            </Container>
        );
    }
}
  
export default Resources;


