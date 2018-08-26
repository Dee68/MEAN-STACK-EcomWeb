require("./config/config");
require("./models/dbcon");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
//
const crypto = require("crypto")
  .randomBytes(256)
  .toString("hex");
//
const app = express();
//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
//
app.use(express.static(__dirname + "/client/dist/"));
//
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/dist/client/index.html"));
});
//
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
