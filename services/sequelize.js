const Sequelize = require('sequelize');
const UsersModel = require('./models/users');

const sequelize = require('../config/config');

const Users = UsersModel(sequelize, Sequelize);

sequelize.sync(
  { force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  Users
}