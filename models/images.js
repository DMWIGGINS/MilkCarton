'use strict';
module.exports = (sequelize, DataTypes) => {
  var Images = sequelize.define('Images', {
    caseNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {});
  Images.associate = function (models) {
    models.Images.belongsTo(models.Person, {
      foreignKey: 'caseNumber',
      allowNull: false
    });
  };
  return Images;
};