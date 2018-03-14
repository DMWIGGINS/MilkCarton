import "./search.css";
import "../common.css";
import React, { Component } from 'react';
import Heading from "../../components/Heading";
import {Row, Col, Button, Input} from 'react-materialize';
import SearchCarousel from "../../components/Carousel";
import AutocompleteLocation from "../../components/AutocompleteLocation";
import NavBar from "../../components/NavBar";
import logo from '../milkcartonlogo.png'
import API from "../../utils/API.js";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: [],
            width: window.innerWidth,
            searchSaved: false,
            error: ""
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

    toggleSearchSaved(e) {
        this.setState({
            searchSaved: this.refs.searchSaved.checked
        })
    }

    updateSearchData(caseData) {
        let newResults = this.state.search;
        for (var i = 0; i < newResults.length; i++) {
            if (newResults[i].caseNumber === caseData.caseNumber) {
                newResults[i] = caseData;
                this.setState({
                    searchResults: newResults
                })
            }
        }
    }
    getSearchResults() {
        let lastName = this.refs.lastName.input.value;
        let firstName = this.refs.firstName.input.value;
        let location = this.refs.location.refs.location.value;
        let commaIndex = location.indexOf(",");

        if (firstName === "" && lastName === "" && commaIndex === -1) {
            this.setState({
                error: "Please enter a property formated location \"City, State\""
            });
            return;
        }
        let city = location.substring(0, commaIndex).trim();

        let state = location.substring(commaIndex + 1, location.length).trim();
        let nextCommaIndex = state.indexOf(",");
        if (nextCommaIndex > -1) {
            state = state.substring(0, nextCommaIndex).trim();
        }

        var provinces = [{"short":"AL","name":"Alabama","country":"US"},
            {"short":"AK","name":"Alaska","country":"US"},
            {"short":"AZ","name":"Arizona","country":"US"},
            {"short":"AR","name":"Arkansas","country":"US"},
            {"short":"CA","name":"California","country":"US"},
            {"short":"CO","name":"Colorado","country":"US"},
            {"short":"CT","name":"Connecticut","country":"US"},
            {"short":"DC","name":"District of Columbia","alt":["Washington DC","Washington D.C."],"country":"US"},
            {"short":"DE","name":"Delaware","country":"US"},
            {"short":"FL","name":"Florida","country":"US"},
            {"short":"GA","name":"Georgia","country":"US"},
            {"short":"HI","name":"Hawaii","country":"US"},
            {"short":"ID","name":"Idaho","country":"US"},
            {"short":"IL","name":"Illinois","country":"US"},
            {"short":"IN","name":"Indiana","country":"US"},
            {"short":"IA","name":"Iowa","country":"US"},
            {"short":"KS","name":"Kansas","country":"US"},
            {"short":"KY","name":"Kentucky","country":"US"},
            {"short":"LA","name":"Louisiana","country":"US"},
            {"short":"ME","name":"Maine","country":"US"},
            {"short":"MD","name":"Maryland","country":"US"},
            {"short":"MA","name":"Massachusetts","country":"US"},
            {"short":"MI","name":"Michigan","country":"US"},
            {"short":"MN","name":"Minnesota","country":"US"},
            {"short":"MS","name":"Mississippi","country":"US"},
            {"short":"MO","name":"Missouri","country":"US"},
            {"short":"MT","name":"Montana","country":"US"},
            {"short":"NE","name":"Nebraska","country":"US"},
            {"short":"NV","name":"Nevada","country":"US"},
            {"short":"NH","name":"New Hampshire","country":"US"},
            {"short":"NJ","name":"New Jersey","country":"US"},
            {"short":"NM","name":"New Mexico","country":"US"},
            {"short":"NY","name":"New York","country":"US"},
            {"short":"NC","name":"North Carolina","country":"US"},
            {"short":"ND","name":"North Dakota","country":"US"},
            {"short":"OH","name":"Ohio","country":"US"},
            {"short":"OK","name":"Oklahoma","country":"US"},
            {"short":"OR","name":"Oregon","country":"US"},
            {"short":"PA","name":"Pennsylvania","country":"US"},
            {"short":"RI","name":"Rhode Island","country":"US"},
            {"short":"SC","name":"South Carolina","country":"US"},
            {"short":"SD","name":"South Dakota","country":"US"},
            {"short":"TN","name":"Tennessee","country":"US"},
            {"short":"TX","name":"Texas","country":"US"},
            {"short":"UT","name":"Utah","country":"US"},
            {"short":"VT","name":"Vermont","country":"US"},
            {"short":"VA","name":"Virginia","country":"US"},
            {"short":"WA","name":"Washington","country":"US"},
            {"short":"WV","name":"West Virginia","country":"US"},
            {"short":"WI","name":"Wisconsin","country":"US"},
            {"short":"WY","name":"Wyoming","country":"US"},
            {"short":"AS","name":"American Samoa","country":"US"},
            {"short":"GU","name":"Guam","country":"US"},
            {"short":"MP","name":"Northern Mariana Islands","country":"US"},
            {"short":"PR","name":"Puerto Rico","country":"US"},
            {"short":"UM","name":"United States Minor Outlying Islands","country":"US"},
            {"short":"VI","name":"Virgin Islands","country":"US"}
        ]

        // Loop through all the available provinces
        for (var i = provinces.length - 1; i >= 0; i--) {
            if (provinces[i].short === state) {
                state = provinces[i].name;
            }
        }

        let search = this;
        search.setState({
            search: []
        });
        API.searchMissingPerson(firstName, lastName, city, state, this.state.searchSaved).then(function(res){
            console.log(res.data);
            if (res.data.length > 0) {
                search.setState({
                    search: res.data,
                    error: ""
                });
            } else {
                search.setState({
                    search: res.data,
                    error: "No results found"
                });
            }
        });
    };

    //Render function that allows you to search and the return the carousel.
    render() {
        let desktopCarousel = <SearchCarousel searchResults={this.state.search} loggedIn={this.props.loggedIn} updateSearchData={this.updateSearchData.bind(this)}/>; 
        let mobileCarousel;
        let searchSavedToggle;
        let errorDiv;
        if (this.state.width <= 600) {
            mobileCarousel = <SearchCarousel searchResults={this.state.search} loggedIn={this.props.loggedIn} updateSearchData={this.updateSearchData.bind(this)} options={{ fullWidth: true }}/>;
            desktopCarousel = null;
        }

        if (this.state.error !== "") {
            errorDiv = (<div className="error-div">{this.state.error}</div>);
        }

        if (this.props.loggedIn === true) {
            searchSavedToggle = (<div className="toggle-search-saved">
                <label className="show-saved-case-label">Search only saved cases</label>
                <div className="switch show-saved-cases">
                    <label className="show-saved-case-label">Off<input type="checkbox" ref="searchSaved" onChange={this.toggleSearchSaved.bind(this)}/><span className="lever"></span>On</label>
                </div>
            </div>)
        }

        return (
            <Row className="body-background-gradient search-page">
            <NavBar user={this.props.user} />
                <Col s={12} m={5} className="left-gradient">
                    <div className="left-gradient-content search-form">
                    <img className="logo" src={logo} alt={"logo"}/>
                    <div className="center-align">
                        <Heading level={2}>Search Criteria</Heading></div>
                        {errorDiv}
                        <Input s={12} label="First name" ref="firstName"/>
                        <Input s={12} label="Last name" ref="lastName"/>
                        <AutocompleteLocation ref="location"/>
                        {searchSavedToggle}
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
