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

  app.get("/", function(req, res) {

    db.Category.findAll({
    }).then(function(data) {
      //console.log("CATEGORY data: " + data);
      //console.log("CATEGORY name: " + data[0].cat_name);
      res.render("index", data);
    });

  });

  app.get("/create", function(req, res) {

    db.Category.findAll({
    }).then(function(data) {
      console.log("here in create route");
      res.render("create.handlebars", data);
    });

  });
  // app.get("/:id", function(req, res) {

  //   db.Set.findAll({
  //   }).then(function(data) {
  //     console.log("SET data: " + data);
  //     console.log("SET title: " + data[0].title);
  //     console.log("SET url: " + data[0].url);
  //     res.render("index", data);
  //   });
  // });

  app.post("/login", function(req, res) {

    db.User.findOne({
      username: req.params.username,
      password: req.params.password
    }).then(function(data) {
      db.Set.findAll({
        UserId: data.id
      }).then(function(data2) {
        var set_of_flashcards = [];
        for(i=0;i<data2.length;i++) {
        console.log("USER data: " + data2[i].title);
        set_of_flashcards.push(data2[i].title);
        }
        res.json(set_of_flashcards);
      });
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

  app.get("/create", function(req, res) {
      console.log("here in create route 2");
      res.render("create.handlebars");

  });
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
