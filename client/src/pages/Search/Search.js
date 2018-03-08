import "./search.css";
import React, { Component } from 'react';
import {Row, Col, Button, Container, Input, Carousel} from 'react-materialize';
import MyMapComponent from "../../components/GoogleMaps/GoogleMaps.js";
import axios from 'axios';

class Search extends Component {
    searchMissingPersons(e) {
        var lastName = this.refs.lastName.input.value;
        var firstName = this.refs.firstName.input.value;
        var sex = this.refs.sex.input.value;
        var state = this.refs.state.input.value;
        axios.get(`/api/searchMissingPersons?lastName=` + lastName)
        .then(res => {
            console.log(res.data);
        })
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col s={6} offset="s3" className="center-align">
                        <h5>Search criteria</h5>
                        <Input s={12} label="First name" ref="firstName"/>
                        <Input s={12} label="Last name" ref="lastName"/>
                        <Input s={12} label="Sex" ref="sex"/>
                        <Input s={12} label="State" ref="state"/>
                        <Button onClick={this.searchMissingPersons.bind(this)} waves='light'>Search</Button>
                    </Col>
                </Row>
                <Row>
                {/* <Carousel /> */}

                </Row>
                <Row>
                <MyMapComponent
  isMarkerShown
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
</Row>
</Container>
        );
    }
}
  
export default Search;