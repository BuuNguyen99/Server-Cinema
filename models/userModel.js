const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userName: String,
    email: String,
    phone: String,
    gender: String,
    birth: String,
    password: String,
    address: String,
    currentStar: String,
    targets: Number,
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
