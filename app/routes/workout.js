const express = require('express');
const router = express.Router();

const WorkoutCntrl = require('../controllers/workoutCntrl');

// GET  "/""
// Calls controller which will return all activities for a specific workout
router.get("/", WorkoutCntrl.getAll);

// POST  "/""
// Calls controller which will add add a new  workout
router.post("/", WorkoutCntrl.postWorkout);


module.exports = router;