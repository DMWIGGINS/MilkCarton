import "./navbar.css";
import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize'
import API from "../../utils/API.js";

class NavBar extends Component {
    logout() {
        API.logout().then(function() {
            window.location.href = window.location.origin;
        });
    }
    render() {
        let logOutButton;
        let userImage = <div>MILK CARTON</div>;
        if (this.props.user !=  null) {
            logOutButton = <NavItem className='route' onClick={this.logout.bind(this)}>LOGOUT</NavItem>
            userImage = (<div className="brand-logo-wrapper">
                    <span>MILK CARTON</span>
                    <img className="user-image" src={this.props.user.image} alt="user"/>
                </div>);
        }
        return (
            <Navbar className='brand' brand={userImage} left>
                <NavItem className='route'href='/'>HOME</NavItem>
                <NavItem className='route'href='/search'>SEARCH MISSING PERSONS</NavItem>
                <NavItem className='route'href='/resources'>RESOURCES</NavItem>
                {logOutButton}
            </Navbar>
        );
    }
}
  
export default NavBar;