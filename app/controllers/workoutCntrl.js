const Workout = require("../models/workoutModel");

const WorkoutCntrl = {
    // This is called (when needed) from the route page when a 
    // listing of all workouts is needed
    getAll(req, res) {
        Workout.find({}).populate("activities").then(data => {
            console.log(data);
            res.json(data);
        });
    },

    // This is called when new workout needs to be added
    postWorkout(req, res) {
        Workout.create(req.body).then(resp => {
                res.json(resp);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    }

}




module.exports = WorkoutCntrl;