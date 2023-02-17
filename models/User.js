const { DataTypes } = require("sequelize");
const sequelize = require("./connection.js");

const User = sequelize.define(User,{
    name: DataTypes.STRING,
    email: DataTypes.STRING
});

moduel.exports = User;
