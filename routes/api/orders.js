const express = require("express");
const router = express.Router();
const db = require("../../config/Database");
const Order = require("../../models/Order");

// @route   GET /api/order/orderdata
//@desc     Display Data
//@access   Public
router.get("/orderdata", (req, res) =>
  Order.findAll()
    .then((order) => {
      console.log(Order);
      res.send(order).json;
    })
    .catch((err) => console.log("Error !!" + err))
);
module.exports = router;
