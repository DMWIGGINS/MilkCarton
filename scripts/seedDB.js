const Sequelize = require("sequelize");
const db = require("../models");
import "../results.json";

// Read Synchrously
var fs = require("fs");
console.log("\n *START* \n");
var content = fs.readFileSync("../results.json");
console.log("Output Content : \n"+ content);
console.log("\n *EXIT* \n");

function gatherData() {
    const missingPersonData = [];
    const missingPersonPhotos = [];
    var i = 0;
    for (i = 0; i < results.json.length; i++) {
        missingPerson = {

            // case number
            caseNumber: results.json[i],

            // circumstances
            zip: results.json[i].circumstances.zip,
            circumstances: results.json[i].circumstances.circumstances,
            city: results.json[i].circumstances.city,
            county: results.json[i].circumstances.county,
            state: results.json[i].circumstances.state,

            // characteristics
            piercings: results.json[i].characteristics.piercings,
            otherCharacteristics: results.json[i].characteristics.otherCharacteristics,
            facialHair: results.json[i].characteristics.facialHair,
            skeletalInformation: results.json[i].characteristics.skeletalInformation,
            leftEyeColor: results.json[i].characteristics.leftEyeColor,
            fingersAndToeNails: results.json[i].characteristics.fingersAndToeNails,
            eyeDescription: results.json[i].characteristics.eyeDescription,
            bodyHair: results.json[i].characteristics.bodyHair,
            amputations: results.json[i].characteristics.amputations,
            scarsAndMarks: results.json[i].characteristics.scarsAndMarks,
            prosthetics: results.json[i].characteristics.prosthetics,
            tattoos: results.json[i].characteristics.tattoos,
            foreignObjects: results.json[i].characteristics.foreignObjects,
            hairColor: results.json[i].characteristics.hairColor,
            headHair: results.json[i].characteristics.headHair,
            rightEyeColor: results.json[i].characteristics.rightEyeColor,
            deformities: results.json[i].characteristics.deformities,

            //  case manager
            caseManagerFirstName: results.json[i].caseManager.firstName,
            caseManagerLastName: results.json[i].caseManager.lastName,
            caseManagerPhone: results.json[i].caseManager.phone,

            // investigatingAgency
            agencyZip: results.json[i].investigatingAgency.zip,
            agencyLastName: results.json[i].investigatingAgency.lastName,
            website: results.json[i].investigatingAgency.website,
            comments: results.json[i].investigatingAgency.comments,
            agency: results.json[i].investigatingAgency.agency,
            address2: results.json[i].investigatingAgency.address2,
            jurisdiction: results.json[i].investigatingAgency.jurisdiction,
            title: results.json[i].investigatingAgency.title,
            agencyFirstName: results.json[i].investigatingAgency.firstName,
            phone: results.json[i].investigatingAgency.phone,
            agencyCaseNumber: results.json[i].investigatingAgency.caseNumber,
            dateReported: results.json[i].investigatingAgency.dateReported,
            agencyState: results.json[i].investigatingAgency.state,

            // case info
            lastName: results.json[i].caseInfo.lastName,
            ageLastSeen: results.json[i].caseInfo.ageLastSeen,
            race: results.json[i].caseInfo.race,
            ethnicity: results.json[i].caseInfo.ethnicity,
            sex: results.json[i].caseInfo.sex,
            weight: results.json[i].caseInfo.weight,
            firstName: results.json[i].caseInfo.firstName,
            dateEntered: results.json[i].caseInfo.dateEntered,
            lastSeen: results.json[i].caseInfo.lastSeen,
            ageNow: results.json[i].caseInfo.ageNow,
            nickname: results.json[i].caseInfo.nickname,
            middleName: results.json[i].caseInfo.middleName,
            status: results.json[i].caseInfo.status,
            height: results.json[i].caseInfo.height,



            // regionalAdministrator
            adminFirstName: results.json[i].
            regionalAdministrator.firstName,
            adminLastName: results.json[i].
            regionalAdministrator.lastName,
            adminPhone: results.json[i].
            regionalAdministrator.phone,
            email: results.json[i].
            regionalAdministrator.email,
        }

        var j = 0;
        for (j = 0; j < results.json[i].photos.length; j++) {
            allPhotos = {
                photo: results.json[i].photos[j]
            }


            missingPersonPhotos = missingPersonPhotos.push(allPhotos[j]);
        }

        

            missingPersonData = missingPersonData.push(missingPerson[i]);
    }

    console.log("data is" + missingPersonData);
    console.log("photos are" + missingPersonPhotos);
};
// db.Person.bulkInsert('missingPersonData')

gatherData();
