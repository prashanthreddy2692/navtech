
'use strict';

module.exports = (sequelize, DataTypes) => {
    var Tabs = sequelize.define('tabs', {

        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        ui_sref: {
            type: DataTypes.STRING(100),
            allowNull: false,
        }

    }, {
        underscored: true,

    });

    return Tabs;

};