const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  content: {
    type: String,
  },
  vote: {
    rate: Number,
    numberOfReviews: Number,
  },
});

const Reviews = mongoose.model("reviewMovies", reviewsSchema);

module.exports = Reviews;
