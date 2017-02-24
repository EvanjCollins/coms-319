// Code.JS
//   Note: Look at 04_SampleProgram first
//
//
// 
$(document).ready(function(){
	$("tr:even").css("background-color", "yellow");
	$("tr:odd").css("background-color", "green");
	$(".boob").click(function(){
		$(".boob").keyDown(function(){
		$(this).hide();
		});
	});
});
// end of Queeery;
