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
  operation = 0;
  arg1 = 0;
  arg2 = 0;
  memory = 0;
  reset = 0;
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
  Calc.View.button0.onclick = "Calc.buttonHandler(0)";
  Calc.View.button1.onclick = "Calc.buttonHandler(1)";
  Calc.View.button2.onclick = "Calc.buttonHandler(2)";   
  Calc.View.button3.onclick = "Calc.buttonHandler(3)"; 
  Calc.View.button4.onclick = "Calc.buttonHandler(4)";
  Calc.View.button5.onclick = "Calc.buttonHandler(5)";
  Calc.View.button6.onclick = "Calc.buttonHandler(6)";   
  Calc.View.button7.onclick = "Calc.buttonHandler(7)"; 
  Calc.View.button8.onclick = "Calc.buttonHandler(8)";
  Calc.View.button9.onclick = "Calc.buttonHandler(9)";
  Calc.View.buttonadd.onclick = "Calc.buttonOperHandler(' + ')";
  Calc.View.buttonsub.onclick = "Calc.buttonOperHandler(' - ')";   
  Calc.View.buttonmul.onclick = "Calc.buttonOperHandler(' * ')";
  Calc.View.buttondiv.onclick = "Calc.buttonOperHandler('/')";
  Calc.View.buttonC.onclick = "Calc.buttonCHandler('C')";
  Calc.View.buttonMC.onclick = "Calc.buttonCHandler('MC')";  
  Calc.View.buttonMR.onclick = "Calc.buttonCHandler('MR')";
  Calc.View.buttonMmin.onclick = "Calc.buttonCHandler('Mmin')";  
  Calc.View.buttonMplus.onclick = "Calc.buttonCHandler('Mplus')";    
  Calc.View.buttonequal.onclick = "Calc.buttonequalHandler()";  
},

operate : function(oper){
	if(oper = '-'){
		val = arg1 - arg2;
	}
	if(oper = '+'){
		val = arg1 + arg2;
	}
	if(oper = '*'){
		val = arg1 * arg2;
	}
	if(oper = '/'){
		val = arg1/arg2;
	}
	return val;
},

buttonHandler : function(num) {
	if(reset == 1){
	arg1 = 0;
	arg2 = 0;
	document.getElementById("textRow").value = '';
	reset = 0;
	}
	if(operation == 0){
	document.getElementById("textRow").value += num;
	arg1 = arg1*10 + num;	
	}
	else{
	document.getElementById("textRow").value += num;
	arg2 = arg2*10 + num;
	}
},

buttonOperHandler : function(oper) {
	if(operation == 0){
	document.getElementById("textRow").value += oper;
	operation = oper;
	}
},

buttonCHandler : function(handle) {
	if(handle == 'C'){
	document.getElementById("textRow").value = '';
	operation = 0;
	arg1 = 0;
	arg2 = 0;
	}
	else if(handle == 'MC'){
	memory = 0;
	}
	else if(handle == 'MR'){
	document.getElementById("textRow").value = memory;
	operation = 0;
	arg1 = 0;
	arg2 = 0;
	}
},

buttonequalHandler : function(){
	if(operation == ' - '){
		val = arg1-arg2;
		document.getElementById("textRow").value = val;
		operation = 0;
		arg1 = val;
		arg2 = 0;
		memory = val;
		reset = 1;
	}
	else if(operation == ' + '){
		val = arg1+arg2;
		document.getElementById("textRow").value = val;
		operation = 0;
		arg1 = val;
		arg2 = 0;
		memory = val;
		reset = 1;
	}
	else if(operation == ' * '){
		val = arg1*arg2;
		document.getElementById("textRow").value = val;
		operation = 0;
		arg1 = val;
		arg2 = 0;
		memory = val;
		reset = 1;
	}
	else if(operation == '/'){
		val = arg1/arg2;
		document.getElementById("textRow").value = val;
		operation = 0;
		arg1 = val;
		arg2 = 0;
		memory = val;
		reset = 1;
	}
},

} // end of Calc;
