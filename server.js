const express = require("express");
const users = require("./routes/api/users");
const drivers = require("./routes/api/drivers");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
const orders = require("./routes/api/orders");
const cors = require("cors");

//Database
const db = require("./config/Database");

//Test DB
db.authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error: " + err));

//Body Parser middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Passport middleware
app.use(passport.initialize());

//Passport Config
require("./config/passport")(passport);

//Use Routes
app.use("/api/users", users);
app.use("/api/drivers", drivers);
app.use("/api/order", orders);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on the port ${port}`));
