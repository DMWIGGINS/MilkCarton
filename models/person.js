'use strict';
module.exports = function (sequelize, DataTypes) {
    var Person = sequelize.define("Person", {
        caseNumber: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        circumstances: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        piercings: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        otherCharacteristics: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        facialHair: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        skeletalInformation: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        leftEyeColor: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fingersAndToeNails: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        eyeDescription: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        bodyHair: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        amputations: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        scarsAndMarks: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        prosthetics: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        tattoos: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        foreignObjects: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        hairColor: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        headHair: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        rightEyeColor: {
            type: DataTypes.STRING,
            allowNull: true
        },
        deformities: {
            type: DataTypes.TEXT,
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
            type: DataTypes.TEXT,
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
            allowNull: true,
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
            allowNull: true
        },
        weight: {
            type: DataTypes.STRING,
            allowNull: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: true,
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
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    Person.associate = function (models) {
        models.Person.hasMany(models.Images, {
            foreignKey: "caseNumber",
            onDelete: "cascade"
        });
        models.Person.hasMany(models.Sightings, {
            foreignKey: "caseNumber",
            onDelete: "cascade"
        });
        models.Person.hasMany(models.Saved, {
            foreignKey: "caseNumber",
            onDelete: "cascade"
        });
    };
    return Person;
};