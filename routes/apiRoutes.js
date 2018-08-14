// ===============================================================================
//tells the file to go into the "friendData.js" file and retrieve the "freindData" 
//variable for use by this file 
// ===============================================================================
var friendData = require("../data/friendData");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  //begins a get request corresponding to the /api/friends route and returns the friendData
  //variable as a json object
  // ---------------------------------------------------------------------------
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });
  // Posts the newMatch variable to the /api/friends route and runs a series of for
  //loops designes to determine the best match for the user
  // ---------------------------------------------------------------------------
  app.post("/api/friends", function(req, res) {
    console.log("anything");
    var newMatch = req.body;
      var bestMatch = {};
      var leastDifference = 100;

      for(i=0; i<friendData.length; i++) {
        var potentialMatch = friendData[i];
        var totalPotentialDifference = 0;
        for (j=0; j<10; j++){ 
          var questionDifference = Math.abs(parseInt(newMatch.questions[i]) -parseInt(potentialMatch.questions[i]));
          
          totalPotentialDifference+= questionDifference;
        }  
        if (totalPotentialDifference < leastDifference) {
          leastDifference=totalPotentialDifference;
          bestMatch = potentialMatch;          
        }
      }
      friendData.push(newMatch);
      res.json(bestMatch);
  });

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    console.log("Req body: " +req.body);
  });
};