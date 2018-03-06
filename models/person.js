'use strict';
module.exports = function (sequelize, DataTypes) {
    var Person = sequelize.define("Person", {
        caseNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        circumstances: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true
        },
        county: {
            type: DataTypes.STRING,
            allowNull: true
        },
        state: {
            type: DataTypes.STRING,
            allowNull: true
        },
        piercings: {
            type: DataTypes.STRING,
            allowNull: true
        },
        otherCharacteristics: {
            type: DataTypes.STRING,
            allowNull: true
        },
        facialHair: {
            type: DataTypes.STRING,
            allowNull: true
        },
        skeletalInformation: {
            type: DataTypes.STRING,
            allowNull: true
        },
        leftEyeColor: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fingersAndToeNails: {
            type: DataTypes.STRING,
            allowNull: true
        },
        eyeDescription: {
            type: DataTypes.STRING,
            allowNull: true
        },
        bodyHair: {
            type: DataTypes.STRING,
            allowNull: true
        },
        amputations: {
            type: DataTypes.STRING,
            allowNull: true
        },
        scarsAndMarks: {
            type: DataTypes.STRING,
            allowNull: true
        },
        prosthetics: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tattoos: {
            type: DataTypes.STRING,
            allowNull: true
        },
        foreignObjects: {
            type: DataTypes.STRING,
            allowNull: true
        },
        hairColor: {
            type: DataTypes.STRING,
            allowNull: true
        },
        headHair: {
            type: DataTypes.STRING,
            allowNull: true
        },
        rightEyeColor: {
            type: DataTypes.STRING,
            allowNull: true
        },
        deformities: {
            type: DataTypes.STRING,
            allowNull: true
        },
        caseManagerFirstName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        caseManagerLastName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        caseManagerPhone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        agencyZip: {
            type: DataTypes.STRING,
            allowNull: true
        },
        agencyLastName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        website: {
            type: DataTypes.STRING,
            allowNull: true
        },
        comments: {
            type: DataTypes.STRING,
            allowNull: true
        },
        agency: {
            type: DataTypes.STRING,
            allowNull: true
        },
        address2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        jurisdiction: {
            type: DataTypes.STRING,
            allowNull: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        agencyFirstName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        agencyCaseNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        dateReported: {
            type: DataTypes.STRING,
            allowNull: true
        },
        agencyState: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ageLastSeen: {
            type: DataTypes.STRING,
            allowNull: true
        },
        race: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ethnicity: {
            type: DataTypes.STRING,
            allowNull: true
        },
        sex: {
            type: DataTypes.STRING,
            allowNull: false
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dateEntered: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastSeen: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ageNow: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        middleName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

    });
    Person.associate = function (models) {
        models.Person.hasMany(models.Images, {
            onDelete: "cascade"
        });
    };
    Person.associate = function (models) {
        models.Person.hasMany(models.Sightings, {
            onDelete: "cascade"
        });
    };
    Person.associate = function (models) {
        models.Person.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Person;
};