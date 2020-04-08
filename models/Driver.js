const Sequelize = require("sequelize");
const db = require("../config/Database");

module.exports = db.define(
  "driver",
  {
    Id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: Sequelize.STRING,
    },
    Email: {
      type: Sequelize.STRING,
    },
    Status: {
      type: Sequelize.TINYINT,
    },
    License: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);
