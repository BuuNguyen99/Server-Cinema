const theaterRouter = require("express").Router();
const Theaters = require("../models/theaterModel");

theaterRouter.route("").get((req, res) => {
  Theaters.find((err, theaters) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(theaters);
    }
  });
});

module.exports = theaterRouter;
