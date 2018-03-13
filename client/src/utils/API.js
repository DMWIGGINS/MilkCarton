import axios from "axios";


export default {
  getCaseByNumber: function(number) {
    return axios.get("/api/case/getByNumber?caseNumber=" + number);
  },
  checkLogin: function() {
    return axios.get("/api/user/checkLogin");
  },
  login: function(profile) {
    return axios.post("/api/user/login", profile);
  },
  logout: function() {
    return axios.post("/api/user/logout");
  },
  // Gets the results of the missing person using all search criteria
  searchMissingPerson: function(firstName, lastName, city, state) {
    return axios.get("/api/searchMissingPersons?firstName=" + firstName + "&lastName=" + lastName + "&city=" + city + "&state=" + state); 
  },
  
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

