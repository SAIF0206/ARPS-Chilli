const express = require("express");
const router = express.Router();
const db = require("../../config/Database");
const Order = require("../../models/Order");
const { Op } = require("sequelize");
// const Sequelize = require("sequelize");

// @route   GET /api/order/orderdata
//@desc     Display Data
//@access   Public
router.get("/orderdata", (req, res) =>
  Order.findAll({
    where: {
      FunctionDate: {
        [Op.between]: [
          req.body.FunctionDate + "T00:00:00.000Z",
          req.body.FunctionDate + "T23:59:59.000Z",
        ],
      },
    },
  })
    .then((order) => {
      res.send(order).json;
    })
    .catch((err) => console.log("Error !!" + err))
);

// @route   GET /aip / order / display;
//@desc     Display Data
//@access   Public
router.get("/display", (req, res) =>
  Order.findAll()
    .then((order) => {
      console.log(Order.FunctionDate);
      res.send(order).json;
    })
    .catch((err) => console.log("Error !!" + err))
);

module.exports = router;
