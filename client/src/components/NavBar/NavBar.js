import React from "react";
import {Navbar, NavItem, Row, Col} from 'react-materialize'

const NavBar = props => (
    <Row>
        <Col s={12} className='nav-bar-header'>
            <Navbar brand='Milk Carton' left>
                <NavItem href='get-started.html'>Getting started</NavItem>
                <NavItem href='components.html'>Components</NavItem>
            </Navbar>
        </Col>
    </Row>
  );
  
  export default NavBar;