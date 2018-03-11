import "../common.css";
import "./spotted.css";
import React, { Component } from 'react';
import Heading from "../../components/Heading";
import {Row, Col, Button, Container, Input} from 'react-materialize';
import MyMapComponent from "../../components/GoogleMaps/GoogleMaps.js";


class Spotted extends Component {
    render() {
        return (
            <Row className="body-background-gradient">
                <Col s={12} m={5} className="left-gradient">
                <div className="left-gradient-content">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://images.askmen.com/1080x540/2017/01/04-123847-what_stoicism_teaches_us_about_how_to_be_a_man.jpg" alt="" />
                            {/* <span className="card-title">{result.firstName + " " + result.lastName}</span>
                            <span>{result.state}</span> */}
                        </div>
                        <div className="card-content">
                            {/* <p>{result.circumstances}</p> */}
                            <MyMapComponent
                            isMarkerShown
                            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ width: `100%`, height: `200px` }} />}
                            mapElement={<div style={{ height: `200px` }} />}
                            />
                        </div>
                    </div>
                </div>
                </Col>
                <Col s={12} m={7} className="right-gradient">
                    <div className="right-gradient-content">
                        <Heading level={1}>Spotted</Heading>
                        <Input s={12} label="First name" />
                        <Input s={12} label="Last name" />
                        <Input s={12} label="Gender" />
                        <Input s={12} label="Location" />
                    </div>
                </Col>
            </Row>
        );
    }
}
export default Spotted;