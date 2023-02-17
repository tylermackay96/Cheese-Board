const { User, Cheese, Board } = require("./models");
const sequelize = require("./connection.js");

User.hasMany(Board);
Board.belongsTo(User);


Cheese.belongsToMany(Board,{through: "Cheese_Board"});
Board.belongsToMany(Cheese,{through:"Cheese_Board"});
