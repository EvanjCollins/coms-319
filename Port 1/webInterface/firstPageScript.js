function getUserEvents(){
  var user = localStorage.Name;
  var url = "http://proj-319-104.cs.iastate.edu:3000/events/byUser/" + user;
  var responseData;

	$.ajax({
    url: url,
    dataType: 'json',
    async: false,
    success: function(data) {
			responseData = data;
  	}
  });

	$('#tableHere').append('<table id="usersEventTable" border="1" style="width:680px"></table>');

	var appendString = "<tr><th> Current Events </th></tr>";

	for(var i=0; i< responseData.message.length; i++){
		appendString += "<tr><td>";
		appendString += genEventRow(responseData.message[i], i);
		appendString += "</td></tr>";
	}
	$('#usersEventTable').append(appendString);
}

function genEventRow(eventJSON, num){
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
	returnString += "<input onclick=\"rsvp(";
	returnString += num;
	returnString += ")\" value=\"RSVP to " + eventJSON.eventName + "\" type=\"button\" id=\"Event" + num + "\"";

	return returnString;
}

function getIndex(arr, val) {
    console.log(arr);
    for (var i=0; i<arr.length; i++) {
        if (arr[i].Name == val){
					return i;
				}
    }
    return -1;
}

function rsvp(eventNum){
	var eID = "Event" + eventNum;
	var eventElement = document.getElementById(eID);
	var eventName = eventElement.value;
	var eventName = eventName.split(" ");
	var eventQuery = "";

	for(var i=2; i<eventName.length; i++){
		eventQuery += eventName[i];
		eventQuery += " ";
	}

	var url = "http://proj-319-104.cs.iastate.edu:3000/events/byEventName/" + eventQuery;
	var responseData;
	$.ajax({
    url: url,
    dataType: 'json',
    async: false,
    success: function(data) {
    	responseData = data;
    }
  });
	var user = localStorage.Name;
	var index = getIndex(responseData.message[0].invitedUsers, user);
	responseData.message[0].invitedUsers[index].RSVP = true;
	console.log(responseData.message[0]);
	responseData.message[0].invitedUsers = JSON.stringify(responseData.message[0].invitedUsers);

	try{
    $.ajax({
            url: "http://proj-319-104.cs.iastate.edu:3000/events/byEventName/" + eventQuery,
            dataType: 'json',
            type: "PUT",
            data: responseData.message[0],
            async: false,
            success: function(data) {}
    });
  }
  catch(err){
    console.log(err);
  }
  location.reload();
}

function eventGetRequest(){
  getUserEvents();
}

function createNewEvent(){
  var url = "http://proj-319-104.cs.iastate.edu:3000/events/";
  var eventName = document.getElementById("eventName").value;
  var eventDescription = document.getElementById("eventDescription").value;
  var invitedFriends = document.getElementById("invitedFriends").value;
  var friendArray = invitedFriends.split(",");
  var friendsJSON = "[";
  for(var i=0; i<friendArray.length-1; i++){
    friendArray[i] = friendArray[i].trim();
  	friendsJSON += "{\"Name\": \"" + friendArray[i] + "\",\"RSVP\": false},";
  }
  friendArray[i] = friendArray[i].trim();
  friendsJSON += "{\"Name\": \"" + friendArray[i] + "\",\"RSVP\": false}";
  friendsJSON += "]";

  var url = "http://proj-319-104.cs.iastate.edu:3000/events/byEventName/" + eventName;
  var eventNameAvailable;

  try{
    $.ajax({
      url: url,
      dataType: 'json',
      async: false,
      success: function(data) {
        if(data.message.length == 0){
          eventNameAvailable = true;
        }else{
          eventNameAvailable = false;
        }
      }
    });
  }
  catch(err){
    alert(err);
  }

  if(eventNameAvailable){
  var formData = {"eventName": eventName, "eventDescription": eventDescription, "invitedUsers": friendsJSON};
	try{
  	$.ajax({
    	url: "http://proj-319-104.cs.iastate.edu:3000/events/",
      dataType: 'json',
      type: "POST",
      data: formData,
      async: false,
      success: function(data) {}
    });
  }
  catch(err){
  	console.log(err);
  }
	location.reload();
  }else{
    var placeTextHere = document.getElementById("eventAvail");
    var message = document.createTextNode("Event Name Already In Use");

    if(placeTextHere.hasChildNodes()){
      placeTextHere.removeChild(placeTextHere.childNodes[0]);
      placeTextHere.appendChild(message);
    }else{
      placeTextHere.appendChild(message);
    }
  }
}
