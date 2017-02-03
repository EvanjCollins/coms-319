function validateForm(){

  var email = document.forms["Contact Information"].elements["email"].value;
  var phone = document.forms["Contact Information"].elements["phone"].value;
  var address = document.forms["Contact Information"].elements["address"].value;

  // validate email
  

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
