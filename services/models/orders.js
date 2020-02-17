
'use strict';

module.exports = (sequelize, DataTypes) => {

    var Orders = sequelize.define('orders', {

        order_no: {
            type: DataTypes.BIGINT(20),
            allowNull: false,
        },
        due_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        customer: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        phone: {
            type: DataTypes.BIGINT(10),
            allowNull: false,
        },
        order_total: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        }

    }, {
        underscored: true,
        timestamps: false

    });

    return Orders;

};