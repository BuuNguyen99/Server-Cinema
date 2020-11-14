const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: String,
  slug: String,
  intro: String,
  type: String,
  author: String,
  actor: String,
  time: String,
  nation: String,
  premiereDate: String,
  price: String,
  image: String,
  imageInfo: String,
  video: String,
  vote: {
    rate: Number,
    numberOfReviews: Number,
  },
  date: [
    {
      dateMovie: String,
      frameTime: [
        {
          room: String,
          time: String,
        },
      ],
    },
  ],
});

const Movies = mongoose.model("movies", movieSchema);

module.exports = Movies;
