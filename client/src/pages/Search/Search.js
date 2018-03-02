import "./search.css";
import React, { Component } from 'react';
import {Row, Col, Button, Container, Input} from 'react-materialize'


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
            </Container>
        );
    }
}
  
export default Search;