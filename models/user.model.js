const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
/*============ custom validators ======================*/
let emailLengthCheck = email => {
  if (!email) {
    return false;
  } else {
    if (email.length < 5 || email.length > 30) {
      return false;
    } else {
      return true;
    }
  }
};
let validEmailCheck = email => {
  if (!email) {
    return false;
  } else {
    const regExp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return regExp.test(email);
  }
};
const emailValidators = [
  {
    validator: emailLengthCheck,
    message: "E-mail must be between 5 and 30 characters."
  },
  {
    validator: validEmailCheck,
    message: "E-mail address is not valid."
  }
];
let usernamelenthCheck = username => {
  if (!username) {
    return false;
  } else {
    if (username.length < 3 || username.length > 15) {
      return false;
    } else {
      return true;
    }
  }
};
let validUsername = username => {
  if (!username) {
    return false;
  } else {
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    return regExp.test(username);
  }
};
const usernameValidators = [
  {
    validator: usernamelenthCheck,
    message: "Username must be between 3 and 15 chracters long."
  },
  {
    validator: validUsername,
    message: "Username must not contain special characters."
  }
];
let passwordLengthCheck = password => {
  if (!password) {
    return false;
  } else {
    if (password.length < 6 || password.length > 15) {
      return false;
    } else {
      return true;
    }
  }
};
const passwordValidators = [
  {
    validator: passwordLengthCheck,
    message: "Password must not be less than 6 characters or more than 15."
  }
];
//user schema
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    validate: usernameValidators
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    validate: emailValidators
  },
  password: {
    type: String,
    required: true,
    lowercase: true,
    validate: passwordValidators
  },
  avatar: { type: String },
  saltSecret: { type: String },
  create_at: { type: Date, default: Date.now }
});
//Event(before saving to db)
userSchema.pre("save", function(next) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(this.password, salt, (err, hash) => {
      this.password = hash;
      this.saltSecret = salt;
      next();
    });
  });
});
//compare passwords for login
userSchema.methods.comparePasswords = password => {
  return bcrypt.compareSync(password, this.password);
};
mongoose.model("User", userSchema);
