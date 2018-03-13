import "../common.css";
import "./spotted.css";
import React, { Component } from 'react';
import Heading from "../../components/Heading";
import {Row, Col, Autocomplete} from 'react-materialize';
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
                    <div className="card">
                        <div className="card-image">
                            <img src="https://images.askmen.com/1080x540/2017/01/04-123847-what_stoicism_teaches_us_about_how_to_be_a_man.jpg" alt="" />
                            <span className="card-title">{this.state.currentCase.firstName + " " + this.state.currentCase.lastName}</span>
                        </div>
                        <div className="card-content">
                            {/* <p>{result.circumstances}</p> */}
                        </div>     
                    </div>
                </div>
                </Col>
                <Col s={12} m={7} className="right-gradient">
                    <div className="right-gradient-content">
                    <Autocomplete s={12} label='First Name' data={{'FirstName': null,}}/>
                    <Autocomplete s={12} label='Last Name' data={{'LastName': null,}} />
                    <Autocomplete s={12} label='Last Name' data={{'LastName': null,}} />
                    <Autocomplete s={12} label='Last Name' data={{'LastName': null,}} />
                    </div>
                </Col>
            </Row>
        );
    }
}
export default Spotted;