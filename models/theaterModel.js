const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const theaterSchema = new Schema({
  ticket2d: String,
  ticket3d: String,
  address: String,
  phone: String,
  addressMap: String,
});

const Theaters = mongoose.model("theater", theaterSchema);

module.exports = Theaters;
