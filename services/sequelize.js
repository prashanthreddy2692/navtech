const Sequelize = require('sequelize');

const UsersModel = require('./models/users');
const DesignationsModel = require('./models/designations');
const HolidaysModel = require('./models/holidays')

const sequelize = require('../config/config');

const Users = UsersModel(sequelize, Sequelize);
const Designations = DesignationsModel(sequelize, Sequelize);
const Holidays = HolidaysModel(sequelize, Sequelize);

sequelize.sync(
  { force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  Users,
  Designations,
  Holidays
}