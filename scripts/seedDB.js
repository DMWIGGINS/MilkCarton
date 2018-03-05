const Sequelize = require("sequelize");
const db = require("../models");

function seedData() {
    const missingPersonData = [];
    var i = 0;
    for (i = 0; i < results.json.length; i++) {
        missingPerson = {
                lastName: "lastName[i]",
                firstName: "firstName[i]",
                sex: "sex[i]",
                ageLastSeen: "ageLastSeen[i]",
                ageNow: "ageNow[i]",
                height: " height[i]",
                weight: "weight[i]",
                race: "race[i]",
                ethnicity: "ethnicity[i]",
                nickname: " nickname[i]",
                dateEntered: "dateEntered[i]",
                lastSeen: " lastSeen[i]",
                middleName: "middleName[i]",
                caseNumber: "caseNumber[i]",
                zipCode: "zipCode[i]",
                city: "city[i]",
                county: "county[i]",
                state: "state[i]",
                circumstances: "circumstances[i]"
            },

            missingPersonData = missingPersonData.push(missingPerson)
    };
    // db.Person.bulkInsert('missingPersonData')
};