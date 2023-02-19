require("../config/database");
const mongoose = require("mongoose");

const Upload = mongoose.Schema({
  compName: String,
  type: String,
  platform: String,
  category: String,
  image: String,
  upload_date: Date,
  typeset : { type : String, default : null }
});
module.exports = mongoose.model("upload", Upload);
