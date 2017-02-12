var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/Portfolio1');

var mongoSchema = mongoose.Schema;

var userSchema = {
        "userName" : String,
        "hashedUserPass" : String,
	"userID" : Number
};

var eventSchema = {
        "eventName" : String,
        "eventDescription" : String,
        "invitedUsers" : Object
};

module.exports = {
	userSchema : mongoose.model('user', userSchema),
	eventSchema : mongoose.model('event', eventSchema)
	}
