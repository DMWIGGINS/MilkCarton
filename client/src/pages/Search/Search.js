import "./search.css";
import "../common.css";
import React, { Component } from 'react';
import {Row, Col, Button, Container, Input, Carousel} from 'react-materialize';
import MyMapComponent from "../../components/GoogleMaps/GoogleMaps.js";

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
            "circumstances":"Tina Sinclair and her daughter, Bethany Sinclair were last seen together in Chesterfield, NH, during the weekend of February 3 and 4, 2001. Prior to that weekend, Tina and her daughter, Bethany, lived in West Chesterfield at the residence of Tina's friend, Eugene Van Bowman, at 182 Mountain Road. Tina last went to her job and Bethany last attended school on February 2. Tina was 36 years old when she went missing. Bethany was 15 years old when she went missing.",
            "city":"W. Chesterfield",
            "county":"Cheshire",
            "state":"New Hampshire",
            "piercings":"Ears double pierced",
            "otherCharacteristics":"",
            "facialHair":"",
            "skeletalInformation":"Childhood injuries included a broken right arm and a broken collar bone.",
            "leftEyeColor":"Green",
            "fingersAndToeNails":"Kept nails long and painted, well manicured",
            "eyeDescription":"Green",
            "bodyHair":"Darker hair",
            "amputations":"",
            "scarsAndMarks":"Vertical surgical scar on abdomen",
            "prosthetics":"",
            "tattoos":"tattoo of a \"butterfly\" on right ankle",
            "foreignObjects":"",
            "hairColor":"Blond/Strawberry",
            "headHair":"Light Brown to Blonde",
            "rightEyeColor":"Green",
            "deformities":"",
            "caseManagerFirstName":"Michael",
            "caseManagerLastName":"Kokoski",
            "caseManagerPhone":"(603) 223-3856",
            "agencyZip":"03305",
            "agencyLastName":"Kokoski",
            "website":"",
            "comments":"alternate phone # 603-271-1255",
            "agency":"New Hampshire Cold Case Unit",
            "address2":"",
            "jurisdiction":"State",
            "title":"Detective",
            "agencyFirstName":"Mike",
            "phone":"(603)223-8570",
            "agencyCaseNumber":"C-01-0161",
            "dateReported":"",
            "agencyState":"New Hampshire",
            "lastName":"Sinclair",
            "ageLastSeen":"34 to 34 years old",
            "race":"White",
            "ethnicity":"Other",
            "sex":"Female",
            "weight":120,
            "firstName":"Tina",
            "dateEntered":"12/12/2008",
            "lastSeen":"February 04, 2001 18:33",
            "ageNow":"51 years old",
            "nickname":"Tee",
            "middleName":"Marie",
            "status":"Missing",
            "height":62,
            "createdAt":"2018-03-08T00:01:27.000Z",
            "updatedAt":"2018-03-08T00:01:27.000Z",
            "UserId":null
         },
         {
            "caseNumber":213,
            "zip":0,
            "circumstances":"Unknown. Dennis was last seen walking his dog at approximately 12:00pm in the vicinity of Chapel St. in Woodsville, NH. His dog was later found at his residence. Dennis left all personal belongings behind including his medication. Extensive searches have been conducted in frequented areas including White River, VT and wooded areas.",
            "city":"Woodsville",
            "county":"Grafton",
            "state":"New Hampshire",
            "piercings":"",
            "otherCharacteristics":"",
            "facialHair":"",
            "skeletalInformation":"",
            "leftEyeColor":"Hazel",
            "fingersAndToeNails":"",
            "eyeDescription":"",
            "bodyHair":"",
            "amputations":"",
            "scarsAndMarks":"Scars on tops of feet, long vertical scar on chest, and scars on leg.",
            "prosthetics":"",
            "tattoos":"",
            "foreignObjects":"",
            "hairColor":"Brown",
            "headHair":"",
            "rightEyeColor":"Hazel",
            "deformities":"",
            "caseManagerFirstName":"Lori",
            "caseManagerLastName":"Bruski",
            "caseManagerPhone":"817-718-7904",
            "agencyZip":"03774",
            "agencyLastName":"Trott",
            "website":"",
            "comments":"",
            "agency":"Haverhill Police Department",
            "address2":"",
            "jurisdiction":"",
            "title":"Sgt.",
            "agencyFirstName":"Wallace",
            "phone":"(603) 787-2222",
            "agencyCaseNumber":"02-1784",
            "dateReported":"",
            "agencyState":"New Hampshire",
            "lastName":"Towle",
            "ageLastSeen":"59 to 59 years old",
            "race":"White",
            "ethnicity":"",
            "sex":"Male",
            "weight":180,
            "firstName":"Dennis",
            "dateEntered":"12/12/2008",
            "lastSeen":"August 04, 2002 18:41",
            "ageNow":"75 years old",
            "nickname":"",
            "middleName":"Robert",
            "status":"Missing",
            "height":67,
            "createdAt":"2018-03-08T00:01:27.000Z",
            "updatedAt":"2018-03-08T00:01:27.000Z",
            "UserId":null
         },
         {
            "caseNumber":1815,
            "zip":0,
            "circumstances":"Tammy's photo is shown age-progressed to 30 years. She was last seen at approximately 8:00 a.m. on Court Street in Exeter, New Hampshire as she was walking to school. Tammy has a slender build, a fair complexion and she is cross-eyed.",
            "city":"Exeter",
            "county":"Rockingham",
            "state":"New Hampshire",
            "piercings":"",
            "otherCharacteristics":"",
            "facialHair":"",
            "skeletalInformation":"",
            "leftEyeColor":"Brown",
            "fingersAndToeNails":"",
            "eyeDescription":"Tammy's left eye turns outward (also called a wall eye or extropia of the left eye)",
            "bodyHair":"",
            "amputations":"",
            "scarsAndMarks":"",
            "prosthetics":"",
            "tattoos":"",
            "foreignObjects":"",
            "hairColor":"Brown",
            "headHair":"",
            "rightEyeColor":"Brown",
            "deformities":"",
            "caseManagerFirstName":"Helen",
            "caseManagerLastName":"Felch",
            "caseManagerPhone":"703-224-2150",
            "agencyZip":"03305",
            "agencyLastName":"",
            "website":"",
            "comments":"",
            "agency":"New Hampshire State Police",
            "address2":"",
            "jurisdiction":"State",
            "title":"",
            "agencyFirstName":"",
            "phone":"(603) 271-2663",
            "agencyCaseNumber":"84-2915",
            "dateReported":"",
            "agencyState":"New Hampshire",
            "lastName":"Belanger",
            "ageLastSeen":"8 to 8 years old",
            "race":"White",
            "ethnicity":"",
            "sex":"Female",
            "weight":70,
            "firstName":"Tammy",
            "dateEntered":"04/06/2009",
            "lastSeen":"November 13, 1984 00:00",
            "ageNow":"42 years old",
            "nickname":"",
            "middleName":"Lynn",
            "status":"Missing",
            "height":54,
            "createdAt":"2018-03-08T00:01:27.000Z",
            "updatedAt":"2018-03-08T00:01:27.000Z",
            "UserId":null
         }
        );
        this.setState({
            search: searchResults
        });
    }
    getCarousel() {
        let content = this.state.search.map(function(result) {
            return (
            <div key={result.caseNumber}>
                <div className="card">
                    <div className="card-image">
                        <img src="https://images.askmen.com/1080x540/2017/01/04-123847-what_stoicism_teaches_us_about_how_to_be_a_man.jpg" alt="" />
                        <span className="card-title">{result.firstName + " " + result.lastName}</span>
                        <span>{result.state}</span>
                    </div>
                    <div className="card-content">
                        <p>{result.circumstances}</p>
                    </div>
                </div>
            </div>)
        })
        if (content.length > 0) {
            return (<Carousel>
                {content}
            </Carousel>)
        } else {
            return (<div>empty</div>)
        }
    }
    render() {
        let carousel = this.getCarousel();
        return (
            <Row className="body-background-gradient">
                <Col s={12} m={5} className="left-gradient">
                    <div className="left-gradient-content">
                        <h5>Search criteria</h5>
                        <Input s={12} label="First name" />
                        <Input s={12} label="Last name" />
                        <Input s={12} label="Gender" />
                        <Input s={12} label="Location" />
                        <Button waves='light' onClick={this.getSearchResults.bind(this)}>Search</Button>
                    </div>
                </Col>
                <Col m={7} className="right-banner search-page center-align">
                    {carousel}
                </Col>
            </Row>
        );
    }
}
  
export default Search;

{/* <MyMapComponent
isMarkerShown
googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
loadingElement={<div style={{ height: `100%` }} />}
containerElement={<div style={{ height: `400px` }} />}
mapElement={<div style={{ height: `100%` }} />}
/> */}