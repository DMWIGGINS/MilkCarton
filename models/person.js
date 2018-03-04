'use strict';
module.exports = function (sequelize, DataTypes) {
    var Person = sequelize.define("Person", {
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        sex: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ageLastSeen: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ageNow: {
            type: DataTypes.STRING,
            allowNull: true
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        weight: {
            type: DataTypes.INTEGER,
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
        nickname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        dateEntered: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastSeen: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true
        },
        middleName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        caseNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
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
    return Person;
};


