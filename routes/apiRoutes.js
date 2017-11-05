
var HomePage = require("../quarkoTest");
var TestPage = require("../qt");

module.exports = function(app){

	app.get("/api/home", function(req, res){
		res.json(HomePage);
	});

	app.get("api/tests", function(req, res){
		res.json(TestPage);
	});
};