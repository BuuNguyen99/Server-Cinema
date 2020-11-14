const Reviews = require("../models/reviewModel");

const changeRating = async (req, res) => {
  if (!req.body._id) {
    return res.status(500).send("ID is required");
  } else {
    Reviews.updateOne(
      {
        _id: req.body._id,
      },
      {
        title: req.body.title,
        image: req.body.image,
        content: req.body.content,
        vote: {
          rate: req.body.vote.rate,
          numberOfReviews: req.body.vote.numberOfReviews,
        },
      },
      function (err) {
        if (err) return res.status(500).json(err);
        else {
          Reviews.find((err, reviews) => {
            if (err) {
              res.status(500).json(err);
            } else {
              res.json(reviews);
            }
          });
        }
      }
    );
  }
};

module.exports = changeRating;
