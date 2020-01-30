
'use strict';

module.exports = (sequelize, DataTypes) => {
    var Holidays = sequelize.define('holidays', {

        holiday_name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        added_by: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        is_active: {
            type: DataTypes.TINYINT(1),
            allowNull: false,
        }

    }, {
        underscored: true,

    });

    return Holidays;

};