// Requiring our models
var db = require("../models");

// USER PAGE NEEDS:  
	//GET USER
	//POST USER

module.exports = function(app) {

  app.get("/user", function(req, res) {
    
    db.User.findOne({
      displayname: req.params.displayname,
      username: req.params.username
    }).then(function(data) {
      res.render("user", data);
    });
  });


  app.post("/user", function(req, res) {
    db.User.create({
      displayname: req.body.displayname,
      username: req.body.username,
      password: req.body.password
    }).then(function(data){
      // res.render("index", data);
      res.redirect("/");
      // return res.json(data);
      // res.redirect("/");
    });
  });

};



//DO I NEED THIS????
// db["User"].hasMany(db["Set"], { foreignKey: 'user_id'});
