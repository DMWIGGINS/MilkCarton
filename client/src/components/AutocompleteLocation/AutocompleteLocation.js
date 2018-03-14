import React, { Component } from 'react';

class AutocompleteLocation extends Component {
    // The constructor for the Location class to define the initial state
    constructor(props) {
        // also pass the props to the Component
        super(props);
        // Bind the componentDidMount function to this current instance of the 
        // sighting map
        this.componentDidMount.bind(this);
    }

    // When the location search is successfully rendered on the page this function 
    // will run
    componentDidMount() {

        var options = {
            types: this.props.types,
            componentRestrictions: this.props.restrictions
        }

        const autocompleteFormField = this.refs.location;

        new window.google.maps.places.Autocomplete(autocompleteFormField, options);
	}


    //Render function that allows you to search and the return the carousel.
    render() {
        return (
            <div className="col input-field s12">
                <input className="location-autocomplete-search" type="text" ref="location"></input>
            </div>
        );
    }
}

export default AutocompleteLocation;