///////////////////////////////////////////////////////////////////////////////////////
//                             Dependencies & Variables                              //
///////////////////////////////////////////////////////////////////////////////////////
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;
// Import routes and give the server access to them.
const routes = require("./controllers/missingPersonsController.js");
const app = express();

///////////////////////////////////////////////////////////////////////////////////////
//                               App & Database Config                               //
///////////////////////////////////////////////////////////////////////////////////////
// Session management for gmail oauth
app.use(session({
    secret: 'XASDASDA'
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);


//Models
var models = require("./models");
 
//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});

app.listen(port, function() {
    console.log("listening on port", port);
  });