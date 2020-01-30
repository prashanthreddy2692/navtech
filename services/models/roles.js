
'use strict';

module.exports = (sequelize, DataTypes) => {
    var Roles = sequelize.define('roles', {

        leave_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        }

    }, {
        underscored: true,

    });

    return Roles;

};