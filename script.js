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
					display_motorBtnLiga.setAttribute("id",displayMotorId+"-liga");					
					display_motorBtnLiga.innerHTML="Liga";					
					displayMotor.appendChild(display_motorBtnLiga);
						var display_motorBtnDesl=document.createElement("button");
						display_motorBtnDesl.setAttribute("class","motor_btnDesl");
						display_motorBtnDesl.setAttribute("id",displayMotorId+"-desl");
						display_motorBtnDesl.innerHTML="Desl.";
						displayMotor.appendChild(display_motorBtnDesl);
							var display_motorBtnAuto=document.createElement("button");
							display_motorBtnAuto.setAttribute("class","motor_btnAuto");
							display_motorBtnAuto.setAttribute("id",displayMotorId+"-auto")
							display_motorBtnAuto.innerHTML="Auto";
							displayMotor.appendChild(display_motorBtnAuto);
								var display_motorBtnMan=document.createElement("button");
								display_motorBtnMan.setAttribute("class","motor_btnMan");
								display_motorBtnMan.setAttribute("id",displayMotorId+"-man")
								display_motorBtnMan.innerHTML="Man";
								displayMotor.appendChild(display_motorBtnMan);
		displayBtnAutoMan(displayMotorId);
		displayBtnLigaDesl(displayMotorId);	
								



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

function displayBtnAutoMan(id){		
	var btnAuto=document.getElementById(id+"-auto");
	var btnMan=document.getElementById(id+"-man");
	btnAuto.addEventListener("click",function(){
		btnAuto.style.backgroundColor="green";
		btnAuto.value="true";
		btnMan.style.backgroundColor="rgb(100,100,100)";
		btnMan.value="false";
		acionaMotor(btnAuto);/*envia o id mt-__-auto para a função com seus atributos*/
	});
	btnMan.addEventListener("click",function(){
		btnAuto.style.backgroundColor="rgb(100,100,100)";
		btnAuto.value="false";
		btnMan.style.backgroundColor="green";
		btnMan.value="true";
		acionaMotor(btnMan);/*envia o id mt-__-man para a função com seus atributos*/
	});
	
}

function displayBtnLigaDesl(id){		
	var btnLiga=document.getElementById(id+"-liga");
	var btnDesl=document.getElementById(id+"-desl");
	btnLiga.addEventListener("click",function(id){
		btnLiga.style.backgroundColor="green";
		btnLiga.value="true";
		btnDesl.style.backgroundColor="rgb(55,55,55)";
		btnDesl.value="false";		
		acionaMotor(btnLiga);/*envia o id mt-__-liga para a função com seus atributos*/
	});
	btnDesl.addEventListener("click",function(id){
		btnLiga.style.backgroundColor="rgb(55,55,55)";
		btnLiga.value="false";
		btnDesl.style.backgroundColor="green";
		btnDesl.value="true";
		acionaMotor(btnDesl);/*envia o id mt-__-desl para a função com seus atributos*/
	});
	
}

function acionaMotor(id){	

}