const mongoose = require("mongoose");

const bootcampSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  slug: String,
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("bootcamp", bootcampSchema);
