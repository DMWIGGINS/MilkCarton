// import "./carousel.css";
import React, { Component } from 'react';
import {Carousel} from 'react-materialize';
import GoogleMap from "../GoogleMap";



class SearchCarousel extends Component{
    getCarousel() {
        let content = this.props.searchResults.map(function(result) {
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
                        <GoogleMap locations={result.Sightings}/>
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
    render(){
        return this.getCarousel()
    }
}
export default SearchCarousel;
