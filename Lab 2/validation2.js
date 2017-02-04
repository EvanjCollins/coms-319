function validateForm(){

  var email = document.forms["Contact Information"].elements["email"].value;
  var phone = document.forms["Contact Information"].elements["phone"].value;
  var address = document.forms["Contact Information"].elements["address"].value;

  // validate email
  var result = validateEmail(email);
  if(result == true){ // place check
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
  else{ // place X
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
  if(phone.length == 9){

  }
  else if(phone.length == 11){

  }
  else{
    validated = false;
  }

  if(validated){
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
  else{
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
