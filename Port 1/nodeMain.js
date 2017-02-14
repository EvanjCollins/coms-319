var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var router = express.Router();

var mongoSchema = require("./model/schema");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

router.get("/", function(req,res){
	res.json({"error" : false, "message" : "Hello World"});
});

router.route("/users")
	.get(function(req,res){
		var response = {};
		mongoSchema.userSchema.find({}, function(err, data){
			if(err) {
				response = {"error" : true, "message" : "Error Fetching Events"};
				var logMessage = "GET Request for All Users FAILS";
                                console.log(logMessage);
			}else{
				response = {"error" : false, "message" : data};
				var logMessage = "GET Request for All Users";
                                console.log(logMessage);
			}
			res.json(response);
		});
	})
	.post(function(req,res){
		var db = new mongoSchema.userSchema();
		var response = {};

		db.userName = req.body.name;
		db.hashedUserPass = req.body.hashedUserPass;

		// Hashing on client-side for security
		//db.hashedUserPass = require('crypto').createHash('sha1')
		//			.update(String(req.body.password)).digest('base64');
		db.save(function(err){
			if(err) {
				response = {"error" : true, "message" : "Error adding user"};
                                var logMessage = "POST Request for User " + req.body.name + " FAILS";
				console.log(logMessage);
			}else{
				response = {"error" : false, "message" : "User Added"};
				var logMessage = "POST Request for User " + req.body.name;
				console.log(logMessage);
			}
			res.json(response);
		});
	});

router.route("/users/:id")
	.get(function(req,res){
		var response = {};
		mongoSchema.userSchema.find( {"userName" : req.params.id}, function(err, data){
			if(err){
				response = {"error" : true, "message" : "Error Fetching User"};
				var logMessage = "GET Request for User " +  req.params.id + " FAILS";
                		console.log(logMessage);
			}else{
				response = {"error" : false, "message" : data};
				var logMessage = "GET Request for User " +  req.params.id;
                		console.log(logMessage);
			}
			res.json(response);
		});
	});

router.route("/events/")
	.get(function(req, res){
		var response = {};
		mongoSchema.eventSchema.find({}, function(err, data){
			if(err){
				response = {"error" : true, "message" : "Error Fetching Events"};
				console.log("GET Request for All Events FAILS");
			}else{
				response = {"error" : false, "message" : data};
				console.log("GET Request for All Events");
			}
			res.json(response);
		});
	})
	.post(function(req, res){
		var db = new mongoSchema.eventSchema();
		var response = {};

		db.eventName = req.body.eventName;
		db.eventDescription = req.body.eventDescription;
		db.invitedUsers = req.body.invitedUsers;

		db.save(function(err){
			if(err){
				response = {"error" : true, "message" : "Error Adding Event"};
				var logMessage = "POST Request for Events FAILS";
				console.log(logMessage);
			}else{
				response = {"error" : false, "message" : "Event Added"};
				console.log("POST Request for All Events");
			}
			res.json(response);
		});
	});

router.route("/events/:id")
	.get(function(req,res){
		var response = {};
		mongoSchema.eventSchema.find( {"eventName" : req.params.id}, function(err, data){
			if(err) {
				response = {"error" : true, "message" : "Error Fetching Event"};
				var logMessage = "GET Request for Event " + req.params.id + " FAILS";
				console.log(logMessage);
			}else{
				response = {"error" : false, "message" : data};
				var logMessage = "GET Request for Event " + req.params.id;
				console.log(logMessage);
			}
			res.json(response);
		});
	});

app.use('/', router);

app.listen(3000);
console.log("Listening on Port 3000");
