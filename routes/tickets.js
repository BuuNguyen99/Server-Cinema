const ticketRouter = require("express").Router();
const Tickets = require("../models/ticketModel");

ticketRouter.route("").get((req, res) => {
  Tickets.find((err, tickets) => {
    if (err) res.status(500).json(err);
    else res.json(tickets);
  });
});

module.exports = ticketRouter;
