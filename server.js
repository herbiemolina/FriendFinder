// Dependencies
var express = require("express");
var path = require("path");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();



//data parsing handled by Express
app.use(express.static(__dirname + "/pubic"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//Start the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

