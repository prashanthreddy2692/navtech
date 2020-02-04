'use strict';
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, `.env.${process.env.NODE_ENV}`) });
const express = require('express');
const cors = require('cors');

const service = '/ts_services/v1.0';

const userRouter = require('./services/routes/users.router');
const designationRouter = require('./services/routes/designations.router');
const holidayRouter = require('./services/routes/holidays.router');
const roleRouter = require('./services/routes/roles.router');
const teamRouter = require('./services/routes/teams.router');
const leaveTypesRouter = require('./services/routes/leavetypes.router');
const taskTypesRouter = require('./services/routes/tasktypes.router');
const tabRouter = require('./services/routes/tabs.router');
const clientRouter = require('./services/routes/clients.router');
const projectRouter = require('./services/routes/projects.router');
const statusRouter = require('./services/routes/status.router');

const server = express();
const { Users } = require('./services/sequelize');
var app = require('http').Server(server)

var originsWhitelist = [
  'http://10.40.230.165:4200', //this is my front-end url for development
  'http://devdms.sparity.com',
  'https://devdms.sparity.com',
  'http://localhost:4200',
];
var corsOptions = {
  origin: function (origin, callback) {
    var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
    callback(null, isWhitelisted);
  },
  credentials: true
}
var moment = require('moment');
var now = moment();
//here is the magic
server.use(cors(corsOptions));

// PORT Number configured in .env
const PORT = process.env.SERVER_PORT_NUMBER;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(service, userRouter);
server.use(service, designationRouter);
server.use(service, holidayRouter);
server.use(service, holidayRouter);
server.use(service, roleRouter);
server.use(service, teamRouter);
server.use(service, leaveTypesRouter);
server.use(service, taskTypesRouter);
server.use(service, taskTypesRouter);
server.use(service, tabRouter);
server.use(service, clientRouter);
server.use(service, projectRouter);
server.use(service, statusRouter);

app.listen(PORT, () => console.log(`server started with ${PORT} port number`));


