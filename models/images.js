'use strict';
module.exports = (sequelize, DataTypes) => {
    var Images = sequelize.define('Images', {
        photo: DataTypes.STRING
    });

    Images.associate = function (models) {
        models.Images.belongsTo(models.Person, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Images;
};