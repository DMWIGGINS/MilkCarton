import "../common.css";
import "./spotted.css";
import React, { Component } from 'react';
import Heading from "../../components/Heading";
import NavBar from "../../components/NavBar";
import CaseCard from "../../components/CaseCard";
import {Row, Col, Input, Button} from 'react-materialize';
import API from "../../utils/API.js";
import logo from '../milkcartonlogo.png';
import AutocompleteLocation from "../../components/AutocompleteLocation";


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
        window.Materialize.toast("Sent! Thank you for helping find this missing person.", 2000)

        var spottedData = {
            location: this.refs.location.refs.location.value,
            details: this.refs.details.state.value,
            date: this.refs.date.state.value
        }
        
        API.sendEmail(this.state.currentCase, spottedData).then(function(res) {
            console.log("Emailed");
        })
    }
    render() {
        return (
            <Row className="body-background-gradient">
            <NavBar user={this.props.user} />
                <Col s={12} m={5} className="left-gradient left-spotted">
                    <div className="left-gradient-content">
                        <img className="logo" src={logo} alt={"logo"}/>                
                        <div className="center-align">                
                            <Heading className="heading" level={2}>Spotted</Heading>
                        </div> 
                        <div className="spotted-form">
                            <Input s={12} label="Date seen" name='date' type='date' ref="date"/>
                            <AutocompleteLocation types={['address']} restrictions={{country: "us"}} ref="location"/>
                            <Input s={12} type='textarea' name="details" label='Notes from Sighting' ref="details"/>
                            <Button type="submit" waves='light' className="black" onClick={this.sendEmail.bind(this)}>Send Information</Button>
                        </div>
                        <CaseCard case={this.state.currentCase} loggedIn={false}/> 
                    </div>
                </Col>
                <Col s={12} m={7} className="right-gradient right-spotted">
                    <CaseCard case={this.state.currentCase} loggedIn={false}/> 
                </Col>
            </Row>
        );
    }
}
export default Spotted;