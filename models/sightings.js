'use strict';
module.exports = (sequelize, DataTypes) => {
  var Sightings = sequelize.define('Sightings', {
    location: DataTypes.STRING
  });

  Sightings.associate = function (models) {
    models.Sightings.belongsTo(models.Person, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Sightings;
};

