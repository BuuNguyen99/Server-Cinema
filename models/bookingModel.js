const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  idUser: String,
  idMovie: String,
  room: String,
  nameMovie: String,
  date: String,
  time: String,
  seats: [String],
  ticketPrice: Number,
  foodPrice: Number,
  tickCode: String,
});

const Bookings = mongoose.model("bookings", bookingSchema);

module.exports = Bookings;
