'use strict';
module.exports = (sequelize, DataTypes) => {
  var Saved = sequelize.define('Saved', {
    caseNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    userID: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  Saved.associate = function (models) {
    models.Saved.belongsTo(models.Person, {
      foreignKey: 'caseNumber',
      allowNull: false
    });
  };
  return Saved;
};