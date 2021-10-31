const mysql = require('mysql2/promise');
require('dotenv').config()

const connection = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: 'mvc_example'});

module.exports = connection;
