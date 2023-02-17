const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection.js");

const Board = sequelize.define(Board,{
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.INTERGER
});

moduel,exports = Board;