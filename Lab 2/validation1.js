function validateForm() {

  var firstName = document.forms["userInput"].elements["firstName"].value;
  var result = validateText(firstName);
  if(result == true){
    //place checkmark there
  }
  else{
    //place big x
  }

  var lastName = document.forms["userInput"].elements["lastName"].value;
  result = validateText(lastName);
  if(result == true){
    //place checkmark there
  }
  else{
    //place big x
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
          alert("WRONG");
          bool = false;
        }
        else{
          alert("TRUE");
        }
      }
      return bool;
    }

}
