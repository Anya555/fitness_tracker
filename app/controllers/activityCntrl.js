const Activity = require("../models/activitiesModel");

const ActivityCntrl = {
    // This is called (when needed) from the route page when a 
    // listing of all activites is needed
    getAll(req, res){
     
      Activities.find({}).then(data => {
        console.log(data);
        res.json(data);
      });
    }
  }
  
  
  module.exports = ActivityCntrl;