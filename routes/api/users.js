const express = require("express");
const router = express.Router();
const db = require("../../config/Database");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");

// @route GET api/users/
//@desc     Tests users routes
//@access   Public
router.get("/test", (req, res) =>
  User.findAll()
    .then(users => {
      console.log(users);
      res.send(users).json;
    })
    .catch(err => console.log("ERROR !! " + err))
);

module.exports = router;
