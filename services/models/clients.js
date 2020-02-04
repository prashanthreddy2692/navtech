
'use strict';

module.exports = (sequelize, DataTypes) => {
    var Clients = sequelize.define('clients', {

        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        contact_num_json: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        emailid_json: {
            type: DataTypes.TEXT,
            allowNull: false,
        }

    }, {
        underscored: true,

    });

    return Clients;

};