const sequelize = require('../config/db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('User',{
    id:{type:DataTypes.INTEGER,allowNull:false,autoIncrement:true,primaryKey:true},
    name:{type:DataTypes.STRING,allowNull:false,},
    address:{type:DataTypes.STRING,allowNull:false},
    email:{type:DataTypes.STRING,allowNull:false,unique:true}
},{timestamps:true});

module.exports = User;
