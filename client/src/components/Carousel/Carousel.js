// import "./carousel.css";
import React, {Component} from 'react';
import Heading from "../Heading";
import {Carousel} from 'react-materialize';
import {Row} from 'react-materialize'
import GoogleMap from "../GoogleMap";

class SearchCarousel extends Component {
    getCarousel() {
        let content = this.props.searchResults.map(function (result) {
                return (
                    <div>
                    <div key={result.caseNumber}>
                        <div className="card">
                            <div className="card-content left-align">
                                <Heading level={5}>
                                    <b>{result.firstName + " " + result.lastName}</b>
                                </Heading>
                                <a className="btn-floating halfway-fab waves-effect waves-light red darken-4" href={"/spotted/" + result.caseNumber}>
                                    <i className="material-icons">remove_red_eye</i>
                                </a>
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
