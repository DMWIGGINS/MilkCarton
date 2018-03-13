import "./search.css";
import "../common.css";
import React, { Component } from 'react';
import Heading from "../../components/Heading";
import {Row, Col, Button, Input} from 'react-materialize';
import SearchCarousel from "../../components/Carousel";
import API from "../../utils/API.js";

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

    getSearchResults() {
        let lastName = this.refs.lastName.input.value;
        let firstName = this.refs.firstName.input.value;
        let city = this.refs.city.input.value;
        let state = this.refs.state.input.value;
        let search = this;
        search.setState({
            search: []
        });
        API.searchMissingPerson(firstName, lastName, city, state).then(function(res){
            console.log(res.data);
            search.setState({
                search: res.data
            });
        });
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
                        <Input s={12} label="First name" ref="firstName"/>
                        <Input s={12} label="Last name" ref="lastName"/>
                        <Input s={12} label="City" ref="city"/>
                        <Input s={12} label="State" ref="state"/>
                        <Button waves='light' className="black" onClick={this.getSearchResults.bind(this)}>Search</Button> 
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
