const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('user_management','root','',{
    host: process.env.DB_HOST,
    dialect:'mysql'
});

module.exports = sequelize;