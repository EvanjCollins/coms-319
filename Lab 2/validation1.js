function validateForm() {

  // validate first name
  var firstName = document.forms["userInput"].elements["firstName"].value;
  var result = validateText(firstName);
  if(result == true){ // place check
    var image = document.createElement("IMG");
    image.setAttribute("src", "correct.png");
    var src = document.getElementById("firstName");
    src.appendChild(image);
  }
  else{ // place X
    var image = document.createElement("IMG");
    image.setAttribute("src", "wrong.png");
    var src = document.getElementById("firstName");
    src.appendChild(image);
  }

  // validate last name
  var lastName = document.forms["userInput"].elements["lastName"].value;
  result = validateText(lastName);
  if(result == true){// place check
    var image = document.createElement("IMG");
    image.setAttribute("src", "correct.png");
    var src = document.getElementById("lastName");
    src.appendChild(image);
  }
  else{// place X
    var image = document.createElement("IMG");
    image.setAttribute("src", "wrong.png");
    var src = document.getElementById("lastName");
    src.appendChild(image);
  }

  // validate gender
  var gender = document.forms["userInput"].elements["gender"].value;
    // must be entered
  if(gender == "Female" || gender == "Male"){// place check
    var image = document.createElement("IMG");
    image.setAttribute("src", "correct.png");
    var src = document.getElementById("gender");
    src.appendChild(image);
  }
  else{// place X
    var image = document.createElement("IMG");
    image.setAttribute("src", "wrong.png");
    var src = document.getElementById("gender");
    src.appendChild(image);
  }

  var state = document.forms["userInput"].elements["state"].value;
    // must be entered
    // save to local storage??
    if(state == "California" || state == "Florida"
    || state == "New York" || state == "Texas"
    || state == "Hawaii" || state == "Washington"
    || state == "Colorado" || state == "Virginia"
    || state == "Iowa" || state == "Arizona"){// place check
      var image = document.createElement("IMG");
      image.setAttribute("src", "correct.png");
      var src = document.getElementById("state");
      src.appendChild(image);
    }
    else{// place X
      var image = document.createElement("IMG");
      image.setAttribute("src", "wrong.png");
      var src = document.getElementById("state");
      src.appendChild(image);
    }

    function validateText(textInput){
      var bool = true;

      if(textInput == ""){
        return false;
      }
      for(var i=0; i<textInput.length; i++){
        var value = textInput.charCodeAt(i);
        if(value < 48 || value > 122){
          bool = false;
        }

      }
      return bool;

    }

}
