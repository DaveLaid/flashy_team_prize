// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for launching landing page; user is not signed in
  app.get("/", function(req, res) {
    db.Set.findAll({})
    .then(function(dbSet) {
      //results of findAll are available to use here in .then
      //console.log(hbsObject);
      res.render("index", dbSet);
    });
  });

}
