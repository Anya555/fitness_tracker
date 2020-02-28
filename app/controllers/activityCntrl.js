const Activities = require("../models/activitiesModel");

const ActivityCntrl = {
    // This is called (when needed) from the route page when a 
    // listing of all activites is needed
    getAll(req, res) {

        Activities.find({}).then(data => {
            console.log(data);
            res.json(data);
        });
    },

    postActivity(req, res) {
        const workoutID = req.params.workoutId;
        Activities.create(req.body)
            .then(({ _id }) => Activities.findOneAndUpdate({ _id: workoutID }, { $push: { activites: _id } }, { new: true }))
            .then(resp => {
              console.log(resp);
                const newActivityId = resp.activites[resp.activities];
                res.json({ activityId: newActivityId });
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    }
}


module.exports = ActivityCntrl;