const Sequelize = require('sequelize');

const UsersModel = require('./models/users');
const DesignationsModel = require('./models/designations');
const HolidaysModel = require('./models/holidays');
const RolesModel = require('./models/roles');
const TeamsModel = require('./models/teams');
const LeaveTypesModel = require('./models/leaveTypes');
const TaskTypesModel = require('./models/taskTypes');
const TabsModel = require('./models/tabs');

const sequelize = require('../config/config');

const Users = UsersModel(sequelize, Sequelize);
const Designations = DesignationsModel(sequelize, Sequelize);
const Holidays = HolidaysModel(sequelize, Sequelize);
const Roles = RolesModel(sequelize, Sequelize);
const Teams = TeamsModel(sequelize, Sequelize);
const LeaveTypes = LeaveTypesModel(sequelize, Sequelize);
const TaskTypes = TaskTypesModel(sequelize, Sequelize);
const Tabs = TabsModel(sequelize, Sequelize);

sequelize.sync(
  { force: false })
  .then(() => {
    console.log(`Database & tables created!`);
  })

module.exports = {
  Users,
  Designations,
  Holidays,
  Roles,
  Teams,
  LeaveTypes,
  TaskTypes,
  Tabs
}