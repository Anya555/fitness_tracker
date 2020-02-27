const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
        type: String,
        date: Number
    },
    activities: [
        {
            type: Schema.Types.ObjectId,
            ref: "Activities"
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;