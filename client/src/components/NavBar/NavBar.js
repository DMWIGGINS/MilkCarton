import "./navbar.css";
import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize'

class NavBar extends Component {
    render() {
        return (
            <Navbar className='brand' brand='MILK CARTON' left>
                <NavItem className='route'href='/'>HOME</NavItem>
                <NavItem className='route'href='/search'>SEARCH MISSING PERSONS</NavItem>
                <NavItem className='route'href='/resources'>RESOURCES</NavItem>
                {/* <NavItem className='route'href='/saved'>SAVED CASES</NavItem> */}
            </Navbar>
        );
    }
}
  
export default NavBar;