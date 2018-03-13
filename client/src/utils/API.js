import axios from "axios";


export default {
  
  // Gets the results of the missing person search using first and last name
  findPerson: function(personData) {
    console.log("in API findPerson")
    return axios.get("/search");
  },

  // Gets the results of the missing person search using city and state  
  findSighting: function(locationData) {
    console.log("in API findSighting")
    return axios.get("/search");
  },
  
  // Posts a new sighting of a missing person to the database
  createSighting: function(sightingData) {
    console.log("in API createSighting")
    return axios.post("/spotted", sightingData);
  }
};

