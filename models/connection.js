const mysql = require('mysql2/promise');
require('dotenv').config()
console.log(process.env.USERNAME)
const connection = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: 'mvc_example'});

module.exports = connection;