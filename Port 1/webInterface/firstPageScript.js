function registerUser(){
	var inputElement = document.getElementById("nameInput");
	var userName = inputElement.value;
	inputElement = document.getElementById("passwordInput");
	var password = inputElement.value;

	var url = "http://proj-319-104.cs.iastate.edu:3000/users/" + userName;
	var userNameAvailable;
	var hashedPass = CryptoJS.SHA1(password);

	try{
		$.ajax({
                	url: url,
                	dataType: 'json',
                	async: false,
                	success: function(data) {
                        	if(data.message.length == 0){
					userNameAvailable = true;
				}else{
					userNameAvailable = false;
				}
				console.log(data);
                	}
        	});
	}
	catch(err){
		alert(err);
	}

	if(userNameAvailable){
		var placeTextHere = document.getElementById("nameDiv");
		//var paragraph = document.createElement("P");
		var message = document.createTextNode("Valid Name");

		if(placeTextHere.hasChildNodes()){
			placeTextHere.removeChild(placeTextHere.childNodes[0]);
			placeTextHere.appendChild(message);
		}else{
			placeTextHere.appendChild(message);
		}
	}else{
		var placeTextHere = document.getElementById("nameDiv");
                //var paragraph = document.createElement("P");
                var message = document.createTextNode("Name Already Taken");

                if(placeTextHere.hasChildNodes()){
                        placeTextHere.removeChild(placeTextHere.childNodes[0]);
                        placeTextHere.appendChild(message);
                }else{
                        placeTextHere.appendChild(message);
                }

	}

	var passwordValid = validateText(password);

	if(passwordValid){
		var placeTextHere = document.getElementById("passDiv");
                //var paragraph = document.createElement("P");
                var message = document.createTextNode("Valid Password");

                if(placeTextHere.hasChildNodes()){
                        placeTextHere.removeChild(placeTextHere.childNodes[0]);
                        placeTextHere.appendChild(message);
                }else{
                        placeTextHere.appendChild(message);
                }
        }else{
                var placeTextHere = document.getElementById("passDiv");
                //var paragraph = document.createElement("P");
                var message = document.createTextNode("Invalid Password, No Special Characters");


                if(placeTextHere.hasChildNodes()){
                        placeTextHere.removeChild(placeTextHere.childNodes[0]);
                        placeTextHere.appendChild(message);
                }else{
                        placeTextHere.appendChild(message);
                }
	}

	if(userNameAvailable && passwordValid){
		var formData = {"name": userName, "hashedUserPass": String(hashedPass)};
		try{
                $.ajax({
                        url: "http://proj-319-104.cs.iastate.edu:3000/users/",
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

}

function loginUser(){
	var inputElement = document.getElementById("nameInput");
	var userName = inputElement.value;
	inputElement = document.getElementById("passwordInput");
	var password = inputElement.value;

  	var hashedPass = CryptoJS.SHA1(password);

  	var url = "http://proj-319-104.cs.iastate.edu:3000/users/" + userName;
	var remoteUserName;
	var remoteHashedUserPass;

  	$.ajax({
		url: url,
		dataType: 'json',
		async: false,
		success: function(data) {
			remoteUserName = data.message[0].userName;
			remoteHashedUserPass = data.message[0].hashedUserPass;
		}
	});

	if(remoteHashedUserPass == hashedPass){
		alert("Logging In");
		localStorage.setItem("Name", remoteUserName);
		self.location = "http://proj-319-104.cs.iastate.edu/eventPage.html";
	}else{
		var appendHere = document.getElementById("loginDiv");
		var message = document.createTextNode("Incorrect Name or Password");

                if(appendHere.hasChildNodes()){
                        appendHere.removeChild(appendHere.childNodes[0]);
                        appendHere.appendChild(message);
                }else{
                        appendHere.appendChild(message);
                }
	}

}

function validateText(textInput){
    var bool = true;

    if(textInput == ""){
      return false;
    }
    for(var i=0; i<textInput.length; i++){
      var value = textInput.charCodeAt(i);
      if((value < 48 && value != 32) || value > 122){
        bool = false;
      }

    }
    return bool;

}
