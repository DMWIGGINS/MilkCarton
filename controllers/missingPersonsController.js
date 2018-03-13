const path = require("path");
const router = require("express").Router();
const db = require("../models");
const Op = db.Sequelize.Op;

// Defining methods for the missingPersonsController

var ssn = {};
ssn.currentUser = null;

function logSighting(req, res) {
  db
    .Sightings
    .create({caseNumber: req.body.caseNumber, city: req.body.caseNumber, state: req.body.state})
    .then(function (data, err) {
      if (data) {
        console.log(data);
        res
          .status(200)
          .end();
      } else if (err) {
        // If an error occurred, send a generic server failure
        console.log(err);
        res
          .status(500)
          .end();
      }
    })
};

// Route that handles the search functionality for missin persons cases
router.get("/api/searchMissingPersons", function (req, res) {
  ssn = req.session;
  db.Person.findAll({
      limit: 10,
      where: {
        lastName: {
          [Op.like]: req.query.lastName + "%"
        },
        firstName: {
          [Op.like]: req.query.firstName + "%"
        }
      },
      include: [
        {
          model: db.Images,
          where: {
            caseNumber: db
              .Sequelize
              .col('Person.caseNumber')
          }
        }, {
          model: db.Sightings,
          where: {
            caseNumber: db
              .Sequelize
              .col('Person.caseNumber'),
            city: {
              [Op.like]: "%" + req.query.city + "%"
            },
            state: {
              [Op.like]: "%" + req.query.state + "%"
            }
          }
        }
      ]
    })
    .then(function (data, err) {
      if (err) {
        res
          .status(500)
          .end();
      } else {
        res.json(data);
      }
    });
});

router.get("/api/case/getByNumber", function (req, res) {
    ssn = req.session;

    db.Person.findAll({
        where: {
            caseNumber: req.query.caseNumber
        },
        include: [
            {
            model: db.Images,
                where: {
                    caseNumber: db.Sequelize.col('Person.caseNumber')
                }
            }, {
            model: db.Sightings,
                where: {
                    caseNumber: db.Sequelize.col('Person.caseNumber')
                }
            }
        ]
    }).then(function (data, err) {
        if (err) {
            res.status(500).end();
        } else {
            res.json(data[0]);
        }
    });
});

router.get("/api/user/checkLogin", function (req, res) {
    ssn = req.session;
    res.json({
        status: (ssn.currentUser != null),
        user: ssn.currentUser
    });
})

router.post("/api/user/logout", function (req, res) {
    ssn = req.session;
    ssn.currentUser = null;
    res.status(200).end();
});

router.post("/api/user/login", function (req, res) {
  ssn = req.session;
  db.User.findAll({ // Take the fb user id of the currently connected user and see if it matches a fb user id in our db.
        where: {
            userID: req.body.googleId
        }
    })
    .then(function (data, err) { // If a row is returned, that fb user id alraedy exists in the db
        if (data[0]) {
            ssn.currentUser = data[0];
            res.status(200).end();
        } else {
            db.User.create({
                userID: req.body.googleId, 
                name: req.body.name, 
                image: req.body.imageUrl, 
                email: req.body.email
            }).then(function (data, err) {
                if (err) {
                    res.status(500).end();
                } else {
                ssn.currentUser = data;
                res.status(200).end();
                }
            });
        }
    });
});

// If no API routes are hit, send the React app
router.use(function (req, res) {
    ssn = req.session;
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;

