import "./googlemap.css";
//import "../common.css";
import React, { Component } from 'react';

// Breaking the Sighting Map into a component because we will be reusing it on 
// both the Search and Spotted pages
class GoogleMap extends Component {
    // The constructor for the SightingMap class to define the initial state
    constructor(props) {
        // also pass the props to the Component
        super(props);
        // Bind the componentDidMount function to this current instance of the 
        // sighting map
        this.componentDidMount.bind(this);
    }

    // When the sighting map is successfully rendered on the page this function 
    // will run
    componentDidMount() {
        // Define and assign default settings for the map
        var options = {
            zoom: 8,
            center: {
                lat: 43.0535,
                lng: -71.0735
            }
        }

        // Instantiating a new map, then getting a handle on the area of the
        // DOM in which it will render (in this case the div where ref="map") 
        // and then passing in the default options defined above
        let map = new window.google.maps.Map(this.refs.map, options);
        let bounds = new window.google.maps.LatLngBounds();

        // Instantiat Geocoder which will take in physical addresses
        // and convert them into longitude and latitude
        let geocoder = new window.google.maps.Geocoder();
        
        // Loop through the location array which will include all of the
        // sightings
        for (var x = 0; x < this.props.locations.length; x++) {
            let location = this.props.locations[x].city + ", " + this.props.locations[x].state
            // Pass each location into the geocoder to get lat/long
            geocoder.geocode({
                'address': location
            }, function (results, status) {
                // If the location was converted into lat/long okay,
                if (status === window.google.maps.GeocoderStatus.OK) {
                    // Then create a new marker with that lat/long on the map
                    var marker = new window.google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location
                    });
                    // Add markers to the maps boundaries
                    bounds.extend(marker.getPosition());
                }
            });
        }
        // Wait two seconds (padding for the carousel to render) then take 
        // in all the markers on the map and set the viewport to the 
        // given bounds
        window.google.maps.event.addListenerOnce(map, "tilesloaded", function(){
            setTimeout(function() {
                map.fitBounds(bounds);
            }, 1000)
        })
	}


    //Render function that allows you to search and the return the carousel.
    render() {
        return (
            <div className="google-map" ref="map"></div>
        );
    }
}
  
export default GoogleMap;