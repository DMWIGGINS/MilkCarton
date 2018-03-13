import "./search.css";
import "../common.css";
import React, { Component } from 'react';
import Heading from "../../components/Heading";
import {Row, Col, Button, Input} from 'react-materialize';
import SearchCarousel from "../../components/Carousel"
import API from "../../utils/API"

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: [],
            width: window.innerWidth
        };
    }
    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    }

   

    state = {
        searchResults: [],
        firstName: "",
        lastName: "",
        city: "",
        state: ""
      };

      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.firstName && this.state.lastName) {
            console.log("I'm in the search by name conditional");
          API.findPerson({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
          })
            .then(res => this.loadPeople())
            .catch(err => console.log(err));
        } else if (this.state.city && this.state.state) {
            console.log("I'm in the search by city and state conditional");
            API.findSighting({
                city: this.state.city,
                state: this.state.state,
              })
                .then(res => this.loadSightings())
                .catch(err => console.log(err));
        }
      };
    //Render function that allows you to search and the return the carousel.
    render() {
        let desktopCarousel = <SearchCarousel searchResults={this.state.search}/>; 
        let mobileCarousel;
        if (this.state.width <= 600) {
            mobileCarousel = <SearchCarousel searchResults={this.state.search} options={{ fullWidth: true }}/>;
            desktopCarousel = null;
        }

        return (
            <Row className="body-background-gradient search-page">
                <Col s={12} m={5} className="left-gradient">
                    <div className="left-gradient-content search-form">
                        <Heading level={1}>Search Criteria</Heading>
                        <Input s={12} label="First name" value={this.state.firstName} 
                        onChange={this.handleInputChange} name="firstName"/>
                        <Input s={12} label="Last name" value={this.state.lastName} 
                        onChange={this.handleInputChange} name="lastName"/>
                        <Input s={12} label="City" value={this.state.city} 
                        onChange={this.handleInputChange} name="city"/>
                        <Input s={12} label="State" value={this.state.state} 
                        onChange={this.handleInputChange} name="city"/>
                        <Button waves='light' className="black" onClick={this.handleFormSubmit}>
                            
                            Search</Button> 
                    </div>
                    {mobileCarousel}
                </Col>
                <Col m={7} className="right-banner center-align">
                    {desktopCarousel}
                </Col>
            </Row>
        );
    }
}
  
export default Search;