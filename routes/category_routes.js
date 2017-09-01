// Requiring our models
var db = require("../models");

// CATEGORY PAGE NEEDS:
	// GET SET
	// GET CATEGORY
	// GET USER

module.exports = function(app) {

  // Create all our routes and set up logic within those routes where required.
  app.get("/", function(req, res) {
    
    db.Set.findAll({
    }).then(function(data) {
      // var flashObj = {data: data};
      // console.log(data);
      res.render("index", data);
      // res.sendFile(path.join(__dirname, "../views/index"));
    });
  });

  app.get("/", function(req, res) {
    
    db.Category.findAll({
    }).then(function(data) {
      res.render("index", data);
    });
  });

  app.get("/", function(req, res) {
    
    db.User.findOne({
      name: req.body.name,
      email: req.body.email
    }).then(function(data) {
      res.render("index", data);
    });
  });


};
