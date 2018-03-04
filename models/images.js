'use strict';
module.exports = (sequelize, DataTypes) => {
  var Images = sequelize.define('Images', {
    photo: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {});
  Images.associate = function (models) {
    models.Images.belongsTo(models.Person, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Images;
};

