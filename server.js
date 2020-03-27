const express = require("express");
const mssql = require("mssql");
const users = require("./routes/api/users");
const drivers = require("./routes/api/drivers");

const app = express();

// DB Config
const db = require("./config/keys").sqlURI;
mssql
  .connect(db)
  .then(() => console.log(`SQL CONNECTED ${db}`))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello SQL"));

//Use Routes
app.use("/api/users", users);
app.use("/api/drivers", drivers);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on the port ${port}`));
