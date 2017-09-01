// Requiring our models
var db = require("../models");

// ACCOUNT PAGE NEEDS:
	// GET USER
	// GET SET
  	// GET CATEGORY
  	// links to account page, category page, set page (and eventually favorites).

module.exports = function(app) {


	app.get("/account", function(req, res) {
    
	    db.User.findOne({
	      name: req.params.name,
	      email: req.params.email
	    }).then(function(data) {
	      res.render("index", data);
	    });
  	});


  	app.get("/account", function(req, res) {
    
	    db.Set.findAll({
	    }).then(function(data) {
	      // var flashObj = {data: data};
	      // console.log(data);
	      res.render("account", data);
	      // res.sendFile(path.join(__dirname, "../views/index"));
	    });
  	});


	app.get("/account", function(req, res) {

		db.Category.findAll({
		}).then(function(data) {
		  res.render("account", data);
		});
	});


};