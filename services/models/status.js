
'use strict';

module.exports = (sequelize, DataTypes) => {
    var AllStatus = sequelize.define('status', {

        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        }

    }, {
        underscored: true,

    });

    return AllStatus;

};