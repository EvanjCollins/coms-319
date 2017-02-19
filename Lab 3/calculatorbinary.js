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
  button1 : {id: "button1", type: "button", value: 1, onclick:""},
  button0 : {id: "button0", type: "button", value: 0, onclick:""},
  buttonsquig : {id: "buttonsquig", type: "button", value: '~', onclick:""},
  buttonadd : {id: "buttonadd", type: "button", value: '+', onclick:""},
  buttonmod : {id: "buttonmod", type: "button", value: '%', onclick:""},
  buttonleftarr : {id: "buttonleftarr", type: "button", value: '<<', onclick:""},
  buttonrightarr : {id: "buttonrightarr", type: "button", value: '>>', onclick:""},
  buttonsub : {id: "buttonsub", type: "button", value: '-', onclick:""},
  buttonamp : {id: "buttonamp", type: "button", value: '&', onclick:""},
  buttontog : {id: "buttontog", type: "button", value: '|', onclick:""},
  buttonmul  : {id: "buttonmul", type: "button", value: '*', onclick:""},
  buttondiv : {id: "buttondiv", type: "button", value: '/', onclick:""},
  buttonMR : {id: "buttonMR", type: "button", value: 'MR', onclick:""},
  buttonMmin : {id: "buttonMmin", type: "button", value: 'M-', onclick:""},
  buttonMplus : {id: "buttonMplus", type: "button", value: 'M+', onclick:""},
  buttonC : {id: "buttonC", type: "button", value: 'C', onclick:""},
  buttonMC : {id: "buttonMC", type: "button", value: 'MC', onclick:""},
  buttonequal : {id: "buttonequal", type: "button", value: '=', onclick:""},
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
  s += Calc.displayElement(Calc.View.button1);
  s += Calc.displayElement(Calc.View.button0);
  s += Calc.displayElement(Calc.View.buttonsquig);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.buttonadd);
  s += Calc.displayElement(Calc.View.buttonmod);
  s += Calc.displayElement(Calc.View.buttonleftarr);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.buttonrightarr);
  s += Calc.displayElement(Calc.View.buttonsub);
  s += Calc.displayElement(Calc.View.buttonamp);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.buttontog);
  s += Calc.displayElement(Calc.View.buttonmul);
  s += Calc.displayElement(Calc.View.buttondiv);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.buttonMR);
  s += Calc.displayElement(Calc.View.buttonMmin);
  s += Calc.displayElement(Calc.View.buttonMplus);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.buttonC);
  s += Calc.displayElement(Calc.View.buttonMC);
  s += Calc.displayElement(Calc.View.buttonequal);
  s += "</td></tr></table>";
  return s;
},

attachHandlers : function() {
  Calc.View.button7.onclick = "Calc.button7Handler()"; 
},

button7Handler : function() {
  alert("Hi");
}

} // end of Calc;
