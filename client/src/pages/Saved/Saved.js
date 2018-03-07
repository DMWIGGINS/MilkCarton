import "./saved.css";
import React, { Component } from 'react';
import {Row, Col, Container, Card} from 'react-materialize'

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
                                   <img className='responsive-image'src="https://www.findthemissing.org/en/photos/thumb/67349"alt="missing person"></img>       
                                }>
                                <span className="left-align">
                                    <ul>Denise Bean</ul>
                                    <ul>66 years old</ul>
                                    <ul>Somersworth, New Hampshire</ul>
                                </span>
                                <div className="fixed-action-btn horizontal">
                                    <a className="btn-floating btn-large red"> 
                                    <i className="large material-icons black">control_point</i>
                                    </a>
                                    <ul>
                                        <li><a className="btn-floating blue"><i className="material-icons">visibility</i></a></li>
                                        <li><a className="btn-floating red"><i className="material-icons">close</i></a></li>
                                    </ul>
                                </div>
                            </Card>
                        </Col>
                    </Row>
    
                    <Row>
                        <Col s={8} offset="s2" className="center-align">
                            <Card className="horizontal saved-case grey lighten-4 valign-wrapper" 
                                    header={
                                        <img className='responsive-image'src="https://www.findthemissing.org/en/photos/thumb/59767"alt="missing person"></img>
                            }>
                                <span className="left-align">
                                    <ul>Nancy Burgess</ul>
                                    <ul>48 years old</ul>
                                    <ul>Manchester, New Hampshire</ul>
                                    <div className="fixed-action-btn horizontal">
                                    <a className="btn-floating btn-large red">
                                        <i className="large material-icons black">control_point</i>
                                    </a>
                                    <ul>
                                        <li><a className="btn-floating blue"><i className="material-icons">visibility</i></a></li>
                                        <li><a className="btn-floating red"><i className="material-icons">close</i></a></li>
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