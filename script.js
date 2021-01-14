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
			btnMt01Auto.value=1;		
			btnMt01Man.style.backgroundColor="rgb(100,100,100)";
			btnMt01Man.value="";
			mt01Manual();					
		})
		btnMt01Man.addEventListener("click",function(){
			btnMt01Auto.style.backgroundColor="rgb(100,100,100)";
			btnMt01Auto.value="";		
			btnMt01Man.style.backgroundColor="green";
			btnMt01Man.value=1;
			mt01Manual();					
		});	
		btnMt01Liga.addEventListener("click",function(){
			btnMt01Liga.style.backgroundColor="green";
			btnMt01Liga.value=1;
			btnMt01Desl.style.backgroundColor="rgb(55,55,55)";
			btnMt01Desl.value="";
			mt01Manual();					
		});
		btnMt01Desl.addEventListener("click",function(){
			btnMt01Liga.style.backgroundColor="rgb(55,55,55)";
			btnMt01Liga.value="";
			btnMt01Desl.style.backgroundColor="green";
			btnMt01Desl.value=1;
			mt01Manual();					
		});	
		
		btnMt01Close.addEventListener("click",function(){
			displayMt01.style.display="none";
		});

// Acionamento manual do mexedor mt-01
function mt01Manual(){	
	if((btnMt01Man.value==1 )&&(btnMt01Liga.value==1)){
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
			btnMt02Auto.value=1;		
			btnMt02Man.style.backgroundColor="rgb(100,100,100)";
			btnMt02Man.value="";
			mt02Manual();		
		});
		btnMt02Man.addEventListener("click",function(){
			btnMt02Auto.style.backgroundColor="rgb(100,100,100)";
			btnMt02Auto.value="";		
			btnMt02Man.style.backgroundColor="green";
			btnMt02Man.value=1;
			mt02Manual();			
		});	
		btnMt02Liga.addEventListener("click",function(){
			btnMt02Liga.style.backgroundColor="green";
			btnMt02Liga.value=1;
			btnMt02Desl.style.backgroundColor="rgb(55,55,55)";
			btnMt02Desl.value="";
			mt02Manual();			
		});
		btnMt02Desl.addEventListener("click",function(){
			btnMt02Liga.style.backgroundColor="rgb(55,55,55)";
			btnMt02Liga.value="";
			btnMt02Desl.style.backgroundColor="green";
			btnMt02Desl.value=1;
			mt02Manual();			
		});	
	});
	
	btnMt02Close.addEventListener("click",function(){
		displayMt02.style.display="none";		
	});

// Acionamento manual do mexedor de SI mt-02
function mt02Manual(){	
	if((btnMt02Man.value==1 )&&(btnMt02Liga.value==1)){
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
			btnMt03Auto.value=1;		
			btnMt03Man.style.backgroundColor="rgb(100,100,100)";
			btnMt03Man.value="";
			mt03Manual();					
		})
		btnMt03Man.addEventListener("click",function(){
			btnMt03Auto.style.backgroundColor="rgb(100,100,100)";
			btnMt03Auto.value="";		
			btnMt03Man.style.backgroundColor="green";
			btnMt03Man.value=1;
			mt03Manual();					
		});	
		btnMt03Liga.addEventListener("click",function(){
			btnMt03Liga.style.backgroundColor="green";
			btnMt03Liga.value=1;
			btnMt03Desl.style.backgroundColor="rgb(55,55,55)";
			btnMt03Desl.value="";
			mt03Manual();					
		});
		btnMt03Desl.addEventListener("click",function(){
			btnMt03Liga.style.backgroundColor="rgb(55,55,55)";
			btnMt03Liga.value="";
			btnMt03Desl.style.backgroundColor="green";
			btnMt03Desl.value=1;
			mt03Manual();					
		});	
		
		btnMt03Close.addEventListener("click",function(){
			displayMt03.style.display="none";
		});

		// Acionamento manual do motor misturador-1 mt-03
function mt03Manual(){	
	if((btnMt03Man.value==1 )&&(btnMt03Liga.value==1)){
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
			btnMt04Auto.value=1;		
			btnMt04Man.style.backgroundColor="rgb(100,100,100)";
			btnMt04Man.value="";
			mt04Manual();					
		})
		btnMt04Man.addEventListener("click",function(){
			btnMt04Auto.style.backgroundColor="rgb(100,100,100)";
			btnMt04Auto.value="";		
			btnMt04Man.style.backgroundColor="green";
			btnMt04Man.value=1;
			mt04Manual();					
		});	
		btnMt04Liga.addEventListener("click",function(){
			btnMt04Liga.style.backgroundColor="green";
			btnMt04Liga.value=1;
			btnMt04Desl.style.backgroundColor="rgb(55,55,55)";
			btnMt04Desl.value="";
			mt04Manual();					
		});
		btnMt04Desl.addEventListener("click",function(){
			btnMt04Liga.style.backgroundColor="rgb(55,55,55)";
			btnMt04Liga.value="";
			btnMt04Desl.style.backgroundColor="green";
			btnMt04Desl.value=1;
			mt04Manual();					
		});	
		
		btnMt04Close.addEventListener("click",function(){
			displayMt04.style.display="none";
		});

		// Acionamento manual do motor misturador-2 mt-04
function mt04Manual(){	
	if((btnMt04Man.value==1 )&&(btnMt04Liga.value==1)){
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
			btnMt05Auto.value=1;		
			btnMt05Man.style.backgroundColor="rgb(100,100,100)";
			btnMt05Man.value="";
			mt05Manual();					
		})
		btnMt05Man.addEventListener("click",function(){
			btnMt05Auto.style.backgroundColor="rgb(100,100,100)";
			btnMt05Auto.value="";		
			btnMt05Man.style.backgroundColor="green";
			btnMt05Man.value=1;
			mt05Manual();					
		});	
		btnMt05Liga.addEventListener("click",function(){
			btnMt05Liga.style.backgroundColor="green";
			btnMt05Liga.value=1;
			btnMt05Desl.style.backgroundColor="rgb(55,55,55)";
			btnMt05Desl.value="";
			mt05Manual();					
		});
		btnMt05Desl.addEventListener("click",function(){
			btnMt05Liga.style.backgroundColor="rgb(55,55,55)";
			btnMt05Liga.value="";
			btnMt05Desl.style.backgroundColor="green";
			btnMt05Desl.value=1;
			mt05Manual();					
		});	
		
		btnMt05Close.addEventListener("click",function(){
			displayMt05.style.display="none";
		});

		// Acionamento manual do motor misturador-2 mt-04
function mt05Manual(){	
	if((btnMt05Man.value==1 )&&(btnMt05Liga.value==1)){
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
			btnXv01Auto.value=1;		
			btnXv01Man.style.backgroundColor="rgb(100,100,100)";
			btnXv01Man.value="";
			xv01Manual();					
		})
		btnXv01Man.addEventListener("click",function(){
			btnXv01Auto.style.backgroundColor="rgb(100,100,100)";
			btnXv01Auto.value="";		
			btnXv01Man.style.backgroundColor="green";
			btnXv01Man.value=1;
			xv01Manual();					
		});	
		btnXv01Abre.addEventListener("click",function(){
			btnXv01Abre.style.backgroundColor="green";
			btnXv01Abre.value=1;
			btnXv01Fecha.style.backgroundColor="rgb(55,55,55)";
			btnXv01Fecha.value="";
			xv01Manual();					
		});
		btnXv01Fecha.addEventListener("click",function(){
			btnXv01Abre.style.backgroundColor="rgb(55,55,55)";
			btnXv01Abre.value="";
			btnXv01Fecha.style.backgroundColor="green";
			btnXv01Fecha.value=1;
			xv01Manual();					
		});	
		
		btnXv01Close.addEventListener("click",function(){
			displayXv01.style.display="none";
		});

		// Acionamento manual da vávl. SI do mist-1 xv-01
function xv01Manual(){	
	if((btnXv01Man.value==1 )&&(btnXv01Abre.value==1)){
		xv01Acionada.style.display="block";
		//tubSIxv01Mist1.style.display="block";		
	}	
	else {
	xv01Acionada.style.display="none";
	//tubSIxv01Mist1.style.display="none";
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
			btnXv02Auto.value=1;		
			btnXv02Man.style.backgroundColor="rgb(100,100,100)";
			btnXv02Man.value="";
			xv02Manual();					
		})
		btnXv02Man.addEventListener("click",function(){
			btnXv02Auto.style.backgroundColor="rgb(100,100,100)";
			btnXv02Auto.value="";		
			btnXv02Man.style.backgroundColor="green";
			btnXv02Man.value=1;
			xv02Manual();					
		});	
		btnXv02Abre.addEventListener("click",function(){
			btnXv02Abre.style.backgroundColor="green";
			btnXv02Abre.value=1;
			btnXv02Fecha.style.backgroundColor="rgb(55,55,55)";
			btnXv02Fecha.value="";
			xv02Manual();					
		});
		btnXv02Fecha.addEventListener("click",function(){
			btnXv02Abre.style.backgroundColor="rgb(55,55,55)";
			btnXv02Abre.value="";
			btnXv02Fecha.style.backgroundColor="green";
			btnXv02Fecha.value=1;
			xv02Manual();					
		});	
		
		btnXv02Close.addEventListener("click",function(){
			displayXv02.style.display="none";
		});

		// Acionamento manual da vávl. SI do mist-2 xv-02
function xv02Manual(){	
	if((btnXv02Man.value==1 )&&(btnXv02Abre.value==1)){
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
			btnXv03Auto.value=1;		
			btnXv03Man.style.backgroundColor="rgb(100,100,100)";
			btnXv03Man.value="";
			xv03Manual();					
		})
		btnXv03Man.addEventListener("click",function(){
			btnXv03Auto.style.backgroundColor="rgb(100,100,100)";
			btnXv03Auto.value="";		
			btnXv03Man.style.backgroundColor="green";
			btnXv03Man.value=1;
			xv03Manual();					
		});	
		btnXv03Abre.addEventListener("click",function(){
			btnXv03Abre.style.backgroundColor="green";
			btnXv03Abre.value=1;
			btnXv03Fecha.style.backgroundColor="rgb(55,55,55)";
			btnXv03Fecha.value="";
			xv03Manual();					
		});
		btnXv03Fecha.addEventListener("click",function(){
			btnXv03Abre.style.backgroundColor="rgb(55,55,55)";
			btnXv03Abre.value="";
			btnXv03Fecha.style.backgroundColor="green";
			btnXv03Fecha.value=1;
			xv03Manual();					
		});	
		
		btnXv03Close.addEventListener("click",function(){
			displayXv03.style.display="none";
		});

		// Acionamento manual da vávl. SI do mist-2 xv-02
function xv03Manual(){	
	if((btnXv03Man.value==1 )&&(btnXv03Abre.value==1)){
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
			btnXv011Auto.value=1;		
			btnXv011Man.style.backgroundColor="rgb(100,100,100)";
			btnXv011Man.value="";
			xv011Manual();					
		})
		btnXv011Man.addEventListener("click",function(){
			btnXv011Auto.style.backgroundColor="rgb(100,100,100)";
			btnXv011Auto.value="";		
			btnXv011Man.style.backgroundColor="green";
			btnXv011Man.value=1;
			xv011Manual();					
		});	
		btnXv011Abre.addEventListener("click",function(){
			btnXv011Abre.style.backgroundColor="green";
			btnXv011Abre.value=1;
			btnXv011Fecha.style.backgroundColor="rgb(55,55,55)";
			btnXv011Fecha.value="";
			xv011Manual();					
		});
		btnXv011Fecha.addEventListener("click",function(){
			btnXv011Abre.style.backgroundColor="rgb(55,55,55)";
			btnXv011Abre.value="";
			btnXv011Fecha.style.backgroundColor="green";
			btnXv011Fecha.value=1;
			xv011Manual();					
		});	
		
		btnXv011Close.addEventListener("click",function(){
			displayXv011.style.display="none";
		});

		// Acionamento manual da vávl. Sal do mist-1 xv-011
function xv011Manual(){	
	if((btnXv011Man.value==1 )&&(btnXv011Abre.value==1)){
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
			btnXv022Auto.value=1;		
			btnXv022Man.style.backgroundColor="rgb(100,100,100)";
			btnXv022Man.value="";
			xv022Manual();					
		})
		btnXv022Man.addEventListener("click",function(){
			btnXv022Auto.style.backgroundColor="rgb(100,100,100)";
			btnXv022Auto.value="";		
			btnXv022Man.style.backgroundColor="green";
			btnXv022Man.value=1;
			xv022Manual();					
		});	
		btnXv022Abre.addEventListener("click",function(){
			btnXv022Abre.style.backgroundColor="green";
			btnXv022Abre.value=1;
			btnXv022Fecha.style.backgroundColor="rgb(55,55,55)";
			btnXv022Fecha.value="";
			xv022Manual();					
		});
		btnXv022Fecha.addEventListener("click",function(){
			btnXv022Abre.style.backgroundColor="rgb(55,55,55)";
			btnXv022Abre.value="";
			btnXv022Fecha.style.backgroundColor="green";
			btnXv022Fecha.value=1;
			xv022Manual();					
		});	
		
		btnXv022Close.addEventListener("click",function(){
			displayXv022.style.display="none";
		});

		// Acionamento manual da vávl. Sal do mist-2 xv-022
function xv022Manual(){	
	if((btnXv022Man.value==1 )&&(btnXv022Abre.value==1)){
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
			btnXv033Auto.value=1;		
			btnXv033Man.style.backgroundColor="rgb(100,100,100)";
			btnXv033Man.value="";
			xv033Manual();					
		})
		btnXv033Man.addEventListener("click",function(){
			btnXv033Auto.style.backgroundColor="rgb(100,100,100)";
			btnXv033Auto.value="";		
			btnXv033Man.style.backgroundColor="green";
			btnXv033Man.value=1;
			xv033Manual();					
		});	
		btnXv033Abre.addEventListener("click",function(){
			btnXv033Abre.style.backgroundColor="green";
			btnXv033Abre.value=1;
			btnXv033Fecha.style.backgroundColor="rgb(55,55,55)";
			btnXv033Fecha.value="";
			xv033Manual();					
		});
		btnXv033Fecha.addEventListener("click",function(){
			btnXv033Abre.style.backgroundColor="rgb(55,55,55)";
			btnXv033Abre.value="";
			btnXv033Fecha.style.backgroundColor="green";
			btnXv033Fecha.value=1;
			xv033Manual();					
		});	
		
		btnXv033Close.addEventListener("click",function(){
			displayXv033.style.display="none";
		});

		// Acionamento manual da vávl. Sal do mist-3 xv-033
function xv033Manual(){	
	if((btnXv033Man.value==1 )&&(btnXv033Abre.value==1)){
		xv033Acionada.style.display="block";			
	}	
	else {
	xv033Acionada.style.display="none";	
	}	
}

//****************************** Válvulas transporte de SAL ************************

//****************************** Válvula Pulmão-1 xv-101 ****************************
var btnXv101Abre=document.getElementById("xv_101_abre");
var btnXv101Fecha=document.getElementById("xv_101_fecha");
var btnXv101Auto=document.getElementById("xv_101_auto");
var btnXv101Man=document.getElementById("xv_101_man");
var displayXv101=document.getElementById("display_xv101");
var btnDisplayXv101=document.getElementById("xv_101");
var btnXv101Close=document.getElementById("btn_xv101_close");
var xv101Acionada=document.getElementById("xv101Acionada");


		btnDisplayXv101.addEventListener("click",function(){
			displayXv101.style.display="block";
		});

		btnXv101Auto.addEventListener("click",function(){
			btnXv101Auto.style.backgroundColor="green";
			btnXv101Auto.value=1;		
			btnXv101Man.style.backgroundColor="rgb(100,100,100)";
			btnXv101Man.value="";
			xv101Manual();					
		})
		btnXv101Man.addEventListener("click",function(){
			btnXv101Auto.style.backgroundColor="rgb(100,100,100)";
			btnXv101Auto.value="";		
			btnXv101Man.style.backgroundColor="green";
			btnXv101Man.value=1;
			xv101Manual();					
		});	
		btnXv101Abre.addEventListener("click",function(){
			btnXv101Abre.style.backgroundColor="green";
			btnXv101Abre.value=1;
			btnXv101Fecha.style.backgroundColor="rgb(55,55,55)";
			btnXv101Fecha.value="";
			xv101Manual();					
		});
		btnXv101Fecha.addEventListener("click",function(){
			btnXv101Abre.style.backgroundColor="rgb(55,55,55)";
			btnXv101Abre.value="";
			btnXv101Fecha.style.backgroundColor="green";
			btnXv101Fecha.value=1;
			xv101Manual();					
		});	
		
		btnXv101Close.addEventListener("click",function(){
			displayXv101.style.display="none";
		});

		// Acionamento manual da vávl. Pulmão-1 xv-101
function xv101Manual(){	
	if((btnTranspAuto.value=="")&&(btnXv101Man.value==1 )&&(btnXv101Abre.value==1)){
		xv101Acionada.style.display="block";			
	}	
	else {
	xv101Acionada.style.display="none";	
	}	
}	  	

//****************************** Válvula Pulmão-2 xv-102 ****************************
var btnXv102Abre=document.getElementById("xv_102_abre");
var btnXv102Fecha=document.getElementById("xv_102_fecha");
var btnXv102Auto=document.getElementById("xv_102_auto");
var btnXv102Man=document.getElementById("xv_102_man");
var displayXv102=document.getElementById("display_xv102");
var btnDisplayXv102=document.getElementById("xv_102");
var btnXv102Close=document.getElementById("btn_xv102_close");
var xv102Acionada=document.getElementById("xv102Acionada");


		btnDisplayXv102.addEventListener("click",function(){
			displayXv102.style.display="block";
		});

		btnXv102Auto.addEventListener("click",function(){
			btnXv102Auto.style.backgroundColor="green";
			btnXv102Auto.value=1;		
			btnXv102Man.style.backgroundColor="rgb(100,100,100)";
			btnXv102Man.value="";
			xv102Manual();					
		})
		btnXv102Man.addEventListener("click",function(){
			btnXv102Auto.style.backgroundColor="rgb(100,100,100)";
			btnXv102Auto.value="";		
			btnXv102Man.style.backgroundColor="green";
			btnXv102Man.value=1;
			xv102Manual();					
		});	
		btnXv102Abre.addEventListener("click",function(){
			btnXv102Abre.style.backgroundColor="green";
			btnXv102Abre.value=1;
			btnXv102Fecha.style.backgroundColor="rgb(55,55,55)";
			btnXv102Fecha.value="";
			xv102Manual();					
		});
		btnXv102Fecha.addEventListener("click",function(){
			btnXv102Abre.style.backgroundColor="rgb(55,55,55)";
			btnXv102Abre.value="";
			btnXv102Fecha.style.backgroundColor="green";
			btnXv102Fecha.value=1;
			xv102Manual();					
		});	
		
		btnXv102Close.addEventListener("click",function(){
			displayXv102.style.display="none";
		});

		// Acionamento manual da vávl. Pulmão-2 xv-102
function xv102Manual(){	
	if((btnTranspAuto.value=="")&&(btnXv102Man.value==1 )&&(btnXv102Abre.value==1)){
		xv102Acionada.style.display="block";			
	}	
	else {
	xv102Acionada.style.display="none";	
	}	
}	  	

//****************************** Válvula Pulmão-3 xv-102 ****************************
var btnXv103Abre=document.getElementById("xv_103_abre");
var btnXv103Fecha=document.getElementById("xv_103_fecha");
var btnXv103Auto=document.getElementById("xv_103_auto");
var btnXv103Man=document.getElementById("xv_103_man");
var displayXv103=document.getElementById("display_xv103");
var btnDisplayXv103=document.getElementById("xv_103");
var btnXv103Close=document.getElementById("btn_xv103_close");
var xv103Acionada=document.getElementById("xv103Acionada");


		btnDisplayXv103.addEventListener("click",function(){
			displayXv103.style.display="block";
		});

		btnXv103Auto.addEventListener("click",function(){
			btnXv103Auto.style.backgroundColor="green";
			btnXv103Auto.value=1;		
			btnXv103Man.style.backgroundColor="rgb(100,100,100)";
			btnXv103Man.value="";
			xv103Manual();					
		})
		btnXv103Man.addEventListener("click",function(){
			btnXv103Auto.style.backgroundColor="rgb(100,100,100)";
			btnXv103Auto.value="";		
			btnXv103Man.style.backgroundColor="green";
			btnXv103Man.value=1;
			xv103Manual();					
		});	
		btnXv103Abre.addEventListener("click",function(){
			btnXv103Abre.style.backgroundColor="green";
			btnXv103Abre.value=1;
			btnXv103Fecha.style.backgroundColor="rgb(55,55,55)";
			btnXv103Fecha.value="";
			xv103Manual();					
		});
		btnXv103Fecha.addEventListener("click",function(){
			btnXv103Abre.style.backgroundColor="rgb(55,55,55)";
			btnXv103Abre.value="";
			btnXv103Fecha.style.backgroundColor="green";
			btnXv103Fecha.value=1;
			xv103Manual();					
		});	
		
		btnXv103Close.addEventListener("click",function(){
			displayXv103.style.display="none";
		});

		// Acionamento manual da vávl. Pulmão-3 xv-103
function xv103Manual(){	
	if((btnTranspAuto.value=="")&&(btnXv103Man.value==1 )&&(btnXv103Abre.value==1)){
		xv103Acionada.style.display="block";			
	}	
	else {
	xv103Acionada.style.display="none";	
	}	
}	  	

//****************************** Válvula Inlet xv-100 ****************************
var btnXv100Abre=document.getElementById("xv_100_abre");
var btnXv100Fecha=document.getElementById("xv_100_fecha");
var btnXv100Auto=document.getElementById("xv_100_auto");
var btnXv100Man=document.getElementById("xv_100_man");
var displayXv100=document.getElementById("display_xv100");
var btnDisplayXv100=document.getElementById("xv_100");
var btnXv100Close=document.getElementById("btn_xv100_close");
var xv100Acionada=document.getElementById("xv100Acionada");


		btnDisplayXv100.addEventListener("click",function(){
			displayXv100.style.display="block";
		});

		btnXv100Auto.addEventListener("click",function(){
			btnXv100Auto.style.backgroundColor="green";
			btnXv100Auto.value=1;		
			btnXv100Man.style.backgroundColor="rgb(100,100,100)";
			btnXv100Man.value="";
			xv100Manual();					
		})
		btnXv100Man.addEventListener("click",function(){
			btnXv100Auto.style.backgroundColor="rgb(100,100,100)";
			btnXv100Auto.value="";		
			btnXv100Man.style.backgroundColor="green";
			btnXv100Man.value=1;
			xv100Manual();					
		});	
		if(btnXv100Auto.value!=1){ btnXv100Abre.addEventListener("click",function(){
			btnXv100Abre.style.backgroundColor="green";
			btnXv100Abre.value=1;
			btnXv100Fecha.style.backgroundColor="rgb(55,55,55)";
			btnXv100Fecha.value="";
			xv100Manual();
		});}
		if(btnXv100Auto.value!=1){ btnXv100Fecha.addEventListener("click",function(){
			btnXv100Abre.style.backgroundColor="rgb(55,55,55)";
			btnXv100Abre.value="";
			btnXv100Fecha.style.backgroundColor="green";
			btnXv100Fecha.value=1;
			xv100Manual();					
		});}	
		
		btnXv100Close.addEventListener("click",function(){
			displayXv100.style.display="none";
		});

		// Acionamento manual da vávl. Inlet xv-100
function xv100Manual(){	
	if((btnTranspAuto.value=="")&&(btnXv100Man.value==1 )&&(btnXv100Abre.value==1)){
		xv100Acionada.style.display="block";			
	}	
	else {
	xv100Acionada.style.display="none";	
	}	
}	  	

//****************************** Válvula Alivio xv-110 ****************************
var btnXv110Abre=document.getElementById("xv_110_abre");
var btnXv110Fecha=document.getElementById("xv_110_fecha");
var btnXv110Auto=document.getElementById("xv_110_auto");
var btnXv110Man=document.getElementById("xv_110_man");
var displayXv110=document.getElementById("display_xv110");
var btnDisplayXv110=document.getElementById("xv_110");
var btnXv110Close=document.getElementById("btn_xv110_close");
var xv110Acionada=document.getElementById("xv110Acionada");






		btnDisplayXv110.addEventListener("click",function(){
			displayXv110.style.display="block";
		});

		btnXv110Auto.addEventListener("click",function(){
			btnXv110Auto.style.backgroundColor="green";
			btnXv110Auto.value=1;		
			btnXv110Man.style.backgroundColor="rgb(100,100,100)";
			btnXv110Man.value="";
			xv110Manual();					
		});
		btnXv110Man.addEventListener("click",function(){
			btnXv110Auto.style.backgroundColor="rgb(100,100,100)";
			btnXv110Auto.value="";		
			btnXv110Man.style.backgroundColor="green";
			btnXv110Man.value=1;
			xv110Manual();					
		});	
		btnXv110Abre.addEventListener("click",function(){
			btnXv110Abre.style.backgroundColor="green";
			btnXv110Abre.value=1;
			btnXv110Fecha.style.backgroundColor="rgb(55,55,55)";
			btnXv110Fecha.value="";
			xv110Manual();					
		});
		btnXv110Fecha.addEventListener("click",function(){
			btnXv110Abre.style.backgroundColor="rgb(55,55,55)";
			btnXv110Abre.value="";
			btnXv110Fecha.style.backgroundColor="green";
			btnXv110Fecha.value=1;
			xv110Manual();					
		});	
		
		btnXv110Close.addEventListener("click",function(){
			displayXv110.style.display="none";
		});

		// Acionamento manual da vávl. Inlet xv-100
function xv110Manual(){	
	if((btnTranspAuto.value=="")&&(btnXv110Man.value==1 )&&(btnXv110Abre.value==1)){
		xv110Acionada.style.display="block";			
	}	
	else {
	xv110Acionada.style.display="none";	
	}	
}	  	

//****************************** Botão controle Tq.SI ****************************

var btnSIbtnAuto=document.getElementById("SIbtnAuto");
var btnSIbtnMan=document.getElementById("SIbtnMan");
var displayTqSI=document.getElementById("display_TqSI");
var btnCtrlTqSI=document.getElementById("controlTqSI");
var btnTqSIclose=document.getElementById("btn_TqSI_close");
var setNivelSI=document.getElementById("setNivelSI");
var nivelTqSImax=document.getElementById("LTSI");
var btnSISetEnviar=document.getElementById("SISetEnviar");
var SIBarraNivel=document.getElementById("SIBarraNivel");
var setpointNivelTqSI=0;


		btnCtrlTqSI.addEventListener("click",function(){
			displayTqSI.style.display="block";
		});

		btnSIbtnAuto.addEventListener("click",function(){
			btnSIbtnAuto.style.backgroundColor="green";
			btnSIbtnAuto.value=1;		
			btnSIbtnMan.style.backgroundColor="rgb(100,100,100)";
			btnSIbtnMan.value="";								
		})
		btnSIbtnMan.addEventListener("click",function(){
			btnSIbtnAuto.style.backgroundColor="rgb(100,100,100)";
			btnSIbtnAuto.value="";		
			btnSIbtnMan.style.backgroundColor="green";
			btnSIbtnMan.value=1;								
		});	
			
		
		btnTqSIclose.addEventListener("click",function(){
			displayTqSI.style.display="none";
		});

		btnSISetEnviar.addEventListener("click",function(){
			setpointNivelTqSI=Number(7-(setNivelSI.value*7)/100);
			SIBarraNivel.style.height=setpointNivelTqSI+"vw";
		});
		
		
//****************************** Botão controle Transportador SAL ****************************


var displayTransp=document.getElementById("display_Transp");
var btnctrlTransp=document.getElementById("controlTransp");
var btnTranspClose=document.getElementById("btn_Transp_close");
var setPressao=document.getElementById("setPressao");
var btnTranspSetEnviar=document.getElementById("TranspSetEnviar");
var btnTranspAuto=document.getElementById("TranspbtnAuto");
var btnTranspMan=document.getElementById("TranspbtnMan");
var PT100=document.getElementById("Pt100");
var Lsh100=document.getElementById("lsh100");


		btnctrlTransp.addEventListener("click",function(){
			displayTransp.style.display="block";
			
		});

		btnTranspAuto.addEventListener("click",function(){
			btnTranspAuto.style.backgroundColor="green";
			btnTranspAuto.value=1;		
			btnTranspMan.style.backgroundColor="rgb(100,100,100)";
			btnTranspMan.value="";
		transpAutomatico();								
		})
		btnTranspMan.addEventListener("click",function(){
			btnTranspAuto.style.backgroundColor="rgb(100,100,100)";
			btnTranspAuto.value="";		
			btnTranspMan.style.backgroundColor="green";
			btnTranspMan.value=1;								
		});	
			
		
		btnTranspClose.addEventListener("click",function(){
			displayTransp.style.display="none";
		});

		btnTranspSetEnviar.addEventListener("click",function(){
			
		});	  	

function transpAutomatico(){
if(setPressao.value<20||setPressao.value>26){
	alert("A pressão ideal para o envio de sal é entre 22 PSI e 26 PSI");
	btnTranspAuto.style.backgroundColor="rgb(100,100,100)";
}	
else if(btnTranspAuto.value==1){
	xv110Acionada.style.display="none";
	xv100Acionada.style.display="none";
	xv101Acionada.style.display="none";
	xv102Acionada.style.display="none";
	xv103Acionada.style.display="none";
	
	var transpStep=0;
	xv100Acionada.style.display="block";	

	setTimeout(function(){		
		Lsh100.style.display="block"
		lsh100.value=1;
		setTimeout(function() {xv100Acionada.style.display="none"}, 600);
			var cont=0;
			var Timer1s=setInterval(function(){
				cont++;				
				var pt100valor=cont;
					PT100.innerHTML=pt100valor;
					if(pt100valor>=setPressao.value){							
					clearInterval(Timer1s);
					
					}
			},300);
	},3000);

		

	
		
	
	

	


}

}