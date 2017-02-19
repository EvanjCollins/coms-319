// CALCULATOR.JS
//   Note: Look at 04_SampleProgram first
//
//
// 
var Calc = {

Model : {
},


View : {
  textRow : {id: "textRow", type: "text", value: "", onclick:""},
  button7 : {id: "button7", type: "button", value: 7, onclick:""},
  button8 : {id: "button8", type: "button", value: 8, onclick:""},
  button9 : {id: "button9", type: "button", value: 9, onclick:""},
  buttonadd : {id: "buttonadd", type: "button", value: '+', onclick:""},
  button4 : {id: "button4", type: "button", value: 4, onclick:""},
  button5 : {id: "button5", type: "button", value: 5, onclick:""},
  button6 : {id: "button6", type: "button", value: 6, onclick:""},
  buttonsub : {id: "buttonsub", type: "button", value: '-', onclick:""},
  button1 : {id: "button1", type: "button", value: 1, onclick:""},
  button2 : {id: "button2", type: "button", value: 2, onclick:""},
  button3 : {id: "button3", type: "button", value: 3, onclick:""},
  buttonmul : {id: "buttonsub", type: "button", value: '*', onclick:""},
  button0 : {id: "button0", type: "button", value: 0, onclick:""},
  buttonper : {id: "buttonper", type: "button", value: '.', onclick:""},
  buttonequal : {id: "buttonequal", type: "button", value: '=', onclick:""},
  buttondiv : {id: "buttondiv", type: "button", value: '/', onclick:""},
  buttonC : {id: "buttonC", type: "button", value: 'C', onclick:""},
  buttonMR : {id: "buttonMR", type: "button", value: 'MR', onclick:""},
  buttonMmin : {id: "buttonMmin", type: "button", value: 'M-', onclick:""},
  buttonMplus : {id: "buttonMplus", type: "button", value: 'M+', onclick:""},
  buttonMC : {id: "button1", type: "button", value: 'MC', onclick:""}
},

Controller : {

},

run : function() {
  Calc.attachHandlers();
  console.log(Calc.display());
  return Calc.display();
},


displayElement : function (element) {
  var s = "<input ";
  s += " id=\"" + element.id + "\"";
  s += " type=\"" + element.type + "\"";
  s += " value= \"" + element.value + "\"";
  s += " onclick= \"" + element.onclick + "\"";
  s += ">";
  return s;

},

display : function() {
  var s;
  s = "<table id=\"myTable\" border=2>"
  s += "<tr><td>" + Calc.displayElement(Calc.View.textRow) + "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button7);
  s += Calc.displayElement(Calc.View.button8);
  s += Calc.displayElement(Calc.View.button9);
  s += Calc.displayElement(Calc.View.buttonadd);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button4);
  s += Calc.displayElement(Calc.View.button5);
  s += Calc.displayElement(Calc.View.button6);
  s += Calc.displayElement(Calc.View.buttonsub);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button1);
  s += Calc.displayElement(Calc.View.button2);
  s += Calc.displayElement(Calc.View.button3);
  s += Calc.displayElement(Calc.View.buttonmul);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button0);
  s += Calc.displayElement(Calc.View.buttonper);
  s += Calc.displayElement(Calc.View.buttonequal);
  s += Calc.displayElement(Calc.View.buttondiv);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.buttonC);
  s += Calc.displayElement(Calc.View.buttonMR);
  s += Calc.displayElement(Calc.View.buttonMmin);
  s += Calc.displayElement(Calc.View.buttonMplus);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.buttonMC);
  s += "</td></tr></table>";
  return s;
},

attachHandlers : function() {
  Calc.View.button7.onclick = "Calc.button7Handler()"; 
  Calc.View.button8.onclick = "Calc.button8Handler()";
  Calc.View.button9.onclick = "Calc.button9Handler()";
  Calc.View.buttonadd.onclick = "Calc.buttonaddHandler()";   
},

button0Handler : function() {
	document.getElementById("textRow").value += '0';
},

button1Handler : function() {
	document.getElementById("textRow").value += '1';
},

button2Handler : function() {
	document.getElementById("textRow").value += '2';
},

button3Handler : function() {
	document.getElementById("textRow").value += '3';
},

button4Handler : function() {
	document.getElementById("textRow").value += '4';
},

button5Handler : function() {
	document.getElementById("textRow").value += '5';
},

button6Handler : function() {
	document.getElementById("textRow").value += '6';
},

button7Handler : function() {
	document.getElementById("textRow").value += '7';
},

button8Handler : function() {
	document.getElementById("textRow").value += '8';
},

button9Handler : function() {
	document.getElementById("textRow").value += '9';
},

buttonaddHandler : function() {
	document.getElementById("textRow").value += ' + ';
}

buttonsubHandler : function() {
	document.getElementById("textRow").value += ' - ';
}

buttonmulHandler : function() {
	document.getElementById("textRow").value += ' * ';
}

} // end of Calc;
