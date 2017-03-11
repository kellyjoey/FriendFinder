

// ===============================================================================
// LOAD DATA
// We are linking our routes to data sources.
// This data source holds arrays of information on "friends".
// ===============================================================================

var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// ===============================================================================

module.exports = function(app) {
  // API GET Request
  // Below code handles when users "visit" a page.
  // In the below case when a user visits the link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


// API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to a JavaScript array
	// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
      friendsData.push(req.body);
      
  });

};