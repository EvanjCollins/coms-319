// Code.JS
//   Note: Look at 04_SampleProgram first
//
//
// 
$(document).ready(function(){
  $('#table').click(function(){
    createTable(1, 4);
  });
});

function createTable(n, m) {
    mytable = $("<table border='2'></table>"); // creates DOM elements
    mytablebody = $('<tbody></tbody>'); 

    for(row = 0; row < n; row++) {
	      curr_row = $('<tr></tr>');
	      for(col = 0; col < m; col++) {
			  curr_cell = $('<td></td>');
			  curr_text1 = document.getElementById("first").value;
			  if(curr_cell ==){
				  
			  }
			  curr_cell.append(curr_text1);
			  curr_text2 = document.getElementById("second").value;
			  curr_cell.append(curr_text2);
			  curr_text3 = document.getElementById("third").value;
			  curr_cell.append(curr_text3);
			  mytablebody.append(curr_cell);
	      } // appends arg to mytablebody
		  mytablebody.append(curr_row);
    }
    mytable.append(mytablebody);
    mytable.insertBefore($('#tablecreate')); // real dom from document!

} // end of function
// end of Queeery;
