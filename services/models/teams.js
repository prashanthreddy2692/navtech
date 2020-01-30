
'use strict';

module.exports = (sequelize, DataTypes) => {
    var Teams = sequelize.define('teams', {

        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        }

    }, {
        underscored: true,

    });

    return Teams;

};