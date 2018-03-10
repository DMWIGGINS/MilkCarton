const Sequelize = require("sequelize");
const db = require("../models");
const missingPersonResults = require("../results.json");

function gatherData(results) {

    for (var key in results) {
        const currentCase = results[key];
        const missingPerson = {

            // case number
            caseNumber: key,

            // circumstances
            circumstances: currentCase.circumstances.circumstances,


            // characteristics
            piercings: currentCase.characteristics.piercings,
            otherCharacteristics: currentCase.characteristics.otherCharacteristics,
            facialHair: currentCase.characteristics.facialHair,
            skeletalInformation: currentCase.characteristics.skeletalInformation,
            leftEyeColor: currentCase.characteristics.leftEyeColor,
            fingersAndToeNails: currentCase.characteristics.fingersAndToeNails,
            eyeDescription: currentCase.characteristics.eyeDescription,
            bodyHair: currentCase.characteristics.bodyHair,
            amputations: currentCase.characteristics.amputations,
            scarsAndMarks: currentCase.characteristics.scarsAndMarks,
            prosthetics: currentCase.characteristics.prosthetics,
            tattoos: currentCase.characteristics.tattoos,
            foreignObjects: currentCase.characteristics.foreignObjects,
            hairColor: currentCase.characteristics.hairColor,
            headHair: currentCase.characteristics.headHair,
            rightEyeColor: currentCase.characteristics.rightEyeColor,
            deformities: currentCase.characteristics.deformities,

            //  case manager
            caseManagerFirstName: currentCase.caseManager.firstName,
            caseManagerLastName: currentCase.caseManager.lastName,
            caseManagerPhone: currentCase.caseManager.phone,

            // investigatingAgency
            agencyZip: currentCase.investigatingAgency.zip,
            agencyLastName: currentCase.investigatingAgency.lastName,
            website: currentCase.investigatingAgency.website,
            comments: currentCase.investigatingAgency.comments,
            agency: currentCase.investigatingAgency.agency,
            address2: currentCase.investigatingAgency.address2,
            jurisdiction: currentCase.investigatingAgency.jurisdiction,
            title: currentCase.investigatingAgency.title,
            agencyFirstName: currentCase.investigatingAgency.firstName,
            phone: currentCase.investigatingAgency.phone,
            agencyCaseNumber: currentCase.investigatingAgency.caseNumber,
            dateReported: currentCase.investigatingAgency.dateReported,
            agencyState: currentCase.investigatingAgency.state,

            // case info
            lastName: currentCase.caseInfo.lastName,
            ageLastSeen: currentCase.caseInfo.ageLastSeen,
            race: currentCase.caseInfo.race,
            ethnicity: currentCase.caseInfo.ethnicity,
            sex: currentCase.caseInfo.sex,
            weight: currentCase.caseInfo.weight,
            firstName: currentCase.caseInfo.firstName,
            dateEntered: currentCase.caseInfo.dateEntered,
            lastSeen: currentCase.caseInfo.lastSeen,
            ageNow: currentCase.caseInfo.ageNow,
            nickname: currentCase.caseInfo.nickname,
            middleName: currentCase.caseInfo.middleName,
            status: currentCase.caseInfo.status,
            height: currentCase.caseInfo.height,

            // regionalAdministrator
            adminFirstName: currentCase.regionalAdministrator.firstName,
            adminLastName: currentCase.regionalAdministrator.lastName,
            adminPhone: currentCase.regionalAdministrator.phone,
            email: currentCase.regionalAdministrator.email
        }

        // missingPerson.Sightings = [];
        // missingPerson.Sightings.push({
        //     caseNumber: key,
        //     city: currentCase.circumstances.city,
        //     state: currentCase.circumstances.state,
        //     zip: currentCase.circumstances.zip,
        //     county: currentCase.circumstances.county
        // }),

        missingPerson.Images = [];
        for (var imageKey in currentCase.photos) {
            missingPerson.Images.push({
                caseNumber: key,
                photo: currentCase.photos[imageKey]
            })
        }

        // console.log(missingPerson.Images);
        db.Person.create(missingPerson, {
            include: [db.Images],
            // include: [db.Sightings]
        }).then(function (data, err) {
            if (err) {
                console.log("Something went wrong...")
            } else {
                console.log("That worked!")
            }
        })
        // db.Person.insert(missingPerson, {
        //     include: [db.Sightings],
        // }).then(function (data, err) {
        //     if (err) {
        //         console.log("Something went wrong...")
        //     } else {
        //         console.log("That worked!")
        //     }
        // })
    }
};



gatherData(missingPersonResults);