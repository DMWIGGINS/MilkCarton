import "./carousel.css";
import React, {Component} from 'react';
import {Carousel} from 'react-materialize';
import CaseCard from "../CaseCard"

class SearchCarousel extends Component {
    getCarousel() {
        let carousel = this;
        let content = this.props.searchResults.map(function (result) {
            return (<div key={result.caseNumber}>
                <CaseCard case={result} updateSearchData={carousel.props.updateSearchData} loggedIn={carousel.props.loggedIn}/>
            </div>);
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
