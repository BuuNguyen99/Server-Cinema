const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const promotionSchema = new Schema({
  links: String,
  title: String,
  image: String,
  imagePro: String,
  content: [
    {
      type: String,
    },
  ],
});

const Promotions = mongoose.model("promotion", promotionSchema);

module.exports = Promotions;
