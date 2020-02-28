const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = new Schema ({
    exercise: {
        type: String
    },
    weight: {
        type: Number
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    },
    duration: {
        type: Number
    },
    distance: {
        type: Number
    }
});

const Activity = mongoose.model("Activity", ActivitySchema);
module.exports = Activity;