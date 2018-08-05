// Dependencies
var express = require("express");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;



// Routes
app.get("/survey", function (req, res) {
    //res.render("index", icecreams[0].name);
    //res.render("index", icecreams[0].price);
    //res.render("index", icecreams[0].awesomeness);


});
