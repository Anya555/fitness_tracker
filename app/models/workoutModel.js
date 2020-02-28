const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
        type: String
    },
    
    day: {
        type: String
    },
    activities: [
        {
            type: Schema.Types.ObjectId,
            ref: "Activity"
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;