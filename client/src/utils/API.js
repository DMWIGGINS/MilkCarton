import axios from "axios";


export default {
  
  // Gets the results of the missing person search using first and last name
  findMissingPersonByName: function(personData) {
    return axios.get("/search");
  },

  // Gets the results of the missing person search using city and state  
  findMissingPersonByLocation: function(personData) {
    return axios.get("/search");
  },
  
  // Posts a new sighting of a missing person to the database
  createSighting: function(sightingData) {
    return axios.post("/spotted", sightingData);
  }
};

