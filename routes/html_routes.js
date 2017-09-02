// *********************************************************************************
// html_routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index"));
  });

  app.get("/account", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/account"));
  });

  app.get("/category", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/category"));
  });

  app.get("/flashcard", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/flashcard"));
  });

  app.get("/signin", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/signin"));
  });

  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/user"));
  });


};
