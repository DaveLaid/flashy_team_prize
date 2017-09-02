// Requiring our models
var db = require("../models");

// CATEGORY PAGE NEEDS:
	// GET SET
	// GET CATEGORY
	// GET USER

module.exports = function(app) {

  // Create all our routes and set up logic within those routes where required.

  app.get("/category", function(req, res) {

    db.Set.findAll({
    }).then(function(data) {
      // var flashObj = {data: data};
      // console.log(data);
      res.render("category", data);

      // res.sendFile(path.join(__dirname, "../views/index"));
    });
  });

  
  app.get("/category", function(req, res) {
    
    db.Category.findAll({
    }).then(function(data) {
      res.render("category", data);
    });
  });

  app.get("/category", function(req, res) {
    
    db.User.findOne({
      displayname: req.params.displayname,
      username: req.params.username
    }).then(function(data) {
      res.render("category", data);

    });
  });


};
