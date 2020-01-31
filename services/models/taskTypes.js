
'use strict';

module.exports = (sequelize, DataTypes) => {
    var TaskTypes = sequelize.define('task_types', {

        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        }

    }, {
        underscored: true,

    });

    return TaskTypes;

};