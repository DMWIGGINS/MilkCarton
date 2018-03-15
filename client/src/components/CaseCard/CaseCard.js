import "./caseCard.css";
import React, {Component} from 'react';
import Heading from "../Heading";
import GoogleMap from "../GoogleMap";
import API from "../../utils/API.js";

class CaseCard extends Component {
    saveCase(e) {
        let caseCard = this;
        let newCaseData = this.props.case;
        let saved = e.currentTarget.dataset.saved;

        API.saveCase(this.props.case.caseNumber, saved).then(function() {
            if (saved === "false") {
                newCaseData.Saveds = ["Found"];
            } else {
                newCaseData.Saveds = [];
            }
            
            caseCard.props.updateSearchData(newCaseData);
        });
    }
    render() {
        let saveCaseIcon;
        let alreadySavedIcon;
        let spottedIcon;
        if (this.props.loggedIn === true) {
            if(this.props.case.Saveds != null && this.props.case.Saveds.length > 0) {
                alreadySavedIcon = <i className="material-icons">star</i>;
            }

            if (this.props.updateSearchData != null) {
                if(this.props.case.Saveds != null && this.props.case.Saveds.length > 0) {
                    saveCaseIcon = (<a className="favorites-button btn-floating halfway-fab waves-effect waves-light red darken-4" data-saved="true" onClick={this.saveCase.bind(this)}>
                        <i className="material-icons">star</i>
                    </a>)
                } else {
                    saveCaseIcon = (<a className="favorites-button btn-floating halfway-fab waves-effect waves-light red darken-4" data-saved="false" onClick={this.saveCase.bind(this)}>
                        <i className="material-icons">star_border</i>
                    </a>)
                }
            }
            spottedIcon = (
                <a className="btn-floating halfway-fab waves-effect waves-light red darken-4" href={"/spotted/" + this.props.case.caseNumber}>
                    <i className="material-icons">remove_red_eye</i>
                </a>
            );
        }

        if (this.props.case != null && this.props.case.firstName != null) {
            return (
                <div className="card">
                    <div className="card-content left-align">
                        <Heading level={5}>
                            <b>{this.props.case.firstName + " " + this.props.case.lastName}</b>
                            {alreadySavedIcon}
                        </Heading>
                        {spottedIcon}
                        {saveCaseIcon}
                    </div>
                    <div className="card-image left-align">
                        <img src={this.props.case.Images[0].photo} alt=""/>
                        <div className="card-header-data">
                            <div>
                                <b>Sex: </b>
                                {this.props.case.sex}</div>
                            <div>
                                <b>Hair color: </b>
                                {this.props.case.hairColor}</div>
                            <div>
                                <b>Eye color: </b>
                                {this.props.case.leftEyeColor + "/" + this.props.case.rightEyeColor}</div>
                            <div>
                                <b>Current age: </b>
                                {this.props.case.ageNow}</div>
                            <div>
                                <b>Height: </b> 
                                {this.props.case.height}</div>
                        </div>
                        </div>
                    <div className="card-sightings">
                        <div className="or-seperator">
                            <div className="line"></div>
                            <div className="or-text">Sightings</div>
                            <div className="line"></div>
                        </div>
                        <GoogleMap locations={this.props.case.Sightings}/>
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
            
    }
}
export default CaseCard;


/*

*/