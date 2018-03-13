import "./resources.css";
import "../common.css";
import React, { Component } from 'react';
import {Row, Col, Container} from 'react-materialize'
import Heading from "../../components/Heading";
import logo from '../milkcartonlogo.png'


class Resources extends Component {

    render() {
        return (
            <Container className="resources">
                <Row>
                    <Col s={6} offset="s3" className="left-gradient">
                    <div
                    className="left-gradient-content">
                     <img className="logo" src={logo} alt={"logo"}/>
                        <Heading level={4}>Useful Links and Resources</Heading>
                        <p><a target="_blank" rel="noopener noreferrer" href="https://www.namus.gov/">National Missing and Unidentified Persons System</a></p>
                        <p><a target="_blank" rel="noopener noreferrer" href="http://www.missingkids.com/">National Center for Missing & Exploited Children</a></p>
                        <p><a target="_blank" rel="noopener noreferrer" href="https://www.mentalhealth.gov/basics">Mental Health</a></p>
                        <p><a target="_blank" rel="noopener noreferrer" href="https://www.drugabuse.gov/publications/drugfacts/understanding-drug-use-addiction">Understanding Drug Use and Addiction</a></p>
                        <p><a target="_blank" rel="noopener noreferrer" href="https://www.alz.org/care/alzheimers-dementia-wandering.asp">Wandering and Dementia</a></p>
                        </div>
                    </Col>

                </Row>
            </Container>
        );
    }
}
  
export default Resources;

/* <Row className="card-panel grey lighten-2 " style={jumbotronStyle}>
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
</Row> */

 
