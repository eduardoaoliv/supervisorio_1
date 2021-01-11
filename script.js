//var posX;
//var posY;
//var conteiner=document.getElementById("conteiner");
//var i;


//******************Cria o display motor********************************
/*
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
//****************Cria os eventos para os botões Auto e Man *********************
function displayBtnAutoMan(id){		
	var btnAuto=document.getElementById(id+"-auto");
	var btnMan=document.getElementById(id+"-man");	 
	
	btnAuto.addEventListener("click",function(){
		btnAuto.style.backgroundColor="green";
		btnAuto.value="true";		
		btnMan.style.backgroundColor="rgb(100,100,100)";
		btnMan.value="false";		
		logicaMotores(this);
	});
	btnMan.addEventListener("click",function(){
		btnAuto.style.backgroundColor="rgb(100,100,100)";
		btnAuto.value="false";		
		btnMan.style.backgroundColor="green";
		btnMan.value="true";		
		logicaMotores(this);
	});	
}
//****************Cria os eventos para os botões Liga e Desl *********************
function displayBtnLigaDesl(id){		
	var btnLiga=document.getElementById(id+"-liga");
	var btnDesl=document.getElementById(id+"-desl");
	
	btnLiga.addEventListener("click",function(id){
		btnLiga.style.backgroundColor="green";
		btnLiga.value="true";
		btnDesl.style.backgroundColor="rgb(55,55,55)";
		btnDesl.value="false";		
		logicaMotores(this);
	});
	btnDesl.addEventListener("click",function(id){
		btnLiga.style.backgroundColor="rgb(55,55,55)";
		btnLiga.value="false";
		btnDesl.style.backgroundColor="green";
		btnDesl.value="true";		
		logicaMotores(this);
	});
	
}
*/


/*
function acionaMotor(ID){
	

//*****************lógica de acionamento mt-01 - motor mexedor do tanque de SI******************
		
	var mt01Aciona=document.getElementById("mt01Acionado");
	var mt01Man=document.getElementById("mt-01-man");
	var mt01Auto=document.getElementById("mt-01-auto");
	var mt01Liga=document.getElementById("mt-01-liga");
	var mt01Desl=document.getElementById("mt-01-desl");

		if((mt01Man.value=="true")&&(mt01Liga.value=="true")){		
			mt01Aciona.style.display="unset";			
		}else mt01Aciona.style.display="none";

//*****************lógica de acionamento mt-02 - motor bomba do tanque de SI**********************	
	var mt02Aciona=document.getElementById("mt02Acionado");
	var mt02Man=document.getElementById("mt-02-man");
	var mt02Auto=document.getElementById("mt-02-auto");
	var mt02Liga=document.getElementById("mt-02-liga");
	var mt02Desl=document.getElementById("mt-02-desl");

		if((mt02Man.value=="true")&&(mt02Liga.value=="true")){		
			mt02Aciona.style.display="unset";			
		}else mt02Aciona.style.display="none";
}*/

//***************************** Motor Mexedor SI mt-01 ****************************

var btnMt01Liga=document.getElementById("mt_01_liga");
var btnMt01Desl=document.getElementById("mt_01_desl");
var btnMt01Auto=document.getElementById("mt_01_auto");
var btnMt01Man=document.getElementById("mt_01_man");
var displayMt01=document.getElementById("display_mt01");
var btnDisplayMt01=document.getElementById("mt_01");
var btnMt01Close=document.getElementById("btn_mt01_close");
var mt01Ligado=document.getElementById("mt01Acionado");

		btnDisplayMt01.addEventListener("click",function(){
			displayMt01.style.display="block";
		});

		btnMt01Auto.addEventListener("click",function(){
			btnMt01Auto.style.backgroundColor="green";
			btnMt01Auto.value="1";		
			btnMt01Man.style.backgroundColor="rgb(100,100,100)";
			btnMt01Man.value="0";
			mt01Manual();					
		})
		btnMt01Man.addEventListener("click",function(){
			btnMt01Auto.style.backgroundColor="rgb(100,100,100)";
			btnMt01Auto.value="0";		
			btnMt01Man.style.backgroundColor="green";
			btnMt01Man.value="1";
			mt01Manual();					
		});	
		btnMt01Liga.addEventListener("click",function(){
			btnMt01Liga.style.backgroundColor="green";
			btnMt01Liga.value="1";
			btnMt01Desl.style.backgroundColor="rgb(55,55,55)";
			btnMt01Desl.value="0";
			mt01Manual();					
		});
		btnMt01Desl.addEventListener("click",function(){
			btnMt01Liga.style.backgroundColor="rgb(55,55,55)";
			btnMt01Liga.value="0";
			btnMt01Desl.style.backgroundColor="green";
			btnMt01Desl.value="1";
			mt01Manual();					
		});	
		
		btnMt01Close.addEventListener("click",function(){
			displayMt01.style.display="none";
		});

// Acionamento manual do mexedor mt-01
function mt01Manual(){	
	if((btnMt01Man.value==="1" )&&(btnMt01Liga.value==="1")){
		mt01Ligado.style.display="block";		
	}else {
	mt01Ligado.style.display="none"};	
	}	 
	


//****************************** Motor Bomba de SI mt-02 ****************************
var btnMt02Liga=document.getElementById("mt_02_liga");
var btnMt02Desl=document.getElementById("mt_02_desl");
var btnMt02Auto=document.getElementById("mt_02_auto");
var btnMt02Man=document.getElementById("mt_02_man");
var displayMt02=document.getElementById("display_mt02");
var btnDisplayMt02=document.getElementById("mt_02");
var btnMt02Close=document.getElementById("btn_mt02_close");
var mt02Ligado=document.getElementById("mt02Acionado");
var tubSIMist01=document.getElementById("tub_SI_mist_01"); 
var tubSIMist02=document.getElementById("tub_SI_mist_02");
var tubSIMist03=document.getElementById("tub_SI_mist_03");
var tubSIMist031=document.getElementById("tub_SI_mist_031");
var tubSIMist032=document.getElementById("tub_SI_mist_032");
var tubSIMist034=document.getElementById("tub_SI_mist_034");
var tubSIMist035=document.getElementById("tub_SI_mist_035");
var tubSIMist036=document.getElementById("tub_SI_mist_036");


	btnDisplayMt02.addEventListener("click",function(){
		displayMt02.style.display="block";

		btnMt02Auto.addEventListener("click",function(){
			btnMt02Auto.style.backgroundColor="green";
			btnMt02Auto.value="1";		
			btnMt02Man.style.backgroundColor="rgb(100,100,100)";
			btnMt02Man.value="0";
			mt02Manual();		
		});
		btnMt02Man.addEventListener("click",function(){
			btnMt02Auto.style.backgroundColor="rgb(100,100,100)";
			btnMt02Auto.value="0";		
			btnMt02Man.style.backgroundColor="green";
			btnMt02Man.value="1";
			mt02Manual();			
		});	
		btnMt02Liga.addEventListener("click",function(){
			btnMt02Liga.style.backgroundColor="green";
			btnMt02Liga.value="1";
			btnMt02Desl.style.backgroundColor="rgb(55,55,55)";
			btnMt02Desl.value="0";
			mt02Manual();			
		});
		btnMt02Desl.addEventListener("click",function(){
			btnMt02Liga.style.backgroundColor="rgb(55,55,55)";
			btnMt02Liga.value="0";
			btnMt02Desl.style.backgroundColor="green";
			btnMt02Desl.value="1";
			mt02Manual();			
		});	
	});
	
	btnMt02Close.addEventListener("click",function(){
		displayMt02.style.display="none";		
	});

// Acionamento manual do mexedor mt-02
function mt02Manual(){	
	if((btnMt02Man.value==="1" )&&(btnMt02Liga.value==="1")){
		mt02Ligado.style.display="block";
		tubSIMist01.style.display="block";
		tubSIMist02.style.display="block";
		tubSIMist03.style.display="block";
		tubSIMist031.style.display="block";
		tubSIMist032.style.display="block";
		tubSIMist034.style.display="block";
		tubSIMist035.style.display="block";
		tubSIMist036.style.display="block";
	}else {
	mt02Ligado.style.display="none";
	tubSIMist01.style.display="none";
	tubSIMist02.style.display="none";
	tubSIMist03.style.display="none";
	tubSIMist031.style.display="none";
	tubSIMist032.style.display="none";
	tubSIMist034.style.display="none";	
	tubSIMist035.style.display="none";
	tubSIMist036.style.display="none";		
	}
}