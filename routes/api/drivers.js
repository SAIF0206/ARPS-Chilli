const express = require("express");
const router = express.Router();
const db = require("../../config/Database");
const Driver = require("../../models/Driver");

// @route   GET api/drivers/display
//@desc     Tests driver routes
//@access   Public
router.get("/data", (req, res) =>
  Driver.findAll()
    .then((drivers) => {
      console.log(Driver);
      res.send(drivers).json;
    })
    .catch((err) => console.log("Error !!" + err))
);
module.exports = router;
