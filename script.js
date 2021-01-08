var posX;
var posY;
var conteiner=document.getElementById("conteiner");
var i;


displayControlMotors();
function displayControlMotors(){
	var displayCtrMot=document.getElementsByClassName("motor");
	posMouse();
	for(i=0;i<displayCtrMot.length;i++){
		displayCtrMot[i].addEventListener("click",function(){			
			var displayMotor=document.createElement("div");
			var displayMotorId=this.id;//captura o id do botão que é acionado
			displayMotor.setAttribute("class","display_motor");				
			displayMotor.draggable="true";
			console.log(displayMotorId);				
			displayMotor.style.marginLeft=posX+"px";
			displayMotor.style.marginTop=(posY-150)+"px";
			conteiner.appendChild(displayMotor);

			var display_motorIdent=document.createElement("div");
			display_motorIdent.setAttribute("class","display_ident");
			display_motorIdent.innerHTML=displayMotorId;
			displayMotor.appendChild(display_motorIdent);
				var display_btnClose=document.createElement("button");
				display_btnClose.setAttribute("class","display_btnClose");
				display_btnClose.innerHTML="X";
				display_motorIdent.appendChild(display_btnClose);
				display_btnClose.addEventListener("click",function(){
				displayMotor.remove();
				});
					var display_motorBtnLiga=document.createElement("button");
					display_motorBtnLiga.setAttribute("class","motor_btnLiga");
					display_motorBtnLiga.innerHTML="Liga";
					displayMotor.appendChild(display_motorBtnLiga);
						var display_motorBtnDesl=document.createElement("button");
						display_motorBtnDesl.setAttribute("class","motor_btnDesl");
						display_motorBtnDesl.innerHTML="Desl.";
						displayMotor.appendChild(display_motorBtnDesl);
							var display_motorBtnAuto=document.createElement("button");
							display_motorBtnAuto.setAttribute("class","motor_btnAuto");
							display_motorBtnAuto.innerHTML="Auto";
							displayMotor.appendChild(display_motorBtnAuto);
								var display_motorBtnMan=document.createElement("button");
								display_motorBtnMan.setAttribute("class","motor_btnMan");
								display_motorBtnMan.innerHTML="Man";
								displayMotor.appendChild(display_motorBtnMan);



		});		
	}		
}		

function posMouse(){
	document.querySelector('body').addEventListener('mousemove', function(event) {
 		posX = event.clientX;
      	posY = event.clientY;      	
		});
}

function clicarArrastar(){
		var displays=document.getElementsByClassName("display_motor");
		const dropZones=document.getElementById("conteiner");
		
			for(var i=0;i<displays.length;i++){
			displays[i].addEventListener("dragstart",e=>{
			e.dataTransfer.setData("Text",e.target.id);			
		});
		}

		dropZones.addEventListener("dragover", e=>{
			e.preventDefault();
		});
		
		dropZones.addEventListener("drop", e=>{
			const id=e.dataTransfer.getData("Text");			
			const element=document.getElementById(id);			
			e.target.appendChild(element);
		});
}		