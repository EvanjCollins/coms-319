// calculatorbinary.JS
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
  reset : 0,
  length : 8,
  length2 : 8
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
  buttonequal : {id: "buttonequal", type: "button", value: '=', onclick:""}
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
		if(Calc.Model.length != 0){	
		document.getElementById("textRow").value += num;
		Calc.Model.arg1 = Calc.Model.arg1*10 + num;
		Calc.Model.length--;
		}
	}
	else{
		if(Calc.Model.length2 != 0){
		document.getElementById("textRow").value += num;
		Calc.Model.arg2 = Calc.Model.arg2*10 + num;
		Calc.Model.length2--;
		}
	}
	},

	ConvertBase : function (num) {
        return {
            from : function (baseFrom) {
                return {
                    to : function (baseTo) {
                        return parseInt(num, baseFrom).toString(baseTo);
                    }
                };
            }
        };
    },
	bin2dec : function (num) {
        return Calc.Controller.ConvertBase(num).from(2).to(10);
    },
	dec2bin : function (num) {
        return Calc.Controller.ConvertBase(num).from(10).to(2);
    },
	buttonOperHandler : function(oper) {
		if(Calc.Model.operation == 0){
		document.getElementById("textRow").value += oper;
		Calc.Model.operation = oper;
		if(oper == '~'){
		Calc.Model.operation = oper;
		document.getElementById("textRow").value = Calc.Controller.bin2dec(Calc.Model.arg1);
		}
		}
	},
	buttonArrHandler : function(arr){
		if(Calc.Model.operation == 0){
		if(arr == '<<'){
			var i;
			temp = document.getElementById("textRow").value;
			document.getElementById("textRow").value = '';
			for(i = 0; i<Calc.Model.length; i++){
			document.getElementById("textRow").value += 0;
			}
			document.getElementById("textRow").value += temp;
		}
		if(arr == '>>'){
			for(i = 0; i<Calc.Model.length; i++){
			document.getElementById("textRow").value += 0;
			Calc.Model.arg1 = Calc.Model.arg1*10 + 0;
			}
		}
		}
		else{
		if(arr == '<<'){
			var i;
			temp = Calc.Model.arg2;
			document.getElementById("textRow").value = Calc.Model.arg1 + Calc.Model.operation + '';
			for(i = 0; i<Calc.Model.length2; i++){
			document.getElementById("textRow").value += 0;
			}
			document.getElementById("textRow").value += temp;
		}
		if(arr == '>>'){
			for(i = 0; i<Calc.Model.length2; i++){
			document.getElementById("textRow").value += 0;
			Calc.Model.arg2 = Calc.Model.arg2*10;
			}
		}
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
	buttonEqualHandler : function(that){
	if(Calc.Model.operation == ' - '){
		temp1 = Calc.Controller.bin2dec(Calc.Model.arg1);
		temp2 = Calc.Controller.bin2dec(Calc.Model.arg2);
		temp3 = Number(temp1)-Number(temp2);
		val = Calc.Controller.dec2bin(temp3);
		Calc.Controller.renew();
	}
	else if(Calc.Model.operation == ' + '){
		temp1 = Calc.Controller.bin2dec(Calc.Model.arg1);
		temp2 = Calc.Controller.bin2dec(Calc.Model.arg2);
		temp3 = Number(temp1)+Number(temp2);
		val = Calc.Controller.dec2bin(temp3);
		Calc.Controller.renew();
	}
	else if(Calc.Model.operation == ' & '){
		temp1 = Calc.Controller.bin2dec(Calc.Model.arg1);
		temp2 = Calc.Controller.bin2dec(Calc.Model.arg2);
		temp3 = temp1+temp2;
		val = Calc.Controller.dec2bin(temp3);
		Calc.Controller.renew();
	}
	else if(Calc.Model.operation == ' % '){
		temp1 = Calc.Controller.bin2dec(Calc.Model.arg1);
		temp2 = Calc.Controller.bin2dec(Calc.Model.arg2);
		temp3 = Number(temp1) % Number(temp2);
		val = Calc.Controller.dec2bin(temp3);
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
  Calc.View.button0.onclick = "Calc.Controller.buttonHandler(0)";
  Calc.View.button1.onclick = "Calc.Controller.buttonHandler(1)";
  Calc.View.buttonadd.onclick = "Calc.Controller.buttonOperHandler(' + ')";
  Calc.View.buttonsub.onclick = "Calc.Controller.buttonOperHandler(' - ')";   
  Calc.View.buttonmul.onclick = "Calc.Controller.buttonOperHandler(' * ')";
  Calc.View.buttondiv.onclick = "Calc.Controller.buttonOperHandler('/')";
  Calc.View.buttonmod.onclick = "Calc.Controller.buttonOperHandler(' % ')";
  Calc.View.buttonamp.onclick = "Calc.Controller.buttonOperHandler(' & ')";   
  Calc.View.buttontog.onclick = "Calc.Controller.buttonOperHandler('|')";
  Calc.View.buttonleftarr.onclick = "Calc.Controller.buttonArrHandler('<<')";
  Calc.View.buttonrightarr.onclick = "Calc.Controller.buttonArrHandler('>>')";
  Calc.View.buttonsquig.onclick = "Calc.Controller.buttonOperHandler('~')";
  Calc.View.buttonequal.onclick = "Calc.Controller.buttonEqualHandler(this)";
  Calc.View.buttonC.onclick = "Calc.Controller.buttonCHandler('C')";
  Calc.View.buttonMC.onclick = "Calc.Controller.buttonCHandler('MC')";  
  Calc.View.buttonMR.onclick = "Calc.Controller.buttonCHandler('MR')";
  Calc.View.buttonMmin.onclick = "Calc.Controller.buttonCHandler('Mmin')";  
  Calc.View.buttonMplus.onclick = "Calc.Controller.buttonCHandler('Mplus')";   
}


} // end of Calc;
