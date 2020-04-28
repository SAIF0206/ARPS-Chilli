const express = require("express");
const router = express.Router();
const db = require("../../config/Database");
const Driver = require("../../models/Driver");
const axios = require("axios");

// @route   GET api/drivers/data
//@desc     Display drivers
//@access   Public
//Make a lot of changes in driver's Data.
router.get("/data", (req, res) =>
  Driver.findAll()
    .then((drivers) => {
      console.log(Driver);
      res.send(drivers).json;
    })
    .catch((err) => console.log("Error !!" + err))
);

// @route   GET api/drivers/workwavw
//@desc     Display drivers
//@access   Public
//Make a lot of changes in driver's Data.
router.get("/workwave", (req, res) => {
  axios
    .get(
      "https://wwrm.workwave.com/api/v1/territories/922b603c-c822-4469-89a7-e9bacab8abfb/drivers",
      {
        headers: {
          Accept: "application/json",
          "X-WorkWave-Key": "655be892-096b-48d4-9cd0-86cfba1ce55a",
        },
      }
    )
    .then((data) => {
      res.send(data.data.drivers);
    })
    .catch((err) => {
      console.log("Errors" + err);
    });
});

// // @route   GET api/drivers/add
// //@desc     Add drivers
// //@access   Public
// //Make a lot of changes in driver's Data.
// router.post("/add", (req, res) => {
//   axios
//     .post(
//       "https://wwrm.workwave.com/api/v1/territories/922b603c-c822-4469-89a7-e9bacab8abfb/drivers",
//       {
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           "X-WorkWave-Key": "655be892-096b-48d4-9cd0-86cfba1ce55a",
//         },
//         Body: JSON.stringify({
//           name: "Saif",
//           email: "Saif@chilliapi.com.sg",
//           password: "chilliapi",
//           gpsDeviceId: null,
//         }),
//       }
//     )
//     .then((data) => {
//       res.send(data.data.requestId);
//     })
//     .catch((err) => {
//       console.log("Errors" + err);
//     });
// });
module.exports = router;
