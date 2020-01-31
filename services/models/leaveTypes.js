
'use strict';

module.exports = (sequelize, DataTypes) => {
    var LeaveTypes = sequelize.define('leave_types', {

        leave_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        }

    }, {
        underscored: true,

    });

    return LeaveTypes;

};