const Activity = require("../models/activityModel");
const Workout = require("../models/workoutModel");

const ActivityCntrl = {
    // This is called (when needed) from the route page when a 
    // listing of all activites is needed
    getAll(req, res) {

        Activity.find({}).then(data => {
            console.log(data);
            res.json(data);
        });
    },

    // adding activities to a specified workout
    postActivity(req, res) {
        const workoutID = req.query.workoutId;
        console.log(workoutID)
        Activity.create(req.body)
            .then(({ _id }) => Workout.findOneAndUpdate({ _id: workoutID }, { $push: { activities: _id } }, { new: true }))
            .then(resp => {
              console.log(resp);
    // I need to return the _id of the latest added workout, so I get it from the last item in the workout array
                const newActivityId = resp.activites[resp.activities.length-1]._id;
                res.json({ activityId: newActivityId });
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    }
}


module.exports = ActivityCntrl;