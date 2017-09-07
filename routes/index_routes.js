// Requiring our models
var db = require("../models");



// HOME PAGE NEEDS:
  // GET SET
  // GET CATEGORY
  // GET USER
  // links to user page, category page, set page.


// Routes =============================================================
module.exports = function(app) {


    app.get("/play/:id", function(req, res) {

      db.Flashcard.findAll({
        where: {
          flash_num: req.params.id
        }

      }).then(function(data) {
        console.log("data", data);
        res.render("flashcard.handlebars", data);
      });

    });



  app.get("/", function(req, res) {
    // var query = {};
    // if (req.query.set_id) {
    //   query.SetId = req.query.set_id;
    // }


    db.Category.findAll({
      include: [{ model: db.Set }],
        where: req.query

    }).then(function(data) {

      db.Set.findAll({

        where: {
             UserId: 1
           }}).then(function(data2) {
      var allCategories = {cats: data, mysets : data2};

      console.log("----------");
      console.log("DATA OBJECT: " + JSON.stringify(allCategories.cats));
      console.log("----------");
      console.log("CATEGORIES: " + JSON.stringify(allCategories.cats[0]));
      console.log("----------");
      console.log("SETS_ONE: " + JSON.stringify(allCategories.cats[0].Sets[0]));
      console.log("----------");
      console.log("SETS.TITLE: " + JSON.stringify(allCategories.cats[0].Sets[0].title));
      console.log("----------");

      res.render("index", allCategories);
    });
    });
  });



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

         CategoryId: data.id,
         UserId: 1
       }).then(function(data2) {
         console.log("CategoryID: "+ data2.id);

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
      res.redirect("/");
      });
    });
  });

};
