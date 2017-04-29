// booksLibrary.JS
//
//
//
$(document).ready(function(){
	l1 = new Library(7,4);
});

class Book{ //book
  constructor(name, bookId) {
    this.name=name;
		this.bookId=bookId;
  }

};

class Shelf{ //shelf

};

class Library{ //library
	constructor(n,m){
		createTable(n,m);
	}

};
function createTable(n, m){
	mytable = $("<table border='2'></table>");; // creates DOM elements
	mytablehead = $("<thead><tr> <th>Art</th> <th>Science</th> <th>Sports</th> <th>Literature</th> </tr></thead>");
    mytablebody = $('<tbody></tbody>');
	bookcount=0;
    for(row = 0; row < n; row++) {
	      curr_row = $('<tr></tr>');

	      for(col = 0; col < m; col++) {
				 	createShelf(row, col);
				}
				// appends arg to mytablebody
	    	mytablebody.append(curr_row);
    }
	mytable.append(mytablehead);
    mytable.append(mytablebody);
    mytable.insertBefore($('#tablecreate')); // real dom from document!
	}

// end of Queeery;
