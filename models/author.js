const mongoose = require("mongoose");

const costumeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  expertise: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    min: [0, "Age must be at least 0"],
    max: [150, "Age must be at most 150"]
  }
});

module.exports = mongoose.model("author", costumeSchema);
