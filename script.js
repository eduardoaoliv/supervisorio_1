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

// Acionamento manual do mexedor de SI mt-02
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

//****************************** Motor Misturador-1 mt-03 ****************************
var btnMt03Liga=document.getElementById("mt_03_liga");
var btnMt03Desl=document.getElementById("mt_03_desl");
var btnMt03Auto=document.getElementById("mt_03_auto");
var btnMt03Man=document.getElementById("mt_03_man");
var displayMt03=document.getElementById("display_mt03");
var btnDisplayMt03=document.getElementById("mt_03");
var btnMt03Close=document.getElementById("btn_mt03_close");
var mt03Ligado=document.getElementById("mt03Acionado");

		btnDisplayMt03.addEventListener("click",function(){
			displayMt03.style.display="block";
		});

		btnMt03Auto.addEventListener("click",function(){
			btnMt03Auto.style.backgroundColor="green";
			btnMt03Auto.value="1";		
			btnMt03Man.style.backgroundColor="rgb(100,100,100)";
			btnMt03Man.value="0";
			mt03Manual();					
		})
		btnMt03Man.addEventListener("click",function(){
			btnMt03Auto.style.backgroundColor="rgb(100,100,100)";
			btnMt03Auto.value="0";		
			btnMt03Man.style.backgroundColor="green";
			btnMt03Man.value="1";
			mt03Manual();					
		});	
		btnMt03Liga.addEventListener("click",function(){
			btnMt03Liga.style.backgroundColor="green";
			btnMt03Liga.value="1";
			btnMt03Desl.style.backgroundColor="rgb(55,55,55)";
			btnMt03Desl.value="0";
			mt03Manual();					
		});
		btnMt03Desl.addEventListener("click",function(){
			btnMt03Liga.style.backgroundColor="rgb(55,55,55)";
			btnMt03Liga.value="0";
			btnMt03Desl.style.backgroundColor="green";
			btnMt03Desl.value="1";
			mt03Manual();					
		});	
		
		btnMt03Close.addEventListener("click",function(){
			displayMt03.style.display="none";
		});

		// Acionamento manual do motor misturador-1 mt-03
function mt03Manual(){	
	if((btnMt03Man.value==="1" )&&(btnMt03Liga.value==="1")){
		mt03Ligado.style.display="block";		
	}else {
	mt03Ligado.style.display="none"};	
	}	 

//****************************** Motor Misturador-2 mt-04 ****************************
var btnMt04Liga=document.getElementById("mt_04_liga");
var btnMt04Desl=document.getElementById("mt_04_desl");
var btnMt04Auto=document.getElementById("mt_04_auto");
var btnMt04Man=document.getElementById("mt_04_man");
var displayMt04=document.getElementById("display_mt04");
var btnDisplayMt04=document.getElementById("mt_04");
var btnMt04Close=document.getElementById("btn_mt04_close");
var mt04Ligado=document.getElementById("mt04Acionado");

		btnDisplayMt04.addEventListener("click",function(){
			displayMt04.style.display="block";
		});

		btnMt04Auto.addEventListener("click",function(){
			btnMt04Auto.style.backgroundColor="green";
			btnMt04Auto.value="1";		
			btnMt04Man.style.backgroundColor="rgb(100,100,100)";
			btnMt04Man.value="0";
			mt04Manual();					
		})
		btnMt04Man.addEventListener("click",function(){
			btnMt04Auto.style.backgroundColor="rgb(100,100,100)";
			btnMt04Auto.value="0";		
			btnMt04Man.style.backgroundColor="green";
			btnMt04Man.value="1";
			mt04Manual();					
		});	
		btnMt04Liga.addEventListener("click",function(){
			btnMt04Liga.style.backgroundColor="green";
			btnMt04Liga.value="1";
			btnMt04Desl.style.backgroundColor="rgb(55,55,55)";
			btnMt04Desl.value="0";
			mt04Manual();					
		});
		btnMt04Desl.addEventListener("click",function(){
			btnMt04Liga.style.backgroundColor="rgb(55,55,55)";
			btnMt04Liga.value="0";
			btnMt04Desl.style.backgroundColor="green";
			btnMt04Desl.value="1";
			mt04Manual();					
		});	
		
		btnMt04Close.addEventListener("click",function(){
			displayMt04.style.display="none";
		});

		// Acionamento manual do motor misturador-2 mt-04
function mt04Manual(){	
	if((btnMt04Man.value==="1" )&&(btnMt04Liga.value==="1")){
		mt04Ligado.style.display="block";		
	}else {
	mt04Ligado.style.display="none"};	
	}	 

//****************************** Motor Misturador-3 mt-05 ****************************
var btnMt05Liga=document.getElementById("mt_05_liga");
var btnMt05Desl=document.getElementById("mt_05_desl");
var btnMt05Auto=document.getElementById("mt_05_auto");
var btnMt05Man=document.getElementById("mt_05_man");
var displayMt05=document.getElementById("display_mt05");
var btnDisplayMt05=document.getElementById("mt_05");
var btnMt05Close=document.getElementById("btn_mt05_close");
var mt05Ligado=document.getElementById("mt05Acionado");

		btnDisplayMt05.addEventListener("click",function(){
			displayMt05.style.display="block";
		});

		btnMt05Auto.addEventListener("click",function(){
			btnMt05Auto.style.backgroundColor="green";
			btnMt05Auto.value="1";		
			btnMt05Man.style.backgroundColor="rgb(100,100,100)";
			btnMt05Man.value="0";
			mt05Manual();					
		})
		btnMt05Man.addEventListener("click",function(){
			btnMt05Auto.style.backgroundColor="rgb(100,100,100)";
			btnMt05Auto.value="0";		
			btnMt05Man.style.backgroundColor="green";
			btnMt05Man.value="1";
			mt05Manual();					
		});	
		btnMt05Liga.addEventListener("click",function(){
			btnMt05Liga.style.backgroundColor="green";
			btnMt05Liga.value="1";
			btnMt05Desl.style.backgroundColor="rgb(55,55,55)";
			btnMt05Desl.value="0";
			mt05Manual();					
		});
		btnMt05Desl.addEventListener("click",function(){
			btnMt05Liga.style.backgroundColor="rgb(55,55,55)";
			btnMt05Liga.value="0";
			btnMt05Desl.style.backgroundColor="green";
			btnMt05Desl.value="1";
			mt05Manual();					
		});	
		
		btnMt05Close.addEventListener("click",function(){
			displayMt05.style.display="none";
		});

		// Acionamento manual do motor misturador-2 mt-04
function mt05Manual(){	
	if((btnMt05Man.value==="1" )&&(btnMt05Liga.value==="1")){
		mt05Ligado.style.display="block";		
	}else {
	mt05Ligado.style.display="none"};	
	}	 


//****************************** Válvula SI mist-1 xv-01 ****************************
var btnXv01Abre=document.getElementById("xv_01_abre");
var btnXv01Fecha=document.getElementById("xv_01_fecha");
var btnXv01Auto=document.getElementById("xv_01_auto");
var btnXv01Man=document.getElementById("xv_01_man");
var displayXv01=document.getElementById("display_xv01");
var btnDisplayXv01=document.getElementById("xv_01");
var btnXv01Close=document.getElementById("btn_xv01_close");
var xv01Acionada=document.getElementById("xv01Acionada");
var tubSIxv01Mist1=document.getElementById("tub_SI_xv01_mist1");

		btnDisplayXv01.addEventListener("click",function(){
			displayXv01.style.display="block";
		});

		btnXv01Auto.addEventListener("click",function(){
			btnXv01Auto.style.backgroundColor="green";
			btnXv01Auto.value="1";		
			btnXv01Man.style.backgroundColor="rgb(100,100,100)";
			btnXv01Man.value="0";
			xv01Manual();					
		})
		btnXv01Man.addEventListener("click",function(){
			btnXv01Auto.style.backgroundColor="rgb(100,100,100)";
			btnXv01Auto.value="0";		
			btnXv01Man.style.backgroundColor="green";
			btnXv01Man.value="1";
			xv01Manual();					
		});	
		btnXv01Abre.addEventListener("click",function(){
			btnXv01Abre.style.backgroundColor="green";
			btnXv01Abre.value="1";
			btnXv01Fecha.style.backgroundColor="rgb(55,55,55)";
			btnXv01Fecha.value="0";
			xv01Manual();					
		});
		btnXv01Fecha.addEventListener("click",function(){
			btnXv01Abre.style.backgroundColor="rgb(55,55,55)";
			btnXv01Abre.value="0";
			btnXv01Fecha.style.backgroundColor="green";
			btnXv01Fecha.value="1";
			xv01Manual();					
		});	
		
		btnXv01Close.addEventListener("click",function(){
			displayXv01.style.display="none";
		});

		// Acionamento manual da vávl. SI do mist-1 xv-01
function xv01Manual(){	
	if((btnXv01Man.value==="1" )&&(btnXv01Abre.value==="1")){
		xv01Acionada.style.display="block";
		tubSIxv01Mist1.style.display="block";		
	}	
	else {
	xv01Acionada.style.display="none";
	tubSIxv01Mist1.style.display="none";
	}	
}	 

//****************************** Válvula SI mist-2 xv-02 ****************************
var btnXv02Abre=document.getElementById("xv_02_abre");
var btnXv02Fecha=document.getElementById("xv_02_fecha");
var btnXv02Auto=document.getElementById("xv_02_auto");
var btnXv02Man=document.getElementById("xv_02_man");
var displayXv02=document.getElementById("display_xv02");
var btnDisplayXv02=document.getElementById("xv_02");
var btnXv02Close=document.getElementById("btn_xv02_close");
var xv02Acionada=document.getElementById("xv02Acionada");

		btnDisplayXv02.addEventListener("click",function(){
			displayXv02.style.display="block";
		});

		btnXv02Auto.addEventListener("click",function(){
			btnXv02Auto.style.backgroundColor="green";
			btnXv02Auto.value="1";		
			btnXv02Man.style.backgroundColor="rgb(100,100,100)";
			btnXv02Man.value="0";
			xv02Manual();					
		})
		btnXv02Man.addEventListener("click",function(){
			btnXv02Auto.style.backgroundColor="rgb(100,100,100)";
			btnXv02Auto.value="0";		
			btnXv02Man.style.backgroundColor="green";
			btnXv02Man.value="1";
			xv02Manual();					
		});	
		btnXv02Abre.addEventListener("click",function(){
			btnXv02Abre.style.backgroundColor="green";
			btnXv02Abre.value="1";
			btnXv02Fecha.style.backgroundColor="rgb(55,55,55)";
			btnXv02Fecha.value="0";
			xv02Manual();					
		});
		btnXv02Fecha.addEventListener("click",function(){
			btnXv02Abre.style.backgroundColor="rgb(55,55,55)";
			btnXv02Abre.value="0";
			btnXv02Fecha.style.backgroundColor="green";
			btnXv02Fecha.value="1";
			xv02Manual();					
		});	
		
		btnXv02Close.addEventListener("click",function(){
			displayXv02.style.display="none";
		});

		// Acionamento manual da vávl. SI do mist-2 xv-02
function xv02Manual(){	
	if((btnXv02Man.value==="1" )&&(btnXv02Abre.value==="1")){
		xv02Acionada.style.display="block";		
	}else {
	xv02Acionada.style.display="none"};	
	}	 	

//****************************** Válvula SI mist-3 xv-03 ****************************
var btnXv03Abre=document.getElementById("xv_03_abre");
var btnXv03Fecha=document.getElementById("xv_03_fecha");
var btnXv03Auto=document.getElementById("xv_03_auto");
var btnXv03Man=document.getElementById("xv_03_man");
var displayXv03=document.getElementById("display_xv03");
var btnDisplayXv03=document.getElementById("xv_03");
var btnXv03Close=document.getElementById("btn_xv03_close");
var xv03Acionada=document.getElementById("xv03Acionada");

		btnDisplayXv03.addEventListener("click",function(){
			displayXv03.style.display="block";
		});

		btnXv03Auto.addEventListener("click",function(){
			btnXv03Auto.style.backgroundColor="green";
			btnXv03Auto.value="1";		
			btnXv03Man.style.backgroundColor="rgb(100,100,100)";
			btnXv03Man.value="0";
			xv03Manual();					
		})
		btnXv03Man.addEventListener("click",function(){
			btnXv03Auto.style.backgroundColor="rgb(100,100,100)";
			btnXv03Auto.value="0";		
			btnXv03Man.style.backgroundColor="green";
			btnXv03Man.value="1";
			xv03Manual();					
		});	
		btnXv03Abre.addEventListener("click",function(){
			btnXv03Abre.style.backgroundColor="green";
			btnXv03Abre.value="1";
			btnXv03Fecha.style.backgroundColor="rgb(55,55,55)";
			btnXv03Fecha.value="0";
			xv03Manual();					
		});
		btnXv03Fecha.addEventListener("click",function(){
			btnXv03Abre.style.backgroundColor="rgb(55,55,55)";
			btnXv03Abre.value="0";
			btnXv03Fecha.style.backgroundColor="green";
			btnXv03Fecha.value="1";
			xv03Manual();					
		});	
		
		btnXv03Close.addEventListener("click",function(){
			displayXv03.style.display="none";
		});

		// Acionamento manual da vávl. SI do mist-2 xv-02
function xv03Manual(){	
	if((btnXv03Man.value==="1" )&&(btnXv03Abre.value==="1")){
		xv03Acionada.style.display="block";		
	}else {
	xv03Acionada.style.display="none"};	
	}	

//****************************** Válvula Sal mist-1 xv-011 ****************************
var btnXv011Abre=document.getElementById("xv_011_abre");
var btnXv011Fecha=document.getElementById("xv_011_fecha");
var btnXv011Auto=document.getElementById("xv_011_auto");
var btnXv011Man=document.getElementById("xv_011_man");
var displayXv011=document.getElementById("display_xv011");
var btnDisplayXv011=document.getElementById("xv_011");
var btnXv011Close=document.getElementById("btn_xv011_close");
var xv011Acionada=document.getElementById("xv011Acionada");


		btnDisplayXv011.addEventListener("click",function(){
			displayXv011.style.display="block";
		});

		btnXv011Auto.addEventListener("click",function(){
			btnXv011Auto.style.backgroundColor="green";
			btnXv011Auto.value="1";		
			btnXv011Man.style.backgroundColor="rgb(100,100,100)";
			btnXv011Man.value="0";
			xv011Manual();					
		})
		btnXv011Man.addEventListener("click",function(){
			btnXv011Auto.style.backgroundColor="rgb(100,100,100)";
			btnXv011Auto.value="0";		
			btnXv011Man.style.backgroundColor="green";
			btnXv011Man.value="1";
			xv011Manual();					
		});	
		btnXv011Abre.addEventListener("click",function(){
			btnXv011Abre.style.backgroundColor="green";
			btnXv011Abre.value="1";
			btnXv011Fecha.style.backgroundColor="rgb(55,55,55)";
			btnXv011Fecha.value="0";
			xv011Manual();					
		});
		btnXv011Fecha.addEventListener("click",function(){
			btnXv011Abre.style.backgroundColor="rgb(55,55,55)";
			btnXv011Abre.value="0";
			btnXv011Fecha.style.backgroundColor="green";
			btnXv011Fecha.value="1";
			xv011Manual();					
		});	
		
		btnXv011Close.addEventListener("click",function(){
			displayXv011.style.display="none";
		});

		// Acionamento manual da vávl. Sal do mist-1 xv-011
function xv011Manual(){	
	if((btnXv011Man.value==="1" )&&(btnXv011Abre.value==="1")){
		xv011Acionada.style.display="block";			
	}	
	else {
	xv011Acionada.style.display="none";	
	}	
}	  	

//****************************** Válvula Sal mist-2 xv-022 ****************************
var btnXv022Abre=document.getElementById("xv_022_abre");
var btnXv022Fecha=document.getElementById("xv_022_fecha");
var btnXv022Auto=document.getElementById("xv_022_auto");
var btnXv022Man=document.getElementById("xv_022_man");
var displayXv022=document.getElementById("display_xv022");
var btnDisplayXv022=document.getElementById("xv_022");
var btnXv022Close=document.getElementById("btn_xv022_close");
var xv022Acionada=document.getElementById("xv022Acionada");


		btnDisplayXv022.addEventListener("click",function(){
			displayXv022.style.display="block";
		});

		btnXv022Auto.addEventListener("click",function(){
			btnXv022Auto.style.backgroundColor="green";
			btnXv022Auto.value="1";		
			btnXv022Man.style.backgroundColor="rgb(100,100,100)";
			btnXv022Man.value="0";
			xv022Manual();					
		})
		btnXv022Man.addEventListener("click",function(){
			btnXv022Auto.style.backgroundColor="rgb(100,100,100)";
			btnXv022Auto.value="0";		
			btnXv022Man.style.backgroundColor="green";
			btnXv022Man.value="1";
			xv022Manual();					
		});	
		btnXv022Abre.addEventListener("click",function(){
			btnXv022Abre.style.backgroundColor="green";
			btnXv022Abre.value="1";
			btnXv022Fecha.style.backgroundColor="rgb(55,55,55)";
			btnXv022Fecha.value="0";
			xv022Manual();					
		});
		btnXv022Fecha.addEventListener("click",function(){
			btnXv022Abre.style.backgroundColor="rgb(55,55,55)";
			btnXv022Abre.value="0";
			btnXv022Fecha.style.backgroundColor="green";
			btnXv022Fecha.value="1";
			xv022Manual();					
		});	
		
		btnXv022Close.addEventListener("click",function(){
			displayXv022.style.display="none";
		});

		// Acionamento manual da vávl. Sal do mist-2 xv-022
function xv022Manual(){	
	if((btnXv022Man.value==="1" )&&(btnXv022Abre.value==="1")){
		xv022Acionada.style.display="block";			
	}	
	else {
	xv022Acionada.style.display="none";	
	}	
}

//****************************** Válvula Sal mist-3 xv-033 ****************************
var btnXv033Abre=document.getElementById("xv_033_abre");
var btnXv033Fecha=document.getElementById("xv_033_fecha");
var btnXv033Auto=document.getElementById("xv_033_auto");
var btnXv033Man=document.getElementById("xv_033_man");
var displayXv033=document.getElementById("display_xv033");
var btnDisplayXv033=document.getElementById("xv_033");
var btnXv033Close=document.getElementById("btn_xv033_close");
var xv033Acionada=document.getElementById("xv033Acionada");


		btnDisplayXv033.addEventListener("click",function(){
			displayXv033.style.display="block";
		});

		btnXv033Auto.addEventListener("click",function(){
			btnXv033Auto.style.backgroundColor="green";
			btnXv033Auto.value="1";		
			btnXv033Man.style.backgroundColor="rgb(100,100,100)";
			btnXv033Man.value="0";
			xv033Manual();					
		})
		btnXv033Man.addEventListener("click",function(){
			btnXv033Auto.style.backgroundColor="rgb(100,100,100)";
			btnXv033Auto.value="0";		
			btnXv033Man.style.backgroundColor="green";
			btnXv033Man.value="1";
			xv033Manual();					
		});	
		btnXv033Abre.addEventListener("click",function(){
			btnXv033Abre.style.backgroundColor="green";
			btnXv033Abre.value="1";
			btnXv033Fecha.style.backgroundColor="rgb(55,55,55)";
			btnXv033Fecha.value="0";
			xv033Manual();					
		});
		btnXv033Fecha.addEventListener("click",function(){
			btnXv033Abre.style.backgroundColor="rgb(55,55,55)";
			btnXv033Abre.value="0";
			btnXv033Fecha.style.backgroundColor="green";
			btnXv033Fecha.value="1";
			xv033Manual();					
		});	
		
		btnXv033Close.addEventListener("click",function(){
			displayXv033.style.display="none";
		});

		// Acionamento manual da vávl. Sal do mist-3 xv-033
function xv033Manual(){	
	if((btnXv033Man.value==="1" )&&(btnXv033Abre.value==="1")){
		xv033Acionada.style.display="block";			
	}	
	else {
	xv033Acionada.style.display="none";	
	}	
}