const Workout = require("../models/workoutModel");

const WorkoutCntrl = {
    // This is called (when needed) from the route page when a 
    // listing of allworkouts is needed
    getAll(req, res){
     
      Workout.find({}).then(data => {
        console.log(data);
        res.json(data);
      });
    },

    postWorkout(req, res){
        Workout.create(req.body)
        .then(({ _id }) => Workout.findOneAndUpdate({ $push: { workoutId: _id } }, { new: true }))
    .then(resp => {
      res.json(resp);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
      }

  }

 
 
  
  module.exports = WorkoutCntrl;