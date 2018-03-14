import "./carousel.css";
import React, {Component} from 'react';
import Heading from "../Heading";
import {Carousel} from 'react-materialize';
import GoogleMap from "../GoogleMap";
import API from "../../utils/API.js";

class SearchCarousel extends Component {
    saveCase(e) {
        let carousel = this;
        let caseNumber = e.currentTarget.dataset.id;
        let saved = e.currentTarget.dataset.saved;
        let newResults = carousel.props.searchResults;
        API.saveCase(caseNumber, saved).then(function() {
            for (var i = 0; i < newResults.length; i++) {
                if (newResults[i].caseNumber === parseInt(caseNumber, 10)) {
                    if (saved === "false") {
                        newResults[i].Saveds = ["Found"];
                    } else {
                        newResults[i].Saveds = [];
                    }
                    
                    carousel.props.updateSearchData(newResults[i]);
                    break;
                }
            }
        });
    }
    getCarousel() {
        let carousel = this;
        let content = this.props.searchResults.map(function (result) {
            let saveCaseIcon;
            let alreadySavedIcon;
            if (carousel.props.loggedIn === true) {
                if(result.Saveds != null && result.Saveds.length > 0) {
                    alreadySavedIcon = <i className="material-icons">star</i>;
                    saveCaseIcon = (<a className="favorites-button btn-floating halfway-fab waves-effect waves-light red darken-4" data-saved="true" data-id={result.caseNumber} onClick={carousel.saveCase.bind(carousel)}>
                        <i className="material-icons">star</i>
                    </a>)
                } else {
                    saveCaseIcon = (<a className="favorites-button btn-floating halfway-fab waves-effect waves-light red darken-4" data-saved="false" data-id={result.caseNumber} onClick={carousel.saveCase.bind(carousel)}>
                        <i className="material-icons">star_border</i>
                    </a>)
                }
            }
            return (
                <div>
                <div key={result.caseNumber}>
                    <div className="card">
                        <div className="card-content left-align">
                            <Heading level={5}>
                                <b>{result.firstName + " " + result.lastName}</b>
                                {alreadySavedIcon}
                            </Heading>
                            <a className="btn-floating halfway-fab waves-effect waves-light red darken-4" href={"/spotted/" + result.caseNumber}>
                                <i className="material-icons">remove_red_eye</i>
                            </a>
                            {saveCaseIcon}
                        </div>
                        <div className="card-image left-align">
                            <img src={result.Images[0].photo} alt=""/>
                            <div className="card-header-data">
                                <div>
                                    <b>Sex: </b>
                                    {result.sex}</div>
                                <div>
                                    <b>Hair color: </b>
                                    {result.hairColor}</div>
                                <div>
                                    <b>Eye color: </b>
                                    {result.leftEyeColor + "/" + result.rightEyeColor}</div>
                                <div>
                                    <b>Current age: </b>
                                    {result.ageNow}</div>
                                <div>
                                    <b>Height: </b> 
                                    {result.height}</div>
                            </div>
                            </div>
                        </div>
                        <div className="card-sightings">
                            <div className="or-seperator">
                                <div className="line"></div>
                                <div className="or-text">Sightings</div>
                                <div className="line"></div>
                            </div>
                            <GoogleMap locations={result.Sightings}/>
                        </div>
                    </div>
                </div>
            )
        })

        if (content.length > 0) {
            return (
                <Carousel options={this.props.options}>
                    {content}
                </Carousel>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
    render() {
        return this.getCarousel()
    }
}
export default SearchCarousel;
