const path = require("path");
const router = require("express").Router();
const db = require("../models");
const Op = db.Sequelize.Op;
var ssn = {};
ssn.currentUser = null;

router.post("/api/user/login", function (req, res) {    
    ssn = req.session;    
    console.log(req.session);
    console.log("-------------- Login User --------------");    
    console.log("ID: " + req.body.googleId);    
    console.log("Name: " + req.body.name);    
    console.log("Email: " + req.body.email);    
    console.log("Image: " + req.body.imageUrl);        
    db.User.findAll({         // Take the fb user id of the currently connected user and see if it matches a fb user id in our db.
        where: {            
            userID: req.body.googleId       
        }    
    }).then(function (data, err) {         // If a row is returned, that fb user id alraedy exists in the db
        if (data[0]) {            
            console.log(" - User already exists - ");            
            ssn.currentUser = data[0];            
            res.status(200).end();        
        } else {            
            console.log(" - User added - ");             // If no rows are returned take the body data from the client, create a new user, and send it to the db
            db.User.create({                    
                userID: req.body.googleId,
                name: req.body.name,
                image: req.body.imageUrl,
                email: req.body.email,
            }).then(function (data, err) {                
                if (err) {
                    res.status(500).end();                
                } else {                    
                    ssn.currentUser = data;                    
                    res.status(200).end();                
                }            
            });        
        }        
        console.log("----------------------------------------");    
    });
})

// Route that handles the search functionality for missin persons cases
router.get("/api/searchMissingPersons", function (req, res) {
    db.Person.findAll({
        where: {            
            lastName: {
                [Op.like]: "%" + req.query.lastName + "%"
            }       
        }    
    }).then(function (data, err) {
        if (err) {            
            res.status(500).end();        
        } else {   
            res.json(data);         
        }        
    });
});

// If no API routes are hit, send the React app
router.use(function (req, res) {    
    ssn = req.session;    
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;