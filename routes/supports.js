const supportRouter = require("express").Router();
const Support = require("../models/supportModel");

supportRouter.route("").get((req, res) => {
  Support.find((err, supports) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(supports);
    }
  });
});

module.exports = supportRouter;
