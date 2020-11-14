const bookingRouter = require("express").Router();
const Bookings = require("../models/bookingModel");
const { addBookings } = require("../utils/Booking");
// Bring in the User Registration function

bookingRouter.route("").get((req, res) => {
    Bookings.find((err, bookings) => {
    if (err) res.status(500).json(err);
    else res.json(bookings);
  });
});

bookingRouter.post("/add", async (req, res) => {
  await addBookings(req.body, res);
});

module.exports = bookingRouter;