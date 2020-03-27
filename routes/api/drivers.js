const express = require("express");
const router = express.Router();

// @route   GET api/drivers/test
//@desc     Tests driver routes
//@access   Public
router.get("/test", (req, res) => res.json({ msg: "Drivers works" }));

module.exports = router;
