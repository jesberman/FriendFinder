// ==============================================================================
// group of npm packages that we can use to make our application functional
// ==============================================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// ==============================================================================
// declares the new app variable and sets it equal to the express module
// ==============================================================================

// informs the program that we will be making an express server
var app = express();
// sets the port to 8080
var PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ================================================================================
// ROUTER
// Maps out for the server the routes it will be using to request data
// ================================================================================
app.use(express.static('public'));
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// =============================================================================
// LISTENER
// starts the server, and has it listen for port 8080
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
