const movieRouter = require("express").Router();
const Movie = require("../models/movieModel");
// Bring in the User Registration function
const {
  addMovie,
  changeRatingMovie,
  updateMovie,
  deleteMovie,
} = require("../utils/MovieData");

movieRouter.route("").get((req, res) => {
  Movie.find((err, movies) => {
    if (err) res.status(500).json(err);
    else res.json(movies);
  });
});

movieRouter.post("/add", async (req, res) => {
  await addMovie(req.body, res);
});

movieRouter.put("/:id", async (req, res) => {
  await updateMovie(req, res);
});

movieRouter.delete("/:id", async (req, res) => {
  await deleteMovie(req, res);
});

movieRouter.put("/:id", async (req, res) => {
  await changeRatingMovie(req, res);
});

module.exports = movieRouter;
