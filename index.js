'use strict';
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, `.env.${process.env.NODE_ENV}`) });
const express = require('express');
const cors = require('cors');

const service = '/nav_services/v1.0';

const userRouter = require('./services/routes/users.router');
const orderRouter = require('./services/routes/orders.router');

const server = express();
const { Users } = require('./services/sequelize');
var app = require('http').Server(server)

var originsWhitelist = [
  'http://10.40.230.165:4200', //this is my front-end url for development
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
server.use(service, orderRouter);

app.listen(PORT, () => console.log(`server started with ${PORT} port number`));


