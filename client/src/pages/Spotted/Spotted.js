import "../common.css";
import "./spotted.css";
import React, { Component } from 'react';
import Heading from "../../components/Heading";
import {Row, Col, Autocomplete, Input, CardPanel, Button} from 'react-materialize';

class Spotted extends Component {
    render() {
        return (
            <Row className="body-background-gradient">
                <Col s={12} m={5} className="left-gradient">
                <div className="left-gradient-content">
                <Heading className="heading" level={2}>Spotted</Heading>    
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