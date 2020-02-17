
'use strict';
module.exports = (sequelize, DataTypes) => {
    var Users = sequelize.define('users', {

        name: {
            type: DataTypes.STRING(100),
            allowNull: true,
            //   unique: true,
            validate: {
                isAlphanumeric: true
            }
        },
        emailid: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        }

    }, {
        underscored: true,

    });

    /*     Users.associate = function (models) {
    
            Users.hasOne(models.designations, {
                foreignKey: 'designation_id',
                targetKey: 'id',
                as: 'designation',
    
            });
            
        };
     */
    return Users;

};