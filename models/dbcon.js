const mongoose = require("mongoose");
//connect to mongodb
mongoose.connect(
  process.env.MongoDB_URI,
  { useNewUrlParser: true },
  err => {
    if (!err) {
      console.log("MongoDb connected successfully.");
    } else {
      console.log(
        "Error connecting to MongoDb: " + JSON.stringify(undefined, 2)
      );
    }
  }
);
//include user model
require("./user.model");
