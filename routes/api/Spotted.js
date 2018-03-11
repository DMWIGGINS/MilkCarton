const path = require("path");
const router = require("express").Router();
var dbModels = require("../models");
const booksController = require("../../controllers/missingPersonsController");


// Matches with "/api/missingPersons"
router.route("/")
.post(missingPersonsController.logSighting);
