const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodComboSchema = new Schema({
  name: String,
  des: String,
  price: Number,
});

const FoodCombo = mongoose.model("foodCombo", foodComboSchema);

module.exports = FoodCombo;