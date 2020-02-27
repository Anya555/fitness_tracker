const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    trim: true
  },
  name: {
    type: String,
    trim: true,
    required: "Enter an exercise name"
  }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);
module.exports = Exercise;
