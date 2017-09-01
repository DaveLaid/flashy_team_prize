// Requiring our models
var db = require("../models");

// FLASHCARD PAGE NEEDS: 
	// GET USER 
	// GET SET
	// GET CATEGORY
	// POST CATEGORY
	// POST SET
	// POST FLASHCARD


module.exports = function(app) {

	app.get("/flashcard", function(req, res) {
    
	    db.User.findOne({
	      name: req.params.name,
	      email: req.params.email
	    }).then(function(data) {
	      res.render("flashcard", data);
	    });
  	});


  	app.get("/flashcard", function(req, res) {
    
	    db.Set.findAll({
	    }).then(function(data) {
	      // var flashObj = {data: data};
	      // console.log(data);
	      res.render("flashcard", data);
	      // res.sendFile(path.join(__dirname, "../views/index"));
	    });
  	});


	app.get("/flashcard", function(req, res) {

		db.Category.findAll({
		}).then(function(data) {
		  res.render("flashcard", data);
		});
	});


	app.post("/flashcard", function(req, res) {
    
		db.Category.create({
		  cat_name: req.body.cat_name
		}).then(function(data){
		  // res.render("index", data);
		  res.redirect("/flashcard");
		  // return res.json(data);
		});
	});


	app.post("/flashcard", function(req, res) {
    
		db.Set.create({
		  title: req.body.title,
		  url: "www.flashy.com/flashcard/" + req.body.set_id
		}).then(function(data){
		  // res.render("index", data);
		  res.redirect("/flashcard");
		  // return res.json(data);
		});
	});


	app.post("/flashcard", function(req, res) {
    
		db.Flashcard.create({
		  flash_num: req.body.title,
		  question: req.body.question,
		  answer: req.body.answer
		}).then(function(data){
		  // res.render("index", data);
		  res.redirect("/flashcard");
		  // return res.json(data);
		});
	});



};


