function getUserEvents(){
  var user = localStorage.Name;
  var url = "http://proj-319-104.cs.iastate.edu:3000/events/byUser/" + user;
  var responseData;

	$.ajax({
                url: url,
                dataType: 'json',
                async: false,
                success: function(data) {
                //        console.log(data);
			responseData = data;
                }
        });


	$('#tableHere').append('<table id="usersEventTable" border="1" style="width:680px"></table>');

	var appendString = "<tr><th> Current Events </th></tr>";

	for(var i=0; i< responseData.message.length; i++){
		appendString += "<tr><td>";
		appendString += genEventRow(responseData.message[i]);
		appendString += "</td></tr>";
		console.log(responseData.message[i]);
	}
	$('#usersEventTable').append(appendString);
}

function genEventRow(eventJSON){
	var returnString = "";
	returnString += "Event Name: " + eventJSON.eventName + "<br>";
	returnString += "Event Description: " + eventJSON.eventDescription + "<br>";
	returnString += "Invited Users: <br>";
	for(var j=0; j<eventJSON.invitedUsers.length; j++){
		if(eventJSON.invitedUsers[j].RSVP == true){
			returnString += "&ensp;&ensp;";
			returnString += eventJSON.invitedUsers[j].Name;
			returnString += " is Coming!";
			returnString += "<br>";
		}else{
			returnString += "&ensp;&ensp;";
			returnString += eventJSON.invitedUsers[j].Name;
                        returnString += " is not Coming.";
			returnString += "<br>";
		}
	}

	return returnString;
}

function eventGetRequest(){
  getUserEvents();
}

function createNewEvent(){
  var url = "http://proj-319-104.cs.iastate.edu:3000/events/";
  var eventName = document.getElementById("eventName").value;
  var eventDescription = document.getElementById("eventDescription").value;
  var invitedFriends = document.getElementById("invitedFriends").value;
  //need to parse friend list and turn into json object for form data


  var formData = {"eventName": eventName, "eventDescription": eventDescription, "invitedUsers": invitedFriends};
  	try{
        	$.ajax({
                	url: "http://proj-319-104.cs.iastate.edu:3000/events/",
                        dataType: 'json',
                        type: "POST",
                        data: formData,
                        async: false,
                        success: function(data) {
                                console.log(data);
                        }
                });
        }
        catch(err){
        	console.log(err);
        }
}
