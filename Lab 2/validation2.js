function validateForm(){

  var overallValidation = [false, false, false];

  var email = document.forms["Contact Information"].elements["email"].value;
  var phone = document.forms["Contact Information"].elements["phone"].value;
  var address = document.forms["Contact Information"].elements["address"].value;

  // validate email
  var result = validateEmail(email);
  if(result == true){// place check
    overallValidation[0] = true;
    var image = document.createElement("IMG");
    image.setAttribute("src", "correct.png");
    var src = document.getElementById("emailDiv");
    if(src.hasChildNodes()){
      src.removeChild(src.childNodes[0]);
      src.appendChild(image);
    }
    else{
      src.appendChild(image);
    }

  }
  else{// place X
    overallValidation[0] = false;
    var image = document.createElement("IMG");
    image.setAttribute("src", "wrong.png");
    var src = document.getElementById("emailDiv");
    if(src.hasChildNodes()){
      src.removeChild(src.childNodes[0]);
      src.appendChild(image);
    }
    else{
      src.appendChild(image);
    }
  }

  function validateEmail(email) {
    splitEmail = email.split('@');
    if (splitEmail.length == 2 && validateText(splitEmail[0])) {
        splitEmail2 = splitEmail[1].split('.')
        if (splitEmail2.length == 2 && validateText(splitEmail2[0] + splitEmail2[1])) {
            return true;
        }
    }
    valCheck = false;
    return false;
  }

  // validate phone
  var validated = true;
  if(phone.length == 10){
    var tmp = validateNumbers(phone);
    if(tmp == false){
      validated = false;
    }
  }
  else if(phone.length == 0){// validate no phone number since it isn't required
    validated = true;
  }
  else if(phone.length == 12){
    var withoutDash = phone.split("-");

    if(withoutDash.length == 3){
      var withoutDashWhole = withoutDash[0] + withoutDash[1] + withoutDash[2];
      var boolean = validateNumbers(withoutDashWhole);
      if(boolean == false){
        validated = false;
      }

    }
    else{
      validated = false;
    }

  }
  else{
    validated = false;
  }

  if(validated == true){// place check
    overallValidation[1] = true;
    var image = document.createElement("IMG");
    image.setAttribute("src", "correct.png");
    var src = document.getElementById("phoneDiv");
    if(src.hasChildNodes()){
      src.removeChild(src.childNodes[0]);
      src.appendChild(image);
    }
    else{
      src.appendChild(image);
    }
  }
  else{// place x
    overallValidation[1] = false;
    var image = document.createElement("IMG");
    image.setAttribute("src", "wrong.png");
    var src = document.getElementById("phoneDiv");
    if(src.hasChildNodes()){
      src.removeChild(src.childNodes[0]);
      src.appendChild(image);
    }
    else{
      src.appendChild(image);
    }
  }


  // validate address
  var successful = false;
  var splitAddress = address.split(',');

  if(splitAddress.length > 1){
    if((validateText(splitAddress[0]) == true) && (validateText(splitAddress[1]) == true)){
      successful = true;
    }
    else{
      successful = false;
    }
  }
  else{
    successful = false;
  }

  if(successful == true){// place check
    overallValidation[2] = true;
    var image = document.createElement("IMG");
    image.setAttribute("src", "correct.png");
    var src = document.getElementById("addressDiv");
    if(src.hasChildNodes()){
      src.removeChild(src.childNodes[0]);
      src.appendChild(image);
    }
    else{
      src.appendChild(image);
    }
  }
  else{// place x
    overallValidation[2] = false;
    var image = document.createElement("IMG");
    image.setAttribute("src", "wrong.png");
    var src = document.getElementById("addressDiv");
    if(src.hasChildNodes()){
      src.removeChild(src.childNodes[0]);
      src.appendChild(image);
    }
    else{
      src.appendChild(image);
    }
  }

  //if all is validated go to next page
  if((overallValidation[0]==true) && (overallValidation[1]==true)
  && (overallValidation[2]==true)){
    // save address to local storage
    localStorage.setItem("address", address);
    // go to next page
    self.location = "validationLastPage.html";
  }

  // helper functions
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

  function validateNumbers(textInput){
    var bool = true;

    if(textInput == ""){
      return false;
    }

    for(var i=0; i<textInput.length; i++){
      var value = textInput.charCodeAt(i);
      if(value < 48 || value > 57){
        bool = false;
      }

    }
    return bool;
  }
}
