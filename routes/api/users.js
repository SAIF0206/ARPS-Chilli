const express = require("express");
const router = express.Router();
const db = require("../../config/Database");
const User = require("../../models/User"); //Model name is users
const brcypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

//@route    GET api/users/display
//@desc     Display users routes
//@access   Public
router.get("/display", (req, res) =>
  User.findAll()
    .then((users) => {
      console.log(User);
      res.send(users).json;
    })
    .catch((err) => console.log("ERROR !! " + err))
);

// //@route    GET api/users/register
// //@desc     Add a User
// //@access   Public

router.post("/register", (req, res) => {
  const data = {
    Name: req.body.Name,
    UserName: req.body.UserName,
    Password: req.body.Password,
  };

  User.findOne({
    where: {
      UserName: req.body.UserName,
    },
  })
    .then((user) => {
      if (!user) {
        brcypt.hash(req.body.Password, 10, (err, hash) => {
          data.Password = hash;
          User.create(data)
            .then((user) => {
              res.json({ status: user.UserName + " Registered" });
            })
            .catch((err) => {
              res.send("error" + err);
            });
        });
      } else {
        res.json({ error: "User already exists" });
      }
    })
    .catch((err) => {
      res.send("err: " + err);
    });
});

//@route    GET api/users/login
//@desc     Login User / Returing JWT Token
//@access   Public
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      UserName: req.body.UserName,
    },
  })
    .then((user) => {
      if (user) {
        if (brcypt.compareSync(req.body.Password, user.Password)) {
          //User is Matched

          //create JWT Payload
          const payload = {
            Name: user.Name,
            UserName: user.UserName,
          };

          //Sign up Token
          //For Login page protected routes
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 86400,
            },
            (err, token) => {
              res.json({
                Name: user.Name,
                UserName: user.UserName,
                success: true,
                token: "Bearer " + token,
              });
            }
          );
        } else {
          res.status(400).json({ error: "Password Incorrect" });
        }
      } else {
        res.status(400).json({ error: "UserName Not Found !!" });
      }
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
});

//@route    GET api/users/current
//@desc     Return Current User
//@access   Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({ msg: " Success" });
  }
);

module.exports = router;
