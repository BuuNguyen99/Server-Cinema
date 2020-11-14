const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const supportSchema = new Schema({
  title: String,
  content: [
    {
      type: String,
    },
  ],
});

const Supports = mongoose.model("supports", supportSchema);

module.exports = Supports;
