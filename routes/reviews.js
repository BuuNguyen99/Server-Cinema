const reviewRouter = require("express").Router();
const Reviews = require("../models/reviewModel");
const changeRating = require("../utils/Review");

reviewRouter.route("").get((req, res) => {
  Reviews.find((err, reviews) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(reviews);
    }
  });
});

reviewRouter.put("/:id", async (req, res) => {
  await changeRating(req, res);
});

module.exports = reviewRouter;
