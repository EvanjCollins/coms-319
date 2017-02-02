function validateForm() {

  var firstName = document.forms["userInput"].elements["firstName"].value;
  var result = validateText(firstName);
  if(result == true){
    var image = document.createElement("IMG");
    image.setAttribute("src", "correct.png");
    var src = document.getElementById("firstName");
    src.appendChild(image);
  }
  else{
    var image = document.createElement("IMG");
    image.setAttribute("src", "wrong.png");
    var src = document.getElementById("firstName");
    src.appendChild(image);
  }

  var lastName = document.forms["userInput"].elements["lastName"].value;
  result = validateText(lastName);
  if(result == true){
    var image = document.createElement("IMG");
    image.setAttribute("src", "correct.png");
    var src = document.getElementById("lastName");
    src.appendChild(image);
  }
  else{
    var image = document.createElement("IMG");
    image.setAttribute("src", "wrong.png");
    var src = document.getElementById("lastName");
    src.appendChild(image);
  }

//  var gender = document.forms["userInput"].elements["gender"].value;
    // must be entered

//  var state = document.forms["userInput"].elements["state"].value;
    // must be entered
    // save to local storage?

    function validateText(textInput){
      var bool = true;

      for(var i=0; i<textInput.length; i++){
        var value = textInput.charCodeAt(i);
        if(value < 48 || value > 122){
          bool = false;
        }

      }
      return bool;

    }

}
