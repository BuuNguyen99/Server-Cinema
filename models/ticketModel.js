const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  name: String,
  des: String,
  price: Number,
});

const Tickets = mongoose.model("tickets", ticketSchema);

module.exports = Tickets;
