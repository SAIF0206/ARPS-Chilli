const express = require("express");
const router = express.Router();
const db = require("../../config/Database");
const Order = require("../../models/Order");
const { Op } = require("sequelize");
const axios = require("axios");

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
      //Algorithm To calculate Volume
      //If Volume is not NUll it goes inside
      if (Order.Volume != null) {
        res.send(order).json;
      } else {
        Order.update(
          {
            Volume: 80,
          },
          {
            where: {
              MenuPax: {
                [Op.between]: [1, 30],
              },
            },
          }
        );
        Order.update(
          {
            Volume: 140,
          },
          {
            where: {
              MenuPax: {
                [Op.between]: [31, 60],
              },
            },
          }
        );
        Order.update(
          {
            Volume: 220,
          },
          {
            where: {
              MenuPax: {
                [Op.between]: [61, 90],
              },
            },
          }
        );
        Order.update(
          {
            Volume: 280,
          },
          {
            where: {
              MenuPax: {
                [Op.between]: [91, 120],
              },
            },
          }
        );
        Order.update(
          {
            Volume: 350,
          },
          {
            where: {
              MenuPax: {
                [Op.between]: [120, 200],
              },
            },
          }
        );

        //Here to get all data.
        res.send(order).json;
      }
    })
    .catch((err) => console.log("Error !!" + err))
);

// @route   GET /api/order/workwave
//@desc     Display Data
//@access   Public
router.get("/workwave", (req, res) => {
  axios
    .get(
      "https://wwrm.workwave.com/api/v1/territories/922b603c-c822-4469-89a7-e9bacab8abfb/orders?include=all",
      {
        headers: {
          Accept: "application/json",
          "X-WorkWave-Key": "655be892-096b-48d4-9cd0-86cfba1ce55a",
        },
      }
    )
    .then((data) => {
      res.send(data.data.orders);
    })
    .catch((err) => {
      console.log("Errors" + err);
    });
});

module.exports = router;
