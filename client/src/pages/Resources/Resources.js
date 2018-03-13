import "./resources.css";
import "../common.css";
import React, { Component } from 'react';
import {Row, Col} from 'react-materialize'
import Heading from "../../components/Heading";
import NavBar from "../../components/NavBar";
import logo from '../milkcartonlogo.png'


class Resources extends Component {

    render() {
        return (
            <Row className="body-background-gradient search-page">
             <NavBar user={this.props.user} />
                <Col s={12} m={5}className="left-gradient">
                    <div
                    className="left-gradient-content">
                    <img className="logo" src={logo} alt={"logo"}/>
                        <Heading level={3}>Useful Links and Resources</Heading>
                        <p><a target="_blank" rel="noopener noreferrer" href="https://www.namus.gov/">National Missing and Unidentified Persons System</a></p>
                        <p><a target="_blank" rel="noopener noreferrer" href="http://www.missingkids.com/">National Center for Missing & Exploited Children</a></p>
                        <p><a target="_blank" rel="noopener noreferrer" href="https://www.mentalhealth.gov/basics">Mental Health</a></p>
                        <p><a target="_blank" rel="noopener noreferrer" href="https://www.drugabuse.gov/publications/drugfacts/understanding-drug-use-addiction">Understanding Drug Use and Addiction</a></p>
                        <p><a target="_blank" rel="noopener noreferrer" href="https://www.alz.org/care/alzheimers-dementia-wandering.asp">Wandering and Dementia</a></p>
                        </div>
                    </Col>
                    
                    <Col m={7} className="right-banner center-align">
                       <div className="right-banner-text">
                 <Heading level={2}>FIND MISSING PERSONS</Heading>
     <Heading level={5}>Search Cases. Report Sightings. Save lives.</Heading>
     </div>
 </Col>
 </Row>
        );
    }
}
  
export default Resources;

