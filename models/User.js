const Sequelize = require("sequelize");
const db = require("../config/Database");

const User = db.define(
  "users",
  {
    Name: {
      type: Sequelize.STRING
    },
    UserName: {
      type: Sequelize.STRING
    },
    Password: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);

module.exports = User;
