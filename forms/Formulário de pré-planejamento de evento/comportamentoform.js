$("document").ready(function(){	

    FLUIGC.switcher.init($("#switchEventoJaRealizado"));
	FLUIGC.switcher.setFalse($("#switchEventoJaRealizado"));
	$("#switchEventoJaRealizado").attr("data-on-color",'success')
	$("#switchEventoJaRealizado").attr("offColor",'danger')
	$("#switchEventoJaRealizado").attr("onText",'Sim')
	$("#switchEventoJaRealizado").attr("offText",'Não');
    
	FLUIGC.switcher.onChange("#switchEventoJaRealizado", function(event, state){		
		if(state === true){							
			$("#div_selecaoEvento").show();
            $("#div_botaoCarrregarDespesas").show();
		}else if(state !== true){	
			$("#div_selecaoEvento").hide();
            $("#div_botaoCarrregarDespesas").hide();
		}		  
	});

    FLUIGC.calendar('#tbDataInicio', { minDate: new Date(), });
	FLUIGC.calendar('#tbDataFim', { minDate: new Date(), });

    FLUIGC.switcher.init($("#switchReutilizarDespesas"));
	FLUIGC.switcher.setFalse($("#switchReutilizarDespesas"));
	$("#switchReutilizarDespesas").attr("data-on-color",'success')
	$("#switchReutilizarDespesas").attr("offColor",'danger')
	$("#switchReutilizarDespesas").attr("onText",'Sim')
	$("#switchReutilizarDespesas").attr("offText",'Não');
    
});

