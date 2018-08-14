// ===============================================================================
//declares the path variable, and sets it to equal the path module
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // Series of get requests that activate when the user enters a particular route.
  //When activated, the get requests reads a specific html file in the "public"
  //folder and displays that file for the user. 
  // ---------------------------------------------------------------------------
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
