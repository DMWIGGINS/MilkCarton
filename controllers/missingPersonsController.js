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
    db.Sightings.create({
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

function convertState(state) {
    var provinces = [{"short":"AL","name":"Alabama","country":"US"},
        {"short":"AK","name":"Alaska","country":"US"},
        {"short":"AZ","name":"Arizona","country":"US"},
        {"short":"AR","name":"Arkansas","country":"US"},
        {"short":"CA","name":"California","country":"US"},
        {"short":"CO","name":"Colorado","country":"US"},
        {"short":"CT","name":"Connecticut","country":"US"},
        {"short":"DC","name":"District of Columbia","alt":["Washington DC","Washington D.C."],"country":"US"},
        {"short":"DE","name":"Delaware","country":"US"},
        {"short":"FL","name":"Florida","country":"US"},
        {"short":"GA","name":"Georgia","country":"US"},
        {"short":"HI","name":"Hawaii","country":"US"},
        {"short":"ID","name":"Idaho","country":"US"},
        {"short":"IL","name":"Illinois","country":"US"},
        {"short":"IN","name":"Indiana","country":"US"},
        {"short":"IA","name":"Iowa","country":"US"},
        {"short":"KS","name":"Kansas","country":"US"},
        {"short":"KY","name":"Kentucky","country":"US"},
        {"short":"LA","name":"Louisiana","country":"US"},
        {"short":"ME","name":"Maine","country":"US"},
        {"short":"MD","name":"Maryland","country":"US"},
        {"short":"MA","name":"Massachusetts","country":"US"},
        {"short":"MI","name":"Michigan","country":"US"},
        {"short":"MN","name":"Minnesota","country":"US"},
        {"short":"MS","name":"Mississippi","country":"US"},
        {"short":"MO","name":"Missouri","country":"US"},
        {"short":"MT","name":"Montana","country":"US"},
        {"short":"NE","name":"Nebraska","country":"US"},
        {"short":"NV","name":"Nevada","country":"US"},
        {"short":"NH","name":"New Hampshire","country":"US"},
        {"short":"NJ","name":"New Jersey","country":"US"},
        {"short":"NM","name":"New Mexico","country":"US"},
        {"short":"NY","name":"New York","country":"US"},
        {"short":"NC","name":"North Carolina","country":"US"},
        {"short":"ND","name":"North Dakota","country":"US"},
        {"short":"OH","name":"Ohio","country":"US"},
        {"short":"OK","name":"Oklahoma","country":"US"},
        {"short":"OR","name":"Oregon","country":"US"},
        {"short":"PA","name":"Pennsylvania","country":"US"},
        {"short":"RI","name":"Rhode Island","country":"US"},
        {"short":"SC","name":"South Carolina","country":"US"},
        {"short":"SD","name":"South Dakota","country":"US"},
        {"short":"TN","name":"Tennessee","country":"US"},
        {"short":"TX","name":"Texas","country":"US"},
        {"short":"UT","name":"Utah","country":"US"},
        {"short":"VT","name":"Vermont","country":"US"},
        {"short":"VA","name":"Virginia","country":"US"},
        {"short":"WA","name":"Washington","country":"US"},
        {"short":"WV","name":"West Virginia","country":"US"},
        {"short":"WI","name":"Wisconsin","country":"US"},
        {"short":"WY","name":"Wyoming","country":"US"},
        {"short":"AS","name":"American Samoa","country":"US"},
        {"short":"GU","name":"Guam","country":"US"},
        {"short":"MP","name":"Northern Mariana Islands","country":"US"},
        {"short":"PR","name":"Puerto Rico","country":"US"},
        {"short":"UM","name":"United States Minor Outlying Islands","country":"US"},
        {"short":"VI","name":"Virgin Islands","country":"US"}
    ]

    // Loop through all the available provinces
    for (var i = provinces.length - 1; i >= 0; i--) {
        if (provinces[i].short === state) {
            state = provinces[i].name;
        }
    }

    return state;
}

function addSighting(caseNumber, location) {
    let locArr = location.split(",");
    if (locArr.length == 4) {
        let city = locArr[1].trim();
        let state = convertState(locArr[2].trim());
        db.Sightings.findAll({ 
            where: {
                caseNumber: caseNumber,
                city: city,
                state: state
            }
        })
        .then(function (data, err) {
            if (data[0] == null) {
                db.Sightings.create({
                    caseNumber: caseNumber,
                    city: city,
                    state: state
                }).then(function (data, err) {
                    if (err) {
                        console.log("Failed to log sighting")
                    }
                })
            }
        });
    }
}

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
    if (ssn.currentUser == null) {
        return res.status(500).end();
    }
    
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

            addSighting(caseData.caseNumber, spottedData.location)

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