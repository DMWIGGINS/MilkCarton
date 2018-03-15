const path = require("path");
const router = require("express").Router();
const db = require("../models");
const Op = db.Sequelize.Op;
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

// Defining methods for the missingPersonsController

var ssn = {};
ssn.currentUser = null;

function logSighting(req, res) {
    db
        .Sightings
        .create({
            caseNumber: req.body.caseNumber,
            city: req.body.caseNumber,
            state: req.body.state
        })
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

    // Setup default tables to include in query
    let includedTables = [{
            model: db.Images,
            where: {
                caseNumber: db
                .Sequelize
                .col('Person.caseNumber')
            }
        },{
            model: db.Sightings,
            where: {
                caseNumber: db.Sequelize.col('Person.caseNumber'),
                city: {
                    [Op.like]: "%" + req.query.city + "%"
                },
                state: {
                    [Op.like]: "%" + req.query.state + "%"
                }
            }
        }
    ]

    // If asked to return saved cases then do so
    if (ssn.currentUser != null) {
        includedTables.push({
            model: db.Saved,
            required: (req.query.searchSaved === "true"),
            where: {
                caseNumber: db.Sequelize.col('Person.caseNumber'),
                userID: ssn.currentUser.userID
            }
        });
    }

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
        include: includedTables
    }).then(function (data, err) {
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
        include: [{
            model: db.Images,
            where: {
                caseNumber: db.Sequelize.col('Person.caseNumber')
            }
        }, {
            model: db.Sightings,
            where: {
                caseNumber: db.Sequelize.col('Person.caseNumber')
            }
        }]
    }).then(function (data, err) {
        if (err) {
            res.status(500).end();
        } else {
            res.json(data[0]);
        }
    });
});

router.post("/api/case/save", function (req, res) {
    ssn = req.session;
    if (req.body.saved === "false") {
        db.Saved.create({
            caseNumber: req.body.caseNumber, 
            userID: ssn.currentUser.userID
        }).then(function (data, err) {
            if (err) {
                res.status(500).end();
            } else {
                res.status(200).end();
            }
        });
    } else {
        db.Saved.destroy({
            where: {
                caseNumber: req.body.caseNumber, 
                userID: ssn.currentUser.userID
            }
        }).then(function (data, err) {
            if (err) {
                res.status(500).end();
            } else {
                res.status(200).end();
            }
        });
    }
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

router.get('/', (req, res) => {
    res.render('email');
});

router.post("/api/sendEmail", function (req, res) {
    ssn = req.session;

    var caseData = req.body.caseData;
    var spottedData = req.body.spottedData;
    const output = `
        <p>There has been a sighting.</p>
        <h3>Sighting Details</h3>
        <ul>  
            <li>First Name: ${caseData.firstName}</li>
            <li>Last Name: ${caseData.lastName}</li>
            <li>Case Number: ${caseData.caseNumber}</li>
            <li>Date Seen: ${spottedData.date}</li>
            <li>Location: ${spottedData.location}</li>
        </ul>
        <h3>Details</h3>
        <p>${spottedData.details}</p>
    `;
  
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    nodemailer.createTestAccount((err, account) => {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'noreply.milkcarton@gmail.com',
                pass: 'MissingPerson'
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: ssn.currentUser.name + "<" + ssn.currentUser.email + ">", // sender address
            to: 'katie.e.deangelis@gmail.com', // list of receivers
            subject: "(Case Number - " + caseData.caseNumber + ") " + caseData.firstName + " " + caseData.lastName + " - Spotted", // Subject line
            // text: 'We have spotted them ' + spottedData.location, // plain text body
            html: output
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(500).end();
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            res.status(200).end();
        });
    });
});

// If no API routes are hit, send the React app
router.use(function (req, res) {
    ssn = req.session;
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;