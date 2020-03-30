const express = require("express");
const users = require("./routes/api/users");
const drivers = require("./routes/api/drivers");
const bodyParser = require("body-parser");
const app = express();

//Database
const db = require("./config/Database");

//Test DB
db.authenticate()
  .then(() => console.log("Database connected"))
  .catch(err => console.log("Error: " + err));

//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/test", (req, res) => res.send("Hello Sequelize"));

//Use Routes
app.use("/api/users", users);
app.use("/api/drivers", drivers);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on the port ${port}`));
