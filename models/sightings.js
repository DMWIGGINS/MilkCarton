'use strict';
module.exports = (sequelize, DataTypes) => {
  var Sightings = sequelize.define('Sightings', {
    caseNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: true
    },
    county: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  // Sightings.associate = function (models) {
  //   models.Sightings.belongsTo(models.Person, {
  //     foreignKey: 'caseNumber',
  //     allowNull: false

  //   });
  // };
  return Sightings;
};