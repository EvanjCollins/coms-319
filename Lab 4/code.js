// Code.JS
//   Note: Look at 04_SampleProgram first
//
//
//
$(document).ready(function(){
	//event 1
	$("input").focus(function(){
		//css change 1
        $(this).css("background-color", "#cccccc");
    });
	//event 2
	$("input").blur(function(){
		//css change 2
        $(this).css("background-color", "#ffffff");
    });
   //event 3
   $('#table').click(function(){
    createTable(1, 3);
	$("div").html("Is " + document.getElementById("inp0").value + " your name?");
	$('#yes').show(); //effect 1
	$("#What").show(); //effect 2
   });
   //event 4
   $('#yes').click(function(){
	if(document.getElementById("inp2").value > 30){
		$("#big").html("Your " + document.getElementById("inp2").value + ", wow you're so old!");
		//event 5
		$("#big").hover(function(){
			console.log("big");
		//effect 3
		$("#big").fadeOut("slow");
		$("#big").css("color", "red"); //css change 3
		$("#big").html("You're going to die");
		});
	}
	else{
		$("#big").css("color", "green"); //css change 4
		$("#big").html("Your" + document.getElementById("inp2").value + ", you're still young!");
	}
   });
   //event 5
   $("#What").click(function(){
		$("#big").css("color", document.getElementById("inp1").value); //css change 5
		$("#big").html("Idk!");
		$('#idk').show();//effect 4
		$('#yes').hide(); //effect 5
});
});
function createTable(n, m) {
    mytable = $("<table border='2'></table>"); // creates DOM elements
    mytablebody = $('<tbody></tbody>');

    for(row = 0; row < n; row++) {
	      curr_row = $('<tr></tr>');
	      for(col = 0; col < m; col++) {
			  curr_cell = $('<td></td>');
			  curr_text = document.getElementById("inp" + col).value;
			  curr_cell.append(curr_text);
	          curr_row.append(curr_cell);
		}
		// appends arg to mytablebody
	    mytablebody.append(curr_row);
    }
    mytable.append(mytablebody);
    mytable.insertBefore($('#tablecreate')); // real dom from document!
}
// end of function
