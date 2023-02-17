const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection.js");

const User = sequelize.define(User,{
    name: DataTypes.STRING,
    email: DataTypes.STRING
});

moduel,exports = User;
