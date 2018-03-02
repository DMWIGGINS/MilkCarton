import React, { Component } from 'react';
import {Navbar, NavItem, Row, Col} from 'react-materialize'

class NavBar extends Component {
    render() {
        return (
            <Row>
                <Col s={12} className='nav-bar-header'>
                    <Navbar brand='Milk Carton' left>
                        <NavItem href='/landing'>Landing</NavItem>
                    </Navbar>
                </Col>
            </Row>
        );
    }
}
  
export default NavBar;