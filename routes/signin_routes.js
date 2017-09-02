// Requiring our models
var db = require("../models");

// USER PAGE NEEDS:
	//GET USER
	//POST USER

module.exports = function(app) {

  app.get("/user", function(req, res) {

    db.User.findOne({
      name: req.params.name,
      email: req.params.email
    }).then(function(data) {
      res.render("user", data);
    });
  });


  app.post("/user", function(req, res) {
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }).then(function(data){
      // res.render("index", data);
      res.redirect("/");
      // return res.json(data);
      // res.redirect("/");
    });
  });

};
