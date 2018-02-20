const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.use(express.static(__dirname + '/public'));





app.listen(PORT, function() {
	console.log("Server is listening", PORT);
});


