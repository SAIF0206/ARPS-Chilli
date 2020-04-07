const Sequelize = require("sequelize");
const db = {};

//DB with sequelize
module.exports = new Sequelize("ChilliARPS", "chillipadi", "trEg45Vz", {
  host: "192.168.1.25",
  dialect: "mssql",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  secretOrKey: "secret",
});
