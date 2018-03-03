import "./navbar.css";
import React, { Component } from 'react';
import {Navbar, NavItem, Row, Col} from 'react-materialize'

class NavBar extends Component {
    render() {
        return (
            <Row>
                <Col s={12} className='nav-wrapper'>
                    <Navbar className='brand' brand='MILK CARTON' left>
                        <NavItem href='/landing'>LANDING PAGE</NavItem>
                        <NavItem href='/resources'>RESOURCES</NavItem>
                        <NavItem href='/saved'>SAVED CASES</NavItem>
                        <NavItem href='/search'>SEARCH MISSING PERSONS</NavItem>
                    </Navbar>
                </Col>
            </Row>
        );
    }
}
  
export default NavBar;