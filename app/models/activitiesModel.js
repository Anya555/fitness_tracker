const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitiesSchema = new Schema ({
    activities: {
    weight: Number,
    sets: Number,
    reps: Number,
    Duration: Number,
    Distance: Number
    }
});

const Activities = mongoose.model("Activities", ActivitiesSchema);
module.exports = Activities;