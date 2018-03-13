var express = require("express");
var router = express.Router();
const db = require("../models");


// Defining methods for the missingPersonsController

function missingPersonsSearch(req, res) {
console.log("In controller missingPersonsSearch")
  if ((req.params.firstName !== null) && (req.params.lastName !== null)) {
    console.log("In the conditional of first and last name")
    db.People.findAll({
      where: {
        firstName: req.params.firstName,
        lastName: req.params.lastName
      },
      include: [db.Images, db.Sightings]
    }).then(function (data, err) {
      console.log("In the then of the first and last name conditional in controller")
      if (err) {
        console.log(err);
        res.status(500).end();
      } else if (data[0]) {
        console.log("data is returned");

        for (var i = 0; i < data.length; i++) {
          searchResults = {
            firstName: data[i].firstName,
            lastName: data[i].lastName,
            city: data[i].city,
            state: data[i].state,
            circumstances: data[i].circumstances,
            race: data[i].race,
            ethnicity: data[i].ethnicity,
            sex: data[i].sex,
            height: data[i].height,
            weight: data[i].weight
          }
        }
      }
    });
  } else {
    console.log("In the conditional of city and state")
  }
    db.Sightings.findAll({

      where: {
        city: req.params.city,
        state: req.params.state
      },
      include: [db.Person, db.Images]
    }).then(function (data, err) {
      console.log("In the then of the first and last name conditional in controller")
      
      if (err) {
        console.log(err);
        res.status(500).end();
      } else if (data[0]) {
        console.log("data is returned");
        for (var i = 0; i < data.length; i++) {
          searchResults = {
            firstName: data[i].firstName,
            city: data[i].city,
            lastName: data[i].lastName,
            state: data[i].state,
            circumstances: data[i].circumstances,
            race: data[i].race,
            ethnicity: data[i].ethnicity,
            sex: data[i].sex,
            height: data[i].height,
            weight: data[i].weight
          }
        }
      }
    })
  };


function logSighting(req, res) {
  console.log("I'm in the logSighting function of the controller")
  db.Sightings.create({
    caseNumber: req.body.caseNumber,
    city: req.body.caseNumber,
    state: req.body.state
  }).then(function (data, err) {
    console.log("I'm in the then part of the create Sightings in the controller")
    if (data) {
      console.log(data);
      res.status(200).end();
    } else if (err) {
      // If an error occurred, send a generic server failure
      console.log(err);
      res.status(500).end();
    }
  })
};



router.get("/search", function (req, res) {
  missingPersonsSearch(req, res);
});



router.post("/spotted", function (req, res) {
  logSighting(req, res);
});