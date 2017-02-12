var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var router = express.Router();

var mongoSchema = require("./model/schema");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

router.get("/", function(req,res){
	res.json({"error" : false, "message" : "Hello World"});
});

router.route("/users")
	.get(function(req,res){
		var response = {};
		mongoSchema.userSchema.find({}, function(err, data){
			if(err) {
				response = {"error" : true, "message" : "Error Fetching Events"};
			}else{
				response = {"error" : false, "message" : data};
			}
			res.json(response);
		});
	})
	.post(function(req,res){
		var db = new mongoSchema.userSchema();
		var response = {};

		db.userName = req.body.name;

		//debugging statements
		//console.log(req);
		//console.log(req.body.password);

		db.hashedUserPass = require('crypto').createHash('sha1')
					.update(String(req.body.password)).digest('base64');
		db.save(function(err){
			if(err) {
				response = {"error" : true, "message" : "Error adding user"};
			}else{
				response = {"error" : false, "message" : "User Added"};
			}
			res.json(response);
		});
	});

router.route("/users/:id")
	.get(function(req,res){
		var response = {};
		mongoSchema.userSchema.findById(req.params.id, function(err, data){
			if(err){
				response = {"error" : true, "message" : "Error Fetching User"};
			}else{
				response = {"error" : false, "message" : data};
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
			}else{
				response = {"error" : false, "message" : data};
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
			}else{
				response = {"error" : false, "message" : "Event Added"};
			}
			res.json(response);
		});
	});


app.use('/', router);

app.listen(3000);
console.log("Listening on Port 3000");
