'use strict';

const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.MYSQL_DATA_NAME, process.env.MYSQL_USER_NAME, process.env.MYSQL_DATA_PASSWORD, {
  host: process.env.MYSQL_HOST_URL,
  dialect: 'mysql',
  dialectOptions: {
    //for reading from database
    dateStrings: true,
    typeCast: true,
  },
  timezone: '+05:30', // for writing to database
  pool: {
    max: 10,
    min: 0,
    acquire: 40000,
    idle: 20000,
    evict: 20000
  },
  logging: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })


module.exports = sequelize