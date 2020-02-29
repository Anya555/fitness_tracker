const express = require('express');
const router = express.Router();

const ActivityCntrl = require('../controllers/activityCntrl');

// GET  "/""
// Calls controller which will return all activities for a specific workout
router.get("/", ActivityCntrl.getAll);

// POST  "/""
// Calls controller which will add all activities to a specific workout
router.post("/", ActivityCntrl.postActivity);




module.exports = router;