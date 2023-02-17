const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection.js");

const Cheese = sequelize.define(Cheese,{
    title: DataTypes.STRING,
    description: DataTypes.STRING
});

moduel,exports = Cheese;