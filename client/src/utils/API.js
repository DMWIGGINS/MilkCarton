import axios from "axios";


export default {
  sendEmail: function(caseData, spottedData) {
    return axios.post("/api/sendEmail", {
      caseData: caseData,
      spottedData: spottedData
    });
  },
  saveCase: function(number, saved) {
    return axios.post("/api/case/save", {
      caseNumber: number,
      saved: saved
    });
  },
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
  searchMissingPerson: function(firstName, lastName, city, state, searchSaved) {
    return axios.get("/api/searchMissingPersons?firstName=" + firstName + "&lastName=" + lastName + "&city=" + city + "&state=" + state + "&searchSaved=" + searchSaved); 
  },
  
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

