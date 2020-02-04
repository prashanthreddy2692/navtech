
'use strict';

module.exports = (sequelize, DataTypes) => {
    var Projects = sequelize.define('projects', {

        project_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
            validate: {
                isAlphanumeric: true
            }
        },
        estimate_start_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        estimate_end_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        actual_start_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        actual_end_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        project_owner: {
            type: DataTypes.INTEGER(4),
            allowNull: false
        },
        client_id: {
            type: DataTypes.INTEGER(4),
            allowNull: false
        },
        status: {
            type: DataTypes.INTEGER(2),
            allowNull: false
        },
        bugtracker: {
            type: DataTypes.INTEGER(2),
            allowNull: false
        },
        devtracker: {
            type: DataTypes.INTEGER(2),
            allowNull: false
        },
        created_by: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        project_code: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        }

    }, {
        underscored: true,

    });

    return Projects;

};