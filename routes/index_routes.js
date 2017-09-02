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
      displayname: req.params.displayname,
      username: req.params.username
    }).then(function(data) {
      res.render("index", data);
    });
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
