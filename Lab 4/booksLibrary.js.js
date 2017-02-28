// Code.JS
//   Note: Look at 04_SampleProgram first
//
//
// 
$(document).ready(function(){
	$("tr:even").css("background-color", "yellow");
	$("tr:odd").css("background-color", "green");
	$("p").click(function(){
        $("div").animate({ 
			left : '500px',
            color: 'brown',
            height: '150px',
            width: '150px'});
	});
});
// end of Queeery;
