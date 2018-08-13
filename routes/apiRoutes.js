// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var friendData = require("../data/friendData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    console.log("anything");
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
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

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    console.log("Req body: " +req.body);
    tableData = [];
    waitListData = [];

    console.log(tableData);
  });
  //app.get("/",function(){
    //console.log(friendData);
  
  //})


};


