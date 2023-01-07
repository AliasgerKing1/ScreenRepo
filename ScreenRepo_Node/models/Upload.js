require("../config/database");
const mongoose = require("mongoose");

const Upload = mongoose.Schema({
  comp_name: String,
  type: String,
  platform: String,
  category: String,
});
module.exports = mongoose.model("upload", Upload);
