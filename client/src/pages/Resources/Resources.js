import "./resources.css";
import "../common.css";
import React, { Component } from 'react';
import {Row, Col, CardPanel} from 'react-materialize'
import Heading from "../../components/Heading";
import NavBar from "../../components/NavBar";
import logo from '../milkcartonlogo.png'


class Resources extends Component {

    render() {
        return (
            <Row className="body-background-gradient resources-page">
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
               <Col s={12} m={7}>
               <CardPanel className="right-gradient" textClassName="grey text">
               <br/>
            <hr/>
               <Heading level={5}>The Need</Heading>
            <span>Anyone, regardless of gender, age, ethnicity, or educational background may become a missing person.  In the United States today, there are over 14,000 open missing persons cases. Of those 14,000 missing persons cases, how many do you know of? Do you know how many people are currently missing in your town, county, or state? How would you identify a missing person? If you were out and about and saw a missing person, how would you report it? Who would you report it to?</span>
            <br/> <br/>
            <Heading level={5}>The App</Heading>
            <span>In the mid-1980s, the United States began printing advertisements on milk cartons to draw attention to a missing child. This mobile responsive web application is a digital milk carton that allows users immediate access to missing person information as well as the ability to easily report sightings to the proper authorities.</span>
            <br/>
            <Heading level={5}></Heading>
            <span>
                </span>
            <hr/>
               </CardPanel>
               </Col>
        </Row>    
        );
    }
}
  
export default Resources;

