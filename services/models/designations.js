
'use strict';

module.exports = (sequelize, DataTypes) => {
    var Designations = sequelize.define('designations', {

        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
            validate: {
                isAlphanumeric: true
            }
        }
        
    }, {
        underscored: true,

    });

    return Designations;

};