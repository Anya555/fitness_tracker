const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const dbconfig = require("./app/db/config");

const PORT = process.env.PORT || 7000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = require("./app/models");

app.use(express.static("./app/public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mongofitness", dbconfig.settings);


// Use express router to register routes as middleware

app.use('/api/activity', require('./app/routes/activity'));
app.use('/api/workout', require('./app/routes/workout'));
app.use('/api/exercise', require('./app/routes/exercise'));

// ======================================================================================================//

// every time nodemon reloads the page, exercise array will get created again, so it's commented out
// db.Exercise.create([{ name: "cardio" }, {name: "weights"}, {name: "squats"}, {name: "bench"}, {name: "situps"}])
//     .then(dbExercise => {
//         console.log(dbExercise);
//     })
//     .catch(({ message }) => {
//         console.log(message);
//     });

// =======================================================================================================//
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});