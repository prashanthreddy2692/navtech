const Sequelize = require('sequelize');

const UsersModel = require('./models/users');
const OrdersModel = require('./models/orders');

const config = require('../config/config');

const Users = UsersModel(config, Sequelize);
const Orders = OrdersModel(config, Sequelize);

config.sync(
  { force: false })
  .then(() => {
    console.log(`Database & tables created!`);
  })

module.exports = {
  Users,
  Orders
}