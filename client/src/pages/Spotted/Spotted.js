import "../common.css";
import "./spotted.css";
import React, { Component } from 'react';
import Heading from "../../components/Heading";
import {Row, Col, Autocomplete, Input, Button} from 'react-materialize';
import API from "../../utils/API.js";

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
    render() {
        return (
            <Row className="body-background-gradient">
                <Col s={12} m={5} className="left-gradient">
                <div className="left-gradient-content">
                <Heading className="heading" level={2}>Spotted</Heading> 
                <Heading className="heading" level={5}>{this.state.currentCase.firstName + " " + this.state.currentCase.lastName}</Heading>   
                    <Autocomplete s={12} type="first name" title='First Name' data={{'FirstName': null,}}/>
                    <Autocomplete s={12} type="last name" title='Last Name' data={{'LastName': null,}} />
                    <Autocomplete s={12} type="last seen" title='Last Seen' data={{'LastSeen': null,}} />
                    <Autocomplete s={12} title='State' data={{'State': null,}} />
                    <Row>
                    <Input name='on' type='date' onChange={function(e, value) {'Date Spotted'}} />
                    </Row>
                    <Row>
                    <Input type='textarea' title='Notes from Siting'/>
                    </Row>
                    <div>
                    <Button waves='light'>Spotted</Button>
                    </div>                 
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