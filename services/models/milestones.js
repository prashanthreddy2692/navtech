
'use strict';

module.exports = (sequelize, DataTypes) => {
    var Milestones = sequelize.define('project_milestones', {

        project_id: {
            type: DataTypes.INTEGER(4),
            allowNull: false,
        },

        milestone: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        to_acheive: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        estimated_complete_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        actual_complete_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        status: {
            type: DataTypes.INTEGER(2),
            allowNull: false,
        }

    }, {
        underscored: true,

    });

    return Milestones;

};