// Requiring our models
var db = require("../models");


// HOME PAGE NEEDS:
  // GET SET
  // GET CATEGORY
  // GET USER
  // links to user page, category page, set page.


// Routes =============================================================
module.exports = function(app) {

  // Create all our routes and set up logic within those routes where required.

  // var homeFunk = function (req, res) {
  //   res.render("index", {allCategories, allSets});
  // }

  app.get("/", function(req, res) {
    // var query = {};
    // if (req.query.set_id) {
    //   query.SetId = req.query.set_id;
    // }


    db.Category.findAll({
      include: [{ model: db.Set }],
      where: req.query
      
    }).then(function(data) {
      var allCategories = {cats: data};
      // console.log(JSON.stringify(allCategories));
      // console.log("CATEGORY name: " + data[0].cat_name);
      // console.log("----------");
      // console.log("DATA: " + JSON.stringify(data));
      // console.log("----------");
      // console.log("ALLCATEGORIES: " + JSON.stringify(allCategories));
      // console.log("----------");
      // console.log("THIS: ");
      // console.log("----------");
      // console.log("SETS: " + JSON.stringify(allCategories.cats));
      // console.log("----------");
      console.log("CATEGORIES: " + JSON.stringify(allCategories.cats[0]));
      console.log("----------");
      console.log("Sets.CategoryId: " + JSON.stringify(allCategories.cats[0].Sets[0]));
      console.log("----------");
      console.log("Sets.title: " + JSON.stringify(allCategories.cats[0].Sets[0].title));
      console.log("----------");
      
      res.render("index", allCategories);
    });
  });



  // app.get("/", function(req, res) {
  //   db.Set.findAll({
  //     where: {
  //       CategoryId: 1
  //     }
  //     // include: [ Flashcard ]
  //   }).then(function(data) {
  //     var allSets = {sets: data};
  //     console.log(JSON.stringify(allSets));
  //     // console.log("SET title: " + data[0].title);
  //     res.render("index", allSets);
  //   });
  // });




  app.get("/create", function(req, res) {

    db.Category.findAll({
    }).then(function(data) {
      console.log("here in create route");
      res.render("create.handlebars", data);
    });
    
  });

  


  app.get("/:user_id", function(req, res) {

    db.User.findOne({
      displayname: req.params.displayname,
      username: req.params.username
    }).then(function(data) {
      console.log("USER data: " + data);
      res.render("index", data);
    });
  });

  // app.get("/create", function(req, res) {
  //     console.log("here in create route 2");
  //     res.render("create.handlebars");

  // });
  // app.post("/", function(req, res) {
  //   db.Burger.create({
  //     burger_name: req.body.burger_name,
  //     devoured: req.body.devoured
  //   }).then(function(data){
  //     // res.render("index", data);
  //     res.redirect("/");
  //     // return res.json(data);
  //     // res.redirect("/");
  //   });
  // });

  // app.put("/:id", function(req, res) {
  //   db.Burger.update({
  //     devoured: req.body.devoured
  //   }, {
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //   .then(function(data) {
  //     // return res.json(data);
  //     res.redirect("/");
  //   });
  // });

};
