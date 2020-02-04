const Sequelize = require('sequelize');

const UsersModel = require('./models/users');
const DesignationsModel = require('./models/designations');
const HolidaysModel = require('./models/holidays');
const RolesModel = require('./models/roles');
const TeamsModel = require('./models/teams');
const LeaveTypesModel = require('./models/leaveTypes');
const TaskTypesModel = require('./models/taskTypes');
const TabsModel = require('./models/tabs');
const ClientsModel = require('./models/clients');
const ProjectsModel = require('./models/projects');
const AllStatusModel = require('./models/status');

const config = require('../config/config');

const Users = UsersModel(config, Sequelize);
const Designations = DesignationsModel(config, Sequelize);
const Holidays = HolidaysModel(config, Sequelize);
const Roles = RolesModel(config, Sequelize);
const Teams = TeamsModel(config, Sequelize);
const LeaveTypes = LeaveTypesModel(config, Sequelize);
const TaskTypes = TaskTypesModel(config, Sequelize);
const Tabs = TabsModel(config, Sequelize);
const Clients = ClientsModel(config, Sequelize);
const Projects = ProjectsModel(config, Sequelize);
const AllStatus = AllStatusModel(config, Sequelize);

config.sync(
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
  Tabs,
  Clients,
  Projects,
  AllStatus
}