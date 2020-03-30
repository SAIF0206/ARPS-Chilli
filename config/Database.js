const Sequelize = require("sequelize");

//DB with sequelize
module.exports = new Sequelize("ChilliARPS", "chillipadi", "trEg45Vz", {
  host: "192.168.1.25",
  dialect: "mssql"
});
