var path = require("path");

module.exports = function(app){
	app.get("/", function(req, res){
		res.render("qt");
	});
	app.get("/tests", function(req, res){
		res.render("quarkoTest");
	});
};