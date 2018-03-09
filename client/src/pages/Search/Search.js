import "./search.css";
import React, { Component } from 'react';
import {Row, Col, Button, Container, Input, Carousel} from 'react-materialize';
import MyMapComponent from "../../components/GoogleMaps/GoogleMaps.js";

class Search extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col s={6} offset="s3" className="center-align">
                        <h5>Search criteria</h5>
                        <Input s={12} label="First name" />
                        <Input s={12} label="Last name" />
                        <Input s={12} label="Gender" />
                        <Input s={12} label="Location" />
                        <Button waves='light'>Search</Button>
                    </Col>
                </Row>
                <Row>
                <Carousel>
                    <a class="carousel-item" href="#one!"><img alt= "" src="https://lorempixel.com/250/250/nature/1"/></a>
                    <a class="carousel-item" href="#two!"><img alt= "" src="https://lorempixel.com/250/250/nature/2"/></a>
                    <a class="carousel-item" href="#three!"><img alt= "" src="https://lorempixel.com/250/250/nature/3"/></a>
                    <a class="carousel-item" href="#four!"><img alt= "" src="https://lorempixel.com/250/250/nature/4"/></a>
                    <a class="carousel-item" href="#five!"><img alt= "" src="https://lorempixel.com/250/250/nature/5"/></a>
                </Carousel>

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