// Calculator.JS
//   Note: Look at 04_SampleProgram first
//
//
// 
var Calc = {

Model : {
  operation : 0,
  arg1 : 0,
  arg2 : 0,
  memory : 0,
  reset : 0
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
  buttonMC : {id: "button1", type: "button", value: 'MC', onclick:""},
},

Controller : {
renew: function() {
	document.getElementById("textRow").value = val;
	Calc.Model.operation = 0;
	Calc.Model.arg1 = val;
	Calc.Model.arg2 = 0;
	Calc.Model.memory = val;
	Calc.Model.reset = 1;
	},
buttonHandler : function(num) {
	if(Calc.Model.reset == 1){
	document.getElementById("textRow").value = '';
	Calc.Model.reset = 0;
	}
	if(Calc.Model.operation == 0){
	document.getElementById("textRow").value += num;
	Calc.Model.arg1 = Calc.Model.arg1*10 + num;	
	}
	else{
	document.getElementById("textRow").value += num;
	Calc.Model.arg2 = Calc.Model.arg2*10 + num;
	}
},

buttonOperHandler : function(oper) {
	if(Calc.Model.operation == 0){
	document.getElementById("textRow").value += oper;
	Calc.Model.operation = oper;
	}
},

buttonCHandler : function(handle) {
	if(handle == 'C'){
	document.getElementById("textRow").value = '';
	Calc.Model.operation = 0;
	Calc.Model.arg1 = 0;
	Calc.Model.arg2 = 0;
	}
	else if(handle == 'MC'){
	Calc.Model.memory = 0;
	}
	else if(handle == 'MR'){
	document.getElementById("textRow").value = Calc.Model.memory;
	Calc.Model.operation = 0;
	Calc.Model.arg1 = Calc.Model.memory;
	Calc.Model.arg2 = 0;
	}
	else if(handle == 'Mmin'){
	Calc.Model.memory -= Calc.Model.arg1;
	document.getElementById("textRow").value = Calc.Model.memory;
	Calc.Model.arg1 = Calc.Model.memory;
	}
	else if(handle == 'Mplus'){
	Calc.Model.memory += Calc.Model.arg1;
	document.getElementById("textRow").value = Calc.Model.memory;
	Calc.Model.arg1 = Calc.Model.memory;
	}
},

buttonequalHandler : function(that){
	if(Calc.Model.operation == ' - '){
		val = Calc.Model.arg1-Calc.Model.arg2;	
		Calc.Controller.renew();
	}
	else if(Calc.Model.operation == ' + '){
		val = Calc.Model.arg1+Calc.Model.arg2;
		document.getElementById("textRow").value = val;
		Calc.Controller.renew();
	}
	else if(Calc.Model.operation == ' * '){
		val = Calc.Model.arg1*Calc.Model.arg2;
		document.getElementById("textRow").value = val;
		Calc.Controller.renew();
	}
	else if(Calc.Model.operation == '/'){
		val = Calc.Model.arg1/Calc.Model.arg2;
		document.getElementById("textRow").value = val;
		Calc.Controller.renew();
		}
}
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
  Calc.View.button0.onclick = "Calc.Controller.buttonHandler(0)";
  Calc.View.button1.onclick = "Calc.Controller.buttonHandler(1)";
  Calc.View.button2.onclick = "Calc.Controller.buttonHandler(2)";   
  Calc.View.button3.onclick = "Calc.Controller.buttonHandler(3)"; 
  Calc.View.button4.onclick = "Calc.Controller.buttonHandler(4)";
  Calc.View.button5.onclick = "Calc.Controller.buttonHandler(5)";
  Calc.View.button6.onclick = "Calc.Controller.buttonHandler(6)";   
  Calc.View.button7.onclick = "Calc.Controller.buttonHandler(7)"; 
  Calc.View.button8.onclick = "Calc.Controller.buttonHandler(8)";
  Calc.View.button9.onclick = "Calc.Controller.buttonHandler(9)";
  Calc.View.buttonper.onclick = "Calc.Controller.buttonHandler('.')";
  Calc.View.buttonadd.onclick = "Calc.Controller.buttonOperHandler(' + ')";
  Calc.View.buttonsub.onclick = "Calc.Controller.buttonOperHandler(' - ')";   
  Calc.View.buttonmul.onclick = "Calc.Controller.buttonOperHandler(' * ')";
  Calc.View.buttondiv.onclick = "Calc.Controller.buttonOperHandler('/')";
  Calc.View.buttonC.onclick = "Calc.Controller.buttonCHandler('C')";
  Calc.View.buttonMC.onclick = "Calc.Controller.buttonCHandler('MC')";  
  Calc.View.buttonMR.onclick = "Calc.Controller.buttonCHandler('MR')";
  Calc.View.buttonMmin.onclick = "Calc.Controller.buttonCHandler('Mmin')";  
  Calc.View.buttonMplus.onclick = "Calc.Controller.buttonCHandler('Mplus')";    
  Calc.View.buttonequal.onclick = "Calc.Controller.buttonequalHandler(this)";
},


} // end of Calc;
