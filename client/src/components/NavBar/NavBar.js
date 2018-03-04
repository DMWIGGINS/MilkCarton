import "./navbar.css";
import React, { Component } from 'react';
import {Navbar, NavItem, Row, Col} from 'react-materialize'

class NavBar extends Component {
    render() {
        return (
            <Row>
                <Col s={12} className='nav-wrapper'>
                    <Navbar className='brand' brand='MILK CARTON' left>
                        <NavItem className='route'href='/landing'>LANDING PAGE</NavItem>
                        <NavItem className='route'href='/resources'>RESOURCES</NavItem>
                        <NavItem className='route'href='/saved'>SAVED CASES</NavItem>
                        <NavItem className='route'href='/search'>SEARCH MISSING PERSONS</NavItem>
                    </Navbar>
                </Col>
            </Row>
        );
    }
}
  
export default NavBar;