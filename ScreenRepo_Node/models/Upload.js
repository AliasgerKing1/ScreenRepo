require("../config/database");
const mongoose = require("mongoose");

const Upload = mongoose.Schema({
  compName: String,
  pettern: String,
  platform: String,
  category: String,
  screen_shot: String,
  upload_date: Date,
  typeset :String,
  element : {
    type : String,
    default :null
  }
});
module.exports = mongoose.model("upload", Upload);
