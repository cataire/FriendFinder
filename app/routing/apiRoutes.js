var friends = require("../data/friends");

var apiRoutes = function(app){

app.get("/api/friends", function(req, res) {
	res.json(friends);
})



 app.post("/api/friends", function(req, res) {

 	var smallestDifference = 999;
	var bestMatch;
	var currentFriend;


  	for (var index = 0; index < friends.length; index++) {

  		currentFriend = friends[index];
  		var currentDifference = [];

  		for (var index2 = 0; index2 < currentFriend.answers.length; index2++) {

  			

  			currentDifference.push(Math.abs(currentFriend.answers[index2] - req.body.answers[index2]));

 
  			var reduced = currentDifference.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  			if (reduced < smallestDifference) {
  				smallestDifference = reduced;
  				bestMatch = friends[index];
  			}

  		}

  	}

  	res.json(bestMatch);
  	friends.push(req.body);

  	

  });

};



module.exports = apiRoutes;