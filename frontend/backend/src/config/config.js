require('dotenv').config();
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
};
/**
 * 
 * in nestjs unlike expressjs we cannot dierctly get env vars and it is also not a good practive so we usee config file where we import from env
 */