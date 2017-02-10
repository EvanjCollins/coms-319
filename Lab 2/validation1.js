function validateForm() {

  var overallValidation = [false, false, false, false];

  // validate first name
  var firstName = document.forms["userInput"].elements["firstName"].value;
  var result = validateText(firstName);
  if(result == true){ // place check
    overallValidation[0] = true;
    var image = document.createElement("IMG");
    image.setAttribute("src", "correct.png");
    var src = document.getElementById("firstName");
    if(src.hasChildNodes()){
      src.removeChild(src.childNodes[0]);
      src.appendChild(image);
    }
    else{
      src.appendChild(image);
    }

  }
  else{ // place X
    overallValidation[0] = false;
    var image = document.createElement("IMG");
    image.setAttribute("src", "wrong.png");
    var src = document.getElementById("firstName");
    if(src.hasChildNodes()){
      src.removeChild(src.childNodes[0]);
      src.appendChild(image);
    }
    else{
      src.appendChild(image);
    }
  }

  // validate last name
  var lastName = document.forms["userInput"].elements["lastName"].value;
  result = validateText(lastName);
  if(result == true){// place check
    overallValidation[1] = true;
    var image = document.createElement("IMG");
    image.setAttribute("src", "correct.png");
    var src = document.getElementById("lastName");
    if(src.hasChildNodes()){
      src.removeChild(src.childNodes[0]);
      src.appendChild(image);
    }
    else{
      src.appendChild(image);
    }
  }
  else{// place X
    overallValidation[1] = false;
    var image = document.createElement("IMG");
    image.setAttribute("src", "wrong.png");
    var src = document.getElementById("lastName");
    if(src.hasChildNodes()){
      src.removeChild(src.childNodes[0]);
      src.appendChild(image);
    }
    else{
      src.appendChild(image);
    }
  }

  // validate gender
  var gender = document.forms["userInput"].elements["gender"].value;
    // must be entered
  if(gender == "Female" || gender == "Male"){// place check
    overallValidation[2] = true;
    var image = document.createElement("IMG");
    image.setAttribute("src", "correct.png");
    var src = document.getElementById("gender");
    if(src.hasChildNodes()){
      src.removeChild(src.childNodes[0]);
      src.appendChild(image);
    }
    else{
      src.appendChild(image);
    }
  }
  else{// place X
    overallValidation[2] = false;
    var image = document.createElement("IMG");
    image.setAttribute("src", "wrong.png");
    var src = document.getElementById("gender");
    if(src.hasChildNodes()){
      src.removeChild(src.childNodes[0]);
      src.appendChild(image);
    }
    else{
      src.appendChild(image);
    }
  }

  var state = document.forms["userInput"].elements["state"].value;
    // must be entered
    // save to local storage????
    if(state == "California" || state == "Florida"
    || state == "New York" || state == "Texas"
    || state == "Hawaii" || state == "Washington"
    || state == "Colorado" || state == "Virginia"
    || state == "Iowa" || state == "Arizona"){// place check
      overallValidation[3] = true;
      var image = document.createElement("IMG");
      image.setAttribute("src", "correct.png");
      var src = document.getElementById("state");
      if(src.hasChildNodes()){
        src.removeChild(src.childNodes[0]);
        src.appendChild(image);
      }
      else{
        src.appendChild(image);
      }
    }
    else{// place X
      overallValidation[3] = false;
      var image = document.createElement("IMG");
      image.setAttribute("src", "wrong.png");
      var src = document.getElementById("state");
      if(src.hasChildNodes()){
        src.removeChild(src.childNodes[0]);
        src.appendChild(image);
      }
      else{
        src.appendChild(image);
      }
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

    if((overallValidation[0]==true) && (overallValidation[1]==true) && (overallValidation[2]==true) && (overallValidation[3]==true)){
      // save state to local storage
      localStorage.setItem("State", state);
      // if all parts are valid go to next page
      self.location = "validation2.html";
    }
}
