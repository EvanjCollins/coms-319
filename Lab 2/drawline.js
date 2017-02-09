var mytime;
var choice = ' ';
var direction = 'right';
var c = document.getElementById('canvasId');
var ctx = c.getContext('2d');


function startstopTime(){
    var elem = document.getElementById("timebutton");

    if (elem.value == "Start"){ 
		elem.value = "Stop";
	    mytime = setInterval(drawLine, 100);
	}
    else{
		elem.value = "Start";
		clearInterval(mytime);
	}
}

//move left or right
function setLeftorRight(choice){
	choose = choice;
	if(choose == 'right'){
		if(direction == 'up'){
			ctx.translate(1,0);
			direction = 'right';
		}
		else if(direction == 'down'){
			ctx.translate(-1,0);
			direction = 'left';		
		}
		else if(direction == 'left'){
			ctx.translate(0,1);
			direction = 'up';
		}
		else if(direction == 'right'){
			ctx.translate(0,-1);
			direction = 'down';	
		}
	}
	else if(choose == 'left'){
		if(direction == 'up'){
			ctx.translate(-1,0);
			direction = 'left';
		}
		else if(direction == 'down'){
			ctx.translate(1,0);
			direction = 'right';		
		}
		else if(direction == 'left'){
			ctx.translate(0,-1);
			direction = 'down';
		}
		else if(direction == 'right'){
			ctx.translate(0,1);
			direction == 'up';	
		}
	}
	else if(choose == ' '){
		ctx.translate(1,0);
	}
}

function drawLine(){
	ctx.lineWidth = 3;	
	ctx.beginPath();
	setLeftorRight(choice);
    ctx.strokeStyle = 'red';
    ctx.moveTo(0, 200);
    ctx.lineTo(0, 203);
    ctx.stroke();
}

