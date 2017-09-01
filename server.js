var express = require("express");
var bodyParser = require("body-parser");
//methodoverride supports put and delete
//because natively we only have get and post
var methodOverride = require("method-override");


// Sets up the Express App
// =============================================================
var PORT = process.env.PORT || 3000;
var app = express();


// Requiring our models for syncing
// =============================================================
var db = require("./models");


// Serve static content for the app from the "public" directory in the application directory.
// =============================================================
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
//app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Routes
// =============================================================
// var routes = require("./routes/");
require("./routes/index_routes.js")(app);
require("./routes/user_routes.js")(app);
require("./routes/account_routes.js")(app);
require("./routes/flashcard_routes.js")(app);
require("./routes/category_routes.js")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});