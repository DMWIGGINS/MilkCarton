///////////////////////////////////////////////////////////////////////////////////////
//                             Dependencies & Variables                              //
///////////////////////////////////////////////////////////////////////////////////////
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;
// Import routes and give the server access to them.
const routes = require("./routes");
const app = express();

///////////////////////////////////////////////////////////////////////////////////////
//                               App & Database Config                               //
///////////////////////////////////////////////////////////////////////////////////////

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("client/build"));

app.use(bodyParser.urlencoded({ extended: false }));
var db = require("./models");

//Models
var models = require("./models");
 
//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});
///////////////////////////////////////////////////////////////////////////////////////
//                                       Routes                                      //
///////////////////////////////////////////////////////////////////////////////////////
app.use("/", routes);

app.listen(port, function() {
    console.log("listening on port", port);
  });