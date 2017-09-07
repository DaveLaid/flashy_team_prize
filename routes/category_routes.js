// Requiring our models
var db = require("../models");

// CATEGORY PAGE NEEDS:
	// GET SET
	// GET CATEGORY
	// GET USER

module.exports = function(app) {

  // Create all our routes and set up logic within those routes where required.

  app.get("/category/:cat", function(req, res) {
   db.Category.findAll({
      include: [{ model: db.Set }],
        where: { cat_name: req.params.cat}

   }).then(function(data) {
      var allCategories = {cats: data, category: req.params.cat};
      console.log(data);
      // console.log("----------");
      // console.log("DATA OBJECT: " + JSON.stringify(allCategories.cats));
      // console.log("----------");
      // console.log("CATEGORIES: " + JSON.stringify(allCategories.cats[0]));
      // console.log("----------");
      // console.log("SETS_ONE: " + JSON.stringify(allCategories.cats[0].Sets[0]));
      // console.log("----------");
      // console.log("SETS.TITLE: " + JSON.stringify(allCategories.cats[0].Sets[0].title));
      // console.log("----------");

     res.render("test", allCategories);
    });
  });

  // app.get("/category", function(req, res) {
  //
  //   db.User.findOne({
  //     displayname: req.params.displayname,
  //     username: req.params.username
  //   }).then(function(data) {
  //     res.render("category", data);
  //
  //   });
  // });


};
