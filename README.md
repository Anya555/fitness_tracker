# fitness_tracker

Fitness tracker is an application that tracks daily workout activities. The app consist of these three core elements:

*Workouts, each of which has a name and date associated with it; as well as an unlimited amount of Activities.

*Activities: these are the parts of each workout. Each activity consists of an Exerciseand then info about Duration, Weight, Sets, Reps, and Distance.


TECHNOLOGIES USED:

  * Node
  * MongoDB
  * Mongoose
  * Express & Express Router
  * jQuery and Bootstrap
  * Moment.js

Most of the client-side functionallity has been provided, so I wrote an app back-end and added some styling to UI.

First I built models using Mongoose: Exersice Model, that I seeded in order to give a user a list of exercises to choose from; Workout and Activity Models that get populated with data dynamically from user input. Than I set up the routes that are being called by controllers to recieve and send back data that gets rendered by jQuery in a DOM.

App Flow:

Users are promoted to enter a new workout name. After clicking an 'add' button they are prompted to select from a list of exercises and add activities. Once another 'add' button is cliked a new exercise is being displayed on top of the form with a list of added activities. Users can access their workout with all information about it after reloading a page just by cliking on a workout name. Here is a demo gif of working app:

![fitnessTracker](./app/assets/images/fitnessTracker.gif)
















