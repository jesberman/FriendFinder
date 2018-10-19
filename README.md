# Friend Finder App

This application is designed to ask the user a series of survey questions about their personality.  After taking in and storing this information, it then compares the users answers against several default persons whose information is stored in an array of objects.  The program calculates which of the people in this array gave answers most similar to the user's answers, and then displays the person whose answer most closely matched those of the user.  The user is informed that this person would potentially be compatible as a friend.

```javascript 
  app.post("/api/friends", function(req, res) {
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

  ```

  Post route code