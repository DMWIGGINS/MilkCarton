import "./saved.css";
import React, { Component } from 'react';
import {Row, Col, Container, Card, CardTitle} from 'react-materialize'

class Saved extends Component {
        render() {
            return (
                <Container className="border">
                    <Row className="center-align">
                    <h1 className="title">Saved Cases</h1>
                    </Row>
                    <Row>
                        <Col s={8} offset="s2" className="center-align">
                            <Card className="horizontal saved-case grey lighten-4 valign-wrapper"
                            header={
                                   <img className='responsive-image'src="https://www.findthemissing.org/en/photos/thumb/67349"></img>       
                                }>
                                <span className="left-align">
                                    <ul>Denise Bean</ul>
                                    <ul>66 years old</ul>
                                    <ul>Somersworth, New Hampshire</ul>
                                </span>
                                <div class="fixed-action-btn horizontal">
                                    <a class="btn-floating btn-large red"> 
                                    <i class="large material-icons black">control_point</i>
                                    </a>
                                    <ul>
                                        <li><a class="btn-floating blue"><i class="material-icons">visibility</i></a></li>
                                        <li><a class="btn-floating red"><i class="material-icons">close</i></a></li>
                                    </ul>
                                </div>
                            </Card>
                        </Col>
                    </Row>
    
                    <Row>
                        <Col s={8} offset="s2" className="center-align">
                            <Card className="horizontal saved-case grey lighten-4 valign-wrapper" 
                                    header={
                                        <img className='responsive-image'src="https://www.findthemissing.org/en/photos/thumb/59767"></img>
                            }>
                                <span className="left-align">
                                    <ul>Nancy Burgess</ul>
                                    <ul>48 years old</ul>
                                    <ul>Manchester, New Hampshire</ul>
                                    <div class="fixed-action-btn horizontal">
                                    <a class="btn-floating btn-large red">
                                        <i class="large material-icons black">control_point</i>
                                    </a>
                                    <ul>
                                        <li><a class="btn-floating blue"><i class="material-icons">visibility</i></a></li>
                                        <li><a class="btn-floating red"><i class="material-icons">close</i></a></li>
                                    </ul>
                                </div> 
                                </span>
                                   
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