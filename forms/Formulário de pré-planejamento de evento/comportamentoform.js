$("document").ready(function(){	

	/** Comportamento do switch Evento Já realizado */
    FLUIGC.switcher.init($("#switchEventoJaRealizado"));
	FLUIGC.switcher.setFalse($("#switchEventoJaRealizado"));
	$("#switchEventoJaRealizado").attr("data-on-color",'success')
	$("#switchEventoJaRealizado").attr("offColor",'danger')
	$("#switchEventoJaRealizado").attr("onText",'Sim')
	$("#switchEventoJaRealizado").attr("offText",'Não');
    
	FLUIGC.switcher.onChange("#switchEventoJaRealizado", function(event, state){		
		if(state === true){							
			$("#div_selecaoEvento").show();
			$("#collapseDivDadosDespesas").show();
		}else if(state !== true){	
			$("#div_selecaoEvento").hide();
            $("#collapseDivDadosDespesas").hide();
		}		  
	});

	/** Inicia os campos de datas */
    FLUIGC.calendar('#tbDataInicio', { minDate: new Date(), });
	FLUIGC.calendar('#tbDataFim', { minDate: new Date(), });

	/** Comportamento do switch Reutilizar despesas */
    FLUIGC.switcher.init($("#switchReutilizarDespesas"));
	FLUIGC.switcher.setFalse($("#switchReutilizarDespesas"));
	$("#switchReutilizarDespesas").attr("data-on-color",'success')
	$("#switchReutilizarDespesas").attr("offColor",'danger')
	$("#switchReutilizarDespesas").attr("onText",'Sim')
	$("#switchReutilizarDespesas").attr("offText",'Não');

	FLUIGC.switcher.onChange("#switchReutilizarDespesas", function(event, state){		
		if(state === true){							
			$("#div_botaoCarrregarDespesas").show();
		}else if(state !== true){	
			$("#div_botaoCarrregarDespesas").hide();
		}

		let campoNomeEvento  = $("#tbEventoCadastrado").val();
	
		if(campoNomeEvento.length == 0){
			FLUIGC.toast({
					title: 'Atenção',
					message : "Escolha o evento antes de clicar no botão para carregar as despesas.", 
					type : "warning",
					timeout: 10000
				});
		}
	});
    
	/** Adiciona um contrato na tabela de contratos */
	insereContrato();
	
});

