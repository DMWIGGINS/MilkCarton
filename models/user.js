'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    userID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
  }, {});
  // User.associate = function (models) {
  //   models.User.hasMany(models.Person, {});
  // };
  return User;
};