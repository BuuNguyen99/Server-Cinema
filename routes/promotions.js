const promotionRouter = require("express").Router();
const Promotions = require("../models/promotionModel");

promotionRouter.route("").get((req, res) => {
  Promotions.find((err, promotions) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(promotions);
    }
  });
});

module.exports = promotionRouter;
