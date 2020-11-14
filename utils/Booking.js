const Bookings = require("../models/bookingModel");

const addBookings = async (dataBookings, res) => {
  console.log(dataBookings);
  const newBooking = new Bookings({
    ...dataBookings,
  });

  await newBooking.save();
  return res.json(newBooking);
};

module.exports = { addBookings };
