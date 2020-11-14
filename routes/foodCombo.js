const foodComboRouter = require("express").Router();
const foodCombo = require("../models/foodComboModel");

foodComboRouter.route("").get((req, res) => {
  foodCombo.find((err, foodCombo) => {
    if (err) res.status(500).json(err);
    else res.json(foodCombo);
  });
});

module.exports = foodComboRouter;
