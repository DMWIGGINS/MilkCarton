const Sequelize = require("sequelize");
const db = require("../models");

// This file empties the Books collection and inserts the books below
sequelize.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {

  }
);

