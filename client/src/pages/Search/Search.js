import "./search.css";
import "../common.css";
import React, { Component } from 'react';
import Heading from "../../components/Heading";
import {Row, Col, Button, Input} from 'react-materialize';
import SearchCarousel from "../../components/Carousel"

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: []
        };
    }
    getSearchResults() {
        let searchResults = [];
        searchResults.push({
            "caseNumber":212,
            "zip":0,
            "piercings":"Ears double pierced",
            "skeletalInformation":"Childhood injuries included a broken right arm and a broken collar bone.",
            "leftEyeColor":"Green",
            "fingersAndToeNails":"Kept nails long and painted, well manicured",
            "eyeDescription":"Green",
            "bodyHair":"Darker hair",
            "scarsAndMarks":"Vertical surgical scar on abdomen",
            "tattoos":"tattoo of a \"butterfly\" on right ankle",
            "hairColor":"Blond/Strawberry",
            "headHair":"Light Brown to Blonde",
            "rightEyeColor":"Green",
            "lastName":"Sinclair",
            "ageLastSeen":"34 to 34 years old",
            "race":"White",
            "ethnicity":"Other",
            "sex":"Female",
            "weight":120,
            "firstName":"Tina",
            "lastSeen":"February 04, 2001 18:33",
            "ageNow":"51 years old",
            "height":62,
            "Sightings": [
                {
                    city: "Epping",
                    state: "New Hampshire"
                },{
                    city: "North Hampton",
                    state: "New Hampshire"
                }
            ]
        },{
            "caseNumber":213,
            "zip":0,
            "leftEyeColor":"Hazel",
            "scarsAndMarks":"Scars on tops of feet, long vertical scar on chest, and scars on leg.",
            "hairColor":"Brown",
            "rightEyeColor":"Hazel",
            "lastName":"Towle",
            "ageLastSeen":"59 to 59 years old",
            "race":"White",
            "ethnicity":"",
            "sex":"Male",
            "weight":180,
            "firstName":"Dennis",
            "lastSeen":"August 04, 2002 18:41",
            "ageNow":"75 years old",
            "Sightings": [
                {
                    city: "Amesbury",
                    state: "Massachusetts"
                },{
                    city: "Seabrook",
                    state: "New Hampshire"
                },{
                    city: "Salisbury",
                    state: "Massachusetts"
                }
            ]
        },{
            "caseNumber":1815,
            "zip":0,
            "leftEyeColor":"Brown",
            "eyeDescription":"Tammy's left eye turns outward (also called a wall eye or extropia of the left eye)",
            "hairColor":"Brown",
            "rightEyeColor":"Brown",
            "lastName":"Belanger",
            "ageLastSeen":"8 to 8 years old",
            "race":"White",
            "ethnicity":"",
            "sex":"Female",
            "weight":70,
            "firstName":"Tammy",
            "lastSeen":"November 13, 1984 00:00",
            "ageNow":"42 years old",
            "height":54,
            "Sightings": [
                {
                    city: "Manchester",
                    state: "New Hampshire"
                },{
                    city: "Auburn",
                    state: "New Hampshire"
                },{
                    city: "Woodstock",
                    state: "Vermont"
                }
            ]
        });
        this.setState({
            search: searchResults
        });
    }
    //Render function that allows you to search and the return the carousel.
    render() {
        return (
            <Row className="body-background-gradient">
                <Col s={12} m={5} className="left-gradient">
                    <div className="left-gradient-content">
                        <Heading level={1}>Search Criteria</Heading>
                        <Input s={12} label="First name" />
                        <Input s={12} label="Last name" />
                        <Input s={12} label="Gender" />
                        <Input s={12} label="Location" />
                        <Button waves='light' className="black" onClick={this.getSearchResults.bind(this)}>Search</Button>
                    </div>
                </Col>
                <Col m={7} className="right-banner search-page center-align">
                    <SearchCarousel searchResults = {this.state.search}/>
                </Col>
            </Row>
        );
    }
}
  
export default Search;