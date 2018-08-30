const mongoose = require("mongoose");
const gravatar = require("gravatar");
const User = mongoose.model("User");
module.exports.register = (req, res) => {
  const avatar = gravatar.url(req.body.email, {
    s: "200", //size
    r: "pg", //rating
    d: "mm" //default
  });
  let user = new User({
    username: req.body.username.toLowerCase(),
    email: req.body.email.toLowerCase(),
    password: req.body.password,
    avatar: avatar
  });
  user.save(err => {
    if (err) {
      if (err.code === 11000) {
        res.json({
          success: false,
          message: "Username or email already exists."
        });
      } else {
        if (err.errors) {
          if (err.errors.username) {
            res.json({ success: false, message: err.errors.username.message });
          } else {
            if (err.errors.email) {
              res.json({ success: false, message: err.errors.email.message });
            } else {
              if (err.errors.password) {
                res.json({
                  success: false,
                  message: err.errors.password.message
                });
              } else {
                res.json({ success: false, message: err });
              }
            }
          }
        } else {
          res.json({
            success: false,
            message: "Could not create account. Error: " + err
          });
        }
      }
    } else {
      res.json({ success: true, message: "Account created." });
    }
  });
};
