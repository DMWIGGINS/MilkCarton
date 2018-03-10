import "../common.css";
import React, { Component } from 'react';
import Heading from "../../components/Heading";
import {Row, Col, Input} from 'react-materialize';
// import MyMapComponent from "../../components/GoogleMaps/GoogleMaps.js";


class Spotted extends Component {
    render() {
        return (
            <Row className="body-background-gradient">
                <Col s={12} m={5} className="right-gradient">
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