// Login.JS

$(document).ready(function(){
	$("input").focus(function(){
    $(this).css("background-color", "#cccccc");
  });
	$("input").blur(function(){
    $(this).css("background-color", "#ffffff");
  });
	$("#login").click(function(){
		if(document.getElementById("inp0").value == "admin" && document.getElementById("inp1").value == "admin" ){
    	window.location="booksLibrary.html";
		}
		else if(document.getElementById("inp0").value == "admin"){
			alert("Wrong Admin Password");
		}
		else if(document.getElementById("inp0").value.startsWith("U") == true) {
    	window.location="studentLibrary.html";
		}
		else{
			alert("Username needs to start with U");
		}
	});
});
