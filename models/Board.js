const { DataTypes } = require("sequelize");
const sequelize = require("./connection.js");

const Board = sequelize.define(Board,{
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.INTERGER
});

moduel.exports = Board;