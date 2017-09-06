// Requiring our models
var db = require("../models");

var count = 1;

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
      
      // console.log("----------");
      // console.log("DATA OBJECT: " + JSON.stringify(allCategories.cats));
      // console.log("----------");
      // console.log("CATEGORIES: " + JSON.stringify(allCategories.cats[0]));
      // console.log("----------");
      // console.log("SETS_ONE: " + JSON.stringify(allCategories.cats[0].Sets[0]));
      // console.log("----------");
      // console.log("SETS.TITLE: " + JSON.stringify(allCategories.cats[0].Sets[0].title));
      // console.log("----------");

      res.render("index", allCategories);
    });
  });




  app.post("/", function(req, res) {
    db.Flashcard.create({
      flash_num: count,
      question: req.body.question,
      answer: req.body.answer
    }).then(function(data){
      
      return res.json(data);
      res.redirect("/");
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

  // create flashcards data is posted here
  app.post("/create", function(req, res) {
    console.log("got here to post create in index.routes");

    console.log("title:"+req.body.flashcards_title);
    console.log("category:"+req.body.category);

    //Flashcard 1
    console.log(req.body.q1);
    console.log(req.body.a1);

    //Flashcard 2
    console.log(req.body.q2);
    console.log(req.body.a2);

    //Flashcard 3
    console.log(req.body.q3);
    console.log(req.body.a3);

    db.Category.findOne({
      where: {
        cat_name: req.body.category
      }
    }
     ).then(function(data) {
      console.log("USER data (id): " + data.id);
      console.log("USER data (catname): " + data.cat_name);
      var mynewset = db.Set.create({
        title: req.body.flashcards_title,
         url: 'www.google.com',
         CategoryId: data.id,
         UserId: 1
       }).then(function(data2) {
         console.log("CategoryID: "+data2.id);

      var mynewcard1 = db.Flashcard.create({
         flash_num: data2.id,
         question: req.body.q1,
         answer: req.body.a1
      });

      var mynewcard2 = db.Flashcard.create({
         flash_num: data2.id,
         question: req.body.q2,
         answer: req.body.a2
       });

     var mynewcard3 = db.Flashcard.create({
        flash_num: data2.id,
        question: req.body.q3,
        answer: req.body.a3

    });
  });
  }); 
      //res.render("index", data);

    // var set_of_flashcards = [];
    //     for(i=0;i<data2.length;i++) {
    //     }
    // db.Flashcard.create({
    //
    // }).then(function(data) {
    //   console.log("here in post route 1");
    //   res.redirect("/");
    // });
  });




  // app.get("/user/:user_id", function(req, res) {

  //   db.User.findOne({
  //     displayname: req.params.displayname,
  //     username: req.params.username
  //   }).then(function(data) {
  //     console.log("USER data: " + data);
  //     res.render("index", data);
  //   });
  // });

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
