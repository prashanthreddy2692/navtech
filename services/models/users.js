
'use strict';
module.exports = (sequelize, DataTypes) => {
    var Users = sequelize.define('users', {

        fname: {
            type: DataTypes.STRING(100),
            allowNull: true,
            //   unique: true,
            validate: {
                isAlphanumeric: true
            }
        },
        lname: {
            type: DataTypes.STRING(100),
            allowNull: true,
            //  unique: true,
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
        },
        emp_id: {
            type: DataTypes.STRING(20),
            allowNull: true,
            unique: true,
        },
        phone: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        skype: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        gender: {
            type: DataTypes.STRING(6),
            allowNull: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        zipcode: {
            type: DataTypes.STRING(10),
            allowNull: true
        },
        twitter: {
            type: DataTypes.STRING,
            allowNull: true
        },
        facebook: {
            type: DataTypes.STRING,
            allowNull: true
        },
        google_plus: {
            type: DataTypes.STRING,
            allowNull: true
        },
        github: {
            type: DataTypes.STRING,
            allowNull: true
        },
        linked_in: {
            type: DataTypes.STRING,
            allowNull: true
        },
        image: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        roleid: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        teamid: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        dob: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        join_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        marital_status: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        status: {
            type: DataTypes.INTEGER(1),
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