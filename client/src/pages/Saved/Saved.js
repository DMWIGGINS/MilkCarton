import "./saved.css";
import React, { Component } from 'react';
import {Row, Col, Container, Card, CardTitle} from 'react-materialize'

class Saved extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col s={6} offset="s3" className="center-align">
                        <h1>Saved Cases</h1>
                    </Col>
                </Row>
                <Row>
                    <Col s={6} offset="s3">
                        <Card   className="horizontal saved-case grey lighten-4" 
                                header={
                                    <CardTitle image="https://www.findthemissing.org/en/photos/thumb/67349"></CardTitle>
                        }>
                            <div>
                                <div>Denise Bean</div>
                                <div>66 years old</div>
                                <div>Somersworth, New Hampshire</div>
                            </div>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col s={6} offset="s3">
                        <Card   className="horizontal saved-case grey lighten-4" 
                                header={
                                    <CardTitle image="https://www.findthemissing.org/en/photos/thumb/59767"></CardTitle>
                        }>
                            <div>
                                <div>Nancy Burgess</div>
                                <div>48 years old</div>
                                <div>Manchester, New Hampshire</div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                
                {/*<Row>
                    <Col s={12}>
                        <div className="card horizontal">
                            <div className="card-image">
                                <img src="https://www.findthemissing.org/en/photos/thumb/67349"/>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <div>Denise Bean</div>
                                    <div>66 years old</div>
                                    <div>Somersworth, New Hampshire</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>*/}
            </Container>
        );
    }
}

export default Saved;