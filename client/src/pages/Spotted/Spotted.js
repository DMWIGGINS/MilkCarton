import "../common.css";
import "./spotted.css";
import React, { Component } from 'react';
import Heading from "../../components/Heading";
import NavBar from "../../components/NavBar";
import {Row, Col, Autocomplete, /*Form,*/ Input, Button} from 'react-materialize';
import API from "../../utils/API.js";
import logo from '../milkcartonlogo.png'


class Spotted extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCase: {}
        }
        let spotted = this;
        API.getCaseByNumber(props.case).then(function(res) {
            spotted.setState({currentCase: res.data});
        })
    }
    sendEmail() {
        console.log(this.state.currentCase);
        console.log(this.refs.firstName.state.value);
        console.log(this.refs.lastName.state.value);
        console.log(this.refs.caseNumber.state.value);
        console.log(this.refs.location.state.value);
        console.log(this.refs.date.state.value);

        // TODO: Call server here to send out the email i think?
    }
    render() {
        return (
            <Row className="body-background-gradient">
            <NavBar user={this.props.user} />
                <Col s={12} m={5} className="left-gradient">
                <div className="left-gradient-content">
                <img className="logo" src={logo} alt={"logo"}/>
                <div className="center-align">                
                <Heading className="heading" level={2}>Spotted</Heading></div> 
                <Heading className="heading" level={5}>{this.state.currentCase.firstName + " " + this.state.currentCase.lastName}</Heading>   
                {/* <Form method="POST" action="send"> */}
                <Autocomplete s={12} name="first-name" type="first name" title='First Name' data={{'FirstName': null,}} ref="firstName"/>
                <Autocomplete s={12} name="last-name" type="last name" title='Last Name' data={{'LastName': null,}}  ref="lastName"/>
                <Autocomplete s={12} name="case-number" type="case-number" title='case-number' data={{'case-number': null,}} ref="caseNumber" />
                <Autocomplete s={12} name="location" title='State' data={{'State': null,}}  ref="location"/>
                <Input name='date' type='date' onChange={function(e, value) {'Date Spotted'}}  ref="date"/>
                <Input type='textarea' name="details" title='Notes from Sighting' ref="details"/>
                <Button type="submit" waves='light' onClick={this.sendEmail.bind(this)}>Send Information</Button>
                {/*</Form>*/}
                </div>
                </Col>
                <Col s={12} m={7} className="right-gradient">
                    <div className="right-gradient-content">
                    </div>  
                </Col>
            </Row>
        );
    }
}
export default Spotted;