const express = require("express");
const router = express.Router();
const db = require("../../config/Database");
const Order = require("../../models/Order");
const { Op } = require("sequelize");

// @route   GET /api/order/date
//@desc     Display Data
//@access   Public
router.get("/date", (req, res) =>
  Order.findAll({
    // Algorithm to display data according to date
    where: {
      FunctionDate: {
        [Op.between]: [
          req.body.FunctionDate + "T00:00:00.000Z",
          req.body.FunctionDate + "T23:59:59.000Z",
        ],
      },
    },
    update: {
      Volume: 0,
    },
  })
    .then((order) => {
      res.send(order).json;
    })
    .catch((err) => console.log("Error !!" + err))
);

// @route   GET /api/order/orderdata
//@desc     Display Data
//@access   Public
router.get("/orderdata", (req, res) =>
  Order.findAll()
    .then((order) => {
      res.send(order).json;
    })
    .catch((err) => console.log("Error !!" + err))
);

module.exports = router;
