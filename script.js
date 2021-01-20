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




//*************************** Receitas ****************************************
var receitaEnviar=document.getElementById("receita_enviar");
var closeReceitas=document.getElementById("close_receitas");
var btnReceita=document.getElementById("btn_receita");
var modalReceitas=document.getElementById("modal_receitas");
var receitas=document.getElementsByName("receita");
var numReceita=10;
var fator_sal;
var fator_si;

btnReceita.addEventListener("click",function(){
	modalReceitas.style.display="block";	
});
closeReceitas.addEventListener("click",function(){
	modalReceitas.style.display="none";
});

receitaEnviar.addEventListener("click",function() {    
    for (var i = 0; i < receitas.length; i++) {
        if (receitas[i].checked) {
            //console.log("Escolheu: " + receitas[i].value);
            numReceita=receitas[i].value;                        
        };
    };
    numeroReceita();    
});

function numeroReceita(){
switch(numReceita){
	case "0": 
			fator_sal=30;
			fator_si=7.5;			
	break;
	case "1": 
			fator_sal=31;
			fator_si=6.5;			
	break;
	case "2": 
			fator_sal=32;
			fator_si=5.5;			
	break;
	case "3": 
			fator_sal=33;
			fator_si=4.5;			
	break;
}
}
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
	if((btnSIbtnAuto.value=="")&&(btnMt01Man.value==1 )&&(btnMt01Liga.value==1)){
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

function enchimentoTubSI(){
	mt02Ligado.style.display="block";
	tubSIMist01.style.display="block";
	tubSIMist02.style.display="block";
	tubSIMist03.style.display="block";
	tubSIMist031.style.display="block";
	tubSIMist032.style.display="block";
	tubSIMist034.style.display="block";
	tubSIMist035.style.display="block";
	tubSIMist036.style.display="block";
}

function esvaziamentoTubSI(){
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

// Acionamento manual da bomba de SI mt-02
function mt02Manual(){	
	if((btnSIbtnAuto.value=="")&&(btnMt02Man.value==1 )&&(btnMt02Liga.value==1)){
		if(setpointNivelTqSI<=6.3){
			enchimentoTubSI();
			}else{mt02Ligado.style.display="block";}		
	}else {
		esvaziamentoTubSI();			
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
	if((btnMist1Auto.value=="")&&(btnMt03Man.value==1 )&&(btnMt03Liga.value==1)){
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
	if((btnMist2Auto.value=="")&&(btnMt04Man.value==1 )&&(btnMt04Liga.value==1)){
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
	if((btnMist3Auto.value=="")&&(btnMt05Man.value==1 )&&(btnMt05Liga.value==1)){
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
	if((btnMist1Auto.value=="")&&(btnXv01Man.value==1 )&&(btnXv01Abre.value==1)){
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
	if((btnMist2Auto.value=="")&&(btnXv02Man.value==1 )&&(btnXv02Abre.value==1)){
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
	if((btnMist3Auto.value=="")&&(btnXv03Man.value==1 )&&(btnXv03Abre.value==1)){
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
	if((btnMist1Auto.value=="")&&(btnXv011Man.value==1 )&&(btnXv011Abre.value==1)){
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
	if((btnMist2Auto.value=="")&&(btnXv022Man.value==1 )&&(btnXv022Abre.value==1)){
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
	if((btnMist3Auto.value=="")&&(btnXv033Man.value==1 )&&(btnXv033Abre.value==1)){	
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
var setpointNivelTqSI=7;//corresponde a 0% nivel

SIBarraNivel.style.height=7+"vw";//inicia a barra de nível em 0

		btnCtrlTqSI.addEventListener("click",function(){
			displayTqSI.style.display="block";
		});

		btnSIbtnAuto.addEventListener("click",function(){
			btnSIbtnAuto.style.backgroundColor="green";
			btnSIbtnAuto.value=1;		
			btnSIbtnMan.style.backgroundColor="rgb(100,100,100)";
			btnSIbtnMan.value="";
			tqSIAutomatico();								
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
			setpointNivelTqSI=Number(7-(setNivelSI.value*7)/100);//7 é o height da barra de nível
			SIBarraNivel.style.height=setpointNivelTqSI+"vw";
		});

//****************************** Tanque de SI em automático ****************************
function tqSIAutomatico(){
	if(btnSIbtnAuto.value==1){
		mt01Ligado.style.display="none";
		mt02Ligado.style.display="none";
		esvaziamentoTubSI();
	}
	if(setpointNivelTqSI>6.3){//equivale ao nível de 10%
		alert("Abastecer Tq. SI com nível mínimo de 10% ");
	}else{mt01Ligado.style.display="block";}	
}
		
		
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
		//btnTranspSetEnviar.addEventListener("click",function(){			
		//});	

var tubTranspVert1=document.getElementById("tub_TranspVert1");
var tubTranspVert2=document.getElementById("tub_TranspVert2");
var tubTranspVert3=document.getElementById("tub_TranspVert3");
var tubTranspVert4=document.getElementById("tub_TranspVert4");
var tubTranspVert5=document.getElementById("tub_TranspVert5");
var tubTranspHoriz1=document.getElementById("tub_TranspHoriz1");
var tubTranspHoriz2=document.getElementById("tub_TranspHoriz2");
var tubTranspVert6=document.getElementById("tub_TranspVert6");
var tubTranspVert7=document.getElementById("tub_TranspVert7");
var tubTranspVert8=document.getElementById("tub_TranspVert8");

var contagem1=0;//será zerado somente quando o ciclo do misturador acontecer 3 vezes
var contagem2=0;
var contagem3=0;


//****************************** Transportador SAL em automático ****************************

function transpAutomatico(){
if((setPressao.value<22||setPressao.value>26) || (btnPulmao1Hab.value=="" && btnPulmao2Hab.value=="" && btnPulmao3Hab.value=="")){
	alert("A pressão ideal para o envio de sal é entre 22 PSI e 26 PSI e é necessário habilitar pelo menos um tanque para envio");
	btnTranspAuto.style.backgroundColor="rgb(100,100,100)";
}	
else if(btnTranspAuto.value==1){
	xv110Acionada.style.display="none";
	xv100Acionada.style.display="none";
	xv101Acionada.style.display="none";
	xv102Acionada.style.display="none";
	xv103Acionada.style.display="none";

	function cicloTransporteSal(){	
		
		xv100Acionada.style.display="block";
		setTimeout(function(){		
			Lsh100.style.display="block"
			lsh100.value=1;
				setTimeout(function() {xv100Acionada.style.display="none"}, 400);//tempo para fechar a xv100 após lsh100
					var cont=0; //variável para simular o valor da pressão 			
					var Timer01=setInterval(function(){
						cont++;				
						var pt100valor=cont;
						PT100.innerHTML=pt100valor+"PSI";
						tubTranspVert1.style.display="block";
						tubTranspVert2.style.display="block";
						tubTranspVert3.style.display="block";
						tubTranspVert4.style.display="block";
						tubTranspVert5.style.display="block";
						tubTranspHoriz1.style.display="block";
						tubTranspHoriz2.style.display="block";	
							if(pt100valor>=setPressao.value){							
								clearInterval(Timer01);
								despressuriza();
								if(envio==1){//verifica se está enviando para pulmão-1
									contagem1++;
									tubTranspVert6.style.display="block";
									if(contagem1==3){//após 3º envio simula nível alto no pulmão-1
									LSH101.value=1;
									LSH101.style.display="block";
								}
								}
								if(envio==2){
									contagem2++;
									tubTranspVert7.style.display="block";
									if(contagem2==3){
									LSH102.value=1;
									LSH102.style.display="block";
								}
								}
								if(envio==3){
									contagem3++;
									tubTranspVert8.style.display="block";
									if(contagem3==3){
									LSH103.value=1;
									LSH103.style.display="block";
								}
								}
								
							}
					},400);//tempo simulando subida da pressão
		},3000);//tempo para descer o sal para o tq. transportador	
	
	}

	function despressuriza(){
		var p=setPressao.value;
		var Timer02=setInterval(function(){
						Lsh100.style.display="none";
						lsh100.value="";
						p--;				
						var pt100valor=p;
						PT100.innerHTML=pt100valor+"PSI";
						if(pt100valor==0){							
								clearInterval(Timer02);
								xv101Acionada.style.display="none";	
								xv102Acionada.style.display="none";
								xv103Acionada.style.display="none";
								tubTranspVert1.style.display="none";
								tubTranspVert2.style.display="none";
								tubTranspVert3.style.display="none";
								tubTranspVert4.style.display="none";
								tubTranspVert5.style.display="none";
								tubTranspHoriz1.style.display="none";
								tubTranspHoriz2.style.display="none";
								transpAutomatico();	//chama a função para verificar se o nivel do pulmão está cheio e para o ciclo de enchimento(contagem1,...,3)			
							}
		},250);				
	}
}
var envio=0;
if(btnPulmao1Hab.value==1 && LSH101.value==""){envio=1;}
else if(btnPulmao2Hab.value==1 && LSH102.value==""){envio=2;}
else if(btnPulmao3Hab.value==1 && LSH103.value==""){envio=3;}
//else(alert("Tanques cheios ou não habilitados"));//Está mantendo a animação da tubulação até que se de o OK.

	switch(envio){
		case 1:							
			xv101Acionada.style.display="block";
			cicloTransporteSal();
		break;
		case 2:			
			xv102Acionada.style.display="block";
			cicloTransporteSal();
		break;
		case 3:			
			xv103Acionada.style.display="block";
			cicloTransporteSal();
		break;
	}
}


//****************************** Pulmão-1 Hab/Desab e nível ****************************
var LSH101=document.getElementById("lsh101");
LSH101.value="";
var btnPulmao1Hab=document.getElementById("pulmao1Hab");
var btnPulmao1Desab=document.getElementById("pulmao1Desab");		

		btnPulmao1Hab.addEventListener("click",function(){
			btnPulmao1Hab.style.backgroundColor="green";
			btnPulmao1Hab.value=1;		
			btnPulmao1Desab.style.backgroundColor="rgb(100,100,100)";
			btnPulmao1Desab.value="";								
		});
		btnPulmao1Desab.addEventListener("click",function(){
			btnPulmao1Hab.style.backgroundColor="rgb(100,100,100)";
			btnPulmao1Hab.value="";		
			btnPulmao1Desab.style.backgroundColor="green";
			btnPulmao1Desab.value=1;								
		});	
			
//****************************** Pulmão-2 Hab/Desab e nível****************************
var LSH102=document.getElementById("lsh102");
LSH102.value="";
var btnPulmao2Hab=document.getElementById("pulmao2Hab");
var btnPulmao2Desab=document.getElementById("pulmao2Desab");		

		btnPulmao2Hab.addEventListener("click",function(){
			btnPulmao2Hab.style.backgroundColor="green";
			btnPulmao2Hab.value=1;		
			btnPulmao2Desab.style.backgroundColor="rgb(100,100,100)";
			btnPulmao2Desab.value="";								
		});
		btnPulmao2Desab.addEventListener("click",function(){
			btnPulmao2Hab.style.backgroundColor="rgb(100,100,100)";
			btnPulmao2Hab.value="";		
			btnPulmao2Desab.style.backgroundColor="green";
			btnPulmao2Desab.value=1;								
		});		

//****************************** Pulmão-3 Hab/Desab e nível****************************
var LSH103=document.getElementById("lsh103");
LSH103.value="";
var btnPulmao3Hab=document.getElementById("pulmao3Hab");
var btnPulmao3Desab=document.getElementById("pulmao3Desab");		

		btnPulmao3Hab.addEventListener("click",function(){
			btnPulmao3Hab.style.backgroundColor="green";
			btnPulmao3Hab.value=1;		
			btnPulmao3Desab.style.backgroundColor="rgb(100,100,100)";
			btnPulmao3Desab.value="";								
		});
		btnPulmao3Desab.addEventListener("click",function(){
			btnPulmao3Hab.style.backgroundColor="rgb(100,100,100)";
			btnPulmao3Hab.value="";		
			btnPulmao3Desab.style.backgroundColor="green";
			btnPulmao3Desab.value=1;								
		});			
		
//****************************** Mist-1 Auto/Man ****************************

var btnMist1Auto=document.getElementById("mist1Auto");
var btnMist1Man=document.getElementById("mist1Man");		

		btnMist1Auto.addEventListener("click",function(){
			btnMist1Auto.style.backgroundColor="green";
			btnMist1Auto.value=1;		
			btnMist1Man.style.backgroundColor="rgb(100,100,100)";
			btnMist1Man.value="";
			mist1Automatico();								
		});
		btnMist1Man.addEventListener("click",function(){
			btnMist1Auto.style.backgroundColor="rgb(100,100,100)";
			btnMist1Auto.value="";		
			btnMist1Man.style.backgroundColor="green";
			btnMist1Man.value=1;								
		});	

//****************************** Mist-2 Auto/Man ****************************

var btnMist2Auto=document.getElementById("mist2Auto");
var btnMist2Man=document.getElementById("mist2Man");		

		btnMist2Auto.addEventListener("click",function(){
			btnMist2Auto.style.backgroundColor="green";
			btnMist2Auto.value=1;		
			btnMist2Man.style.backgroundColor="rgb(100,100,100)";
			btnMist2Man.value="";
			mist2Automatico();								
		});
		btnMist2Man.addEventListener("click",function(){
			btnMist2Auto.style.backgroundColor="rgb(100,100,100)";
			btnMist2Auto.value="";		
			btnMist2Man.style.backgroundColor="green";
			btnMist2Man.value=1;								
		});

//****************************** Mist-3 Auto/Man ****************************

var btnMist3Auto=document.getElementById("mist3Auto");
var btnMist3Man=document.getElementById("mist3Man");		

		btnMist3Auto.addEventListener("click",function(){
			btnMist3Auto.style.backgroundColor="green";
			btnMist3Auto.value=1;		
			btnMist3Man.style.backgroundColor="rgb(100,100,100)";
			btnMist3Man.value="";
			mist3Automatico();								
		});
		btnMist3Man.addEventListener("click",function(){
			btnMist3Auto.style.backgroundColor="rgb(100,100,100)";
			btnMist3Auto.value="";		
			btnMist3Man.style.backgroundColor="green";
			btnMist3Man.value=1;								
		});




//****************************** Mist-1 Automático****************************		
var wit01=document.getElementById("WIT_01");
var btnDescarregaMist1=document.getElementById("btnDescarregaMist1");
var wit01Sal=0;
var wit01SI=0;
var wit01Total=0;

function mist1Automatico(){
	if(btnSIbtnAuto.value=="" || setpointNivelTqSI>6.3){
		alert("Tanque de SI em manual ou nível nível abaixo de 10%");			
	}
	if(numReceita==10){
		   		alert("Escolha uma receita");
	}
	if(tubTranspVert6.style.display!="block")
		{alert("Pulmão-1 vazio");}
	if(btnMist1Auto.value==1 && setpointNivelTqSI<=6.3 && numReceita!=10 
		&& tubTranspVert6.style.display==="block" && btnDescarregaMist1.style.display!="block")
	{
		xv01Acionada.style.display="none";
		xv011Acionada.style.display="none";	
		mt03Ligado.style.display="none";	
		mist1DosagemSal();			
	}

	function mist1DosagemSal(){		
		xv011Acionada.style.display="block";
		var i=0;
			var Tmist1Sal=setInterval(function(){
				i++;
				wit01Sal=i*fator_sal;
				wit01Total=wit01Sal+wit01SI
				wit01.innerHTML=wit01Total+"Kg";
				if(i>="10"){clearInterval(Tmist1Sal);}
			},1000);
		setTimeout(function(){			
		xv011Acionada.style.display="none";	
		mist1DosagemSI();
		},10000);		
	}

	function mist1DosagemSI(){
		xv01Acionada.style.display="block";
		enchimentoTubSI();
		var i=0;
			var Tmist1SI=setInterval(function(){
				i++;
				var wit01SI=i*fator_si;
				wit01Total=wit01Sal+wit01SI
				wit01.innerHTML=wit01Total+"Kg";
				if(i>="10"){clearInterval(Tmist1SI);}
			},1000);
		setTimeout(function(){			
		xv01Acionada.style.display="none";
		esvaziamentoTubSI();
		mist1Misturador();	
		},10000);		
	}

	function mist1Misturador(){
		mt03Ligado.style.display="block";
		setTimeout(function(){
			mt03Ligado.style.display="none";
			avisoDescarregaMist1();
		},15000);		
	}
}

	function avisoDescarregaMist1(){
		btnDescarregaMist1.style.display="block";
		btnDescarregaMist1.addEventListener("click",function(){
			if(wit01Total>=375 && mt03Ligado.style.display==="none"){
			var c=wit01Total;
			var Tenv1auto=setInterval(function(){
			c=c-10;
			wit01.innerHTML=c+"Kg";
			btnDescarregaMist1.innerHTML="AGUARDE";
			mt03Ligado.style.display="block";
				if(c<="0"){
					clearInterval(Tenv1auto);
					btnDescarregaMist1.style.display="none";
					btnDescarregaMist1.innerHTML="Descarregar";
					mt03Ligado.style.display="none";
				}						
			},500);
			}
		})
	}

//****************************** Mist-2 Automático****************************		

var wit02=document.getElementById("WIT_02");
var btnDescarregaMist2=document.getElementById("btnDescarregaMist2");
var wit02Sal=0;
var wit02SI=0;
var wit02Total=0;

function mist2Automatico(){
	if(btnSIbtnAuto.value=="" || setpointNivelTqSI>6.3){
		alert("Tanque de SI em manual ou nível nível abaixo de 10%");			
	}
	if(numReceita==10){
		   		alert("Escolha uma receita");
	}
	if(tubTranspVert7.style.display!="block")
		{alert("Pulmão-2 vazio");}
	if(btnMist2Auto.value==1 && setpointNivelTqSI<=6.3 && numReceita!=10 && 
		tubTranspVert7.style.display==="block" && btnDescarregaMist2.style.display!="block"){
		xv02Acionada.style.display="none";
		xv022Acionada.style.display="none";	
		mt04Ligado.style.display="none";	
		mist2DosagemSal();			
	}

	function mist2DosagemSal(){		
		xv022Acionada.style.display="block";
		var i=0;
			var Tmist2Sal=setInterval(function(){
				i++;
				wit02Sal=i*fator_sal;
				wit02Total=wit02Sal+wit02SI
				wit02.innerHTML=wit02Total+"Kg";
				if(i>="10"){clearInterval(Tmist2Sal);}
			},1000);
		setTimeout(function(){			
		xv022Acionada.style.display="none";	
		mist2DosagemSI();
		},10000);		
	}

	function mist2DosagemSI(){
		xv02Acionada.style.display="block";
		enchimentoTubSI();
		var i=0;
			var Tmist2SI=setInterval(function(){
				i++;
				var wit02SI=i*fator_si;
				wit02Total=wit02Sal+wit02SI
				wit02.innerHTML=wit02Total+"Kg";
				if(i>="10"){clearInterval(Tmist2SI);}
			},1000);
		setTimeout(function(){			
		xv02Acionada.style.display="none";
		esvaziamentoTubSI();
		mist2Misturador();	
		},10000);		
	}

	function mist2Misturador(){
		mt04Ligado.style.display="block";
		setTimeout(function(){
			mt04Ligado.style.display="none";
			avisoDescarregaMist2();
		},15000);		
	}
}

	function avisoDescarregaMist2(){
		btnDescarregaMist2.style.display="block";
		btnDescarregaMist2.addEventListener("click",function(){
			if(wit02Total>=375 && mt04Ligado.style.display==="none"){
			var c=wit02Total;
			var Tenv2auto=setInterval(function(){
			c=c-10;
			wit02.innerHTML=c+"Kg";
			btnDescarregaMist2.innerHTML="AGUARDE";
			mt04Ligado.style.display="block";
				if(c<="0"){
					clearInterval(Tenv2auto);
					btnDescarregaMist2.style.display="none";
					btnDescarregaMist2.innerHTML="Descarregar";
					mt04Ligado.style.display="none";
				}						
			},500);
			}
		})
	}
//****************************** Mist-3 Automático****************************		
var wit03=document.getElementById("WIT_03");
var btnDescarregaMist3=document.getElementById("btnDescarregaMist3");
var wit03Sal=0;
var wit03SI=0;
var wit03Total=0;

function mist3Automatico(){
	if(btnSIbtnAuto.value=="" || setpointNivelTqSI>6.3){
		alert("Tanque de SI em manual ou nível nível abaixo de 10%");			
	}
	if(numReceita==10){
		   		alert("Escolha uma receita");
	}
	if(tubTranspVert8.style.display!="block")
		{alert("Pulmão-3 vazio");}
	if(btnMist3Auto.value==1 && setpointNivelTqSI<=6.3 && numReceita!=10 && 
		tubTranspVert8.style.display==="block" && btnDescarregaMist3.style.display!="block"){
		xv03Acionada.style.display="none";
		xv033Acionada.style.display="none";	
		mt05Ligado.style.display="none";	
		mist3DosagemSal();			
	}

	function mist3DosagemSal(){
		
		xv033Acionada.style.display="block";
		var i=0;
			var Tmist3Sal=setInterval(function(){
				i++;
				wit03Sal=i*fator_sal;
				wit03Total=wit03Sal+wit03SI
				wit03.innerHTML=wit03Total+"Kg";
				if(i>="10"){clearInterval(Tmist3Sal);}
			},1000);
		setTimeout(function(){			
		xv033Acionada.style.display="none";	
		mist3DosagemSI();
		},10000);		
	}

	function mist3DosagemSI(){
		xv03Acionada.style.display="block";
		enchimentoTubSI();
		var i=0;
			var Tmist3SI=setInterval(function(){
				i++;
				var wit03SI=i*fator_si;
				wit03Total=wit03Sal+wit03SI
				wit03.innerHTML=wit03Total+"Kg";
				if(i>="10"){clearInterval(Tmist3SI);}
			},1000);
		setTimeout(function(){			
		xv03Acionada.style.display="none";
		esvaziamentoTubSI();
		mist3Misturador();	
		},10000);		
	}

	function mist3Misturador(){
		mt05Ligado.style.display="block";
		setTimeout(function(){
			mt05Ligado.style.display="none";
			avisoDescarregaMist3();
		},15000);		
	}

}

function avisoDescarregaMist3(){
		btnDescarregaMist3.style.display="block";
		btnDescarregaMist3.addEventListener("click",function(){
			if(wit03Total>=375 && mt05Ligado.style.display==="none"){
			var c=wit03Total;
			var Tenv3auto=setInterval(function(){
			c=c-10;
			wit03.innerHTML=c+"Kg";
			btnDescarregaMist3.innerHTML="AGUARDE";
			mt05Ligado.style.display="block";
				if(c<="0"){
					clearInterval(Tenv3auto);
					btnDescarregaMist3.style.display="none";
					btnDescarregaMist3.innerHTML="Descarregar";
					mt05Ligado.style.display="none";
				}						
			},500);
			}
		})
}

//****************************** Sinalizadores das máquinas de envase***************************
var sinalizadorEnv1=document.getElementById("sinalizadorEnv1");
if(btnMist1Auto.value==1 && btnPulmao1Hab.value==1){
	sinalizadorEnv1.style.display="block";
}

var sinalizadorEnv2=document.getElementById("sinalizadorEnv2"); 
if(btnMist2Auto.value==1 && btnPulmao2Hab.value==1){
	sinalizadorEnv2.style.display="block";
}

var sinalizadorEnv3=document.getElementById("sinalizadorEnv3");
if(btnMist3Auto.value==1 && btnPulmao3Hab.value==1){
	sinalizadorEnv3.style.display="block";
}