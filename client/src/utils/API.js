import axios from "axios";
export default {
  
  
  
  // Gets the book with the given id
  missingPersonSearch: function() {
    return axios.get("/search");
  },
  
  // Saves a book to the database
  logSighting: function() {
    return axios.post("/spotted", bookData);
  }
};