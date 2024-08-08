

function validateForm(form){
	
	var mode = form.getFormMode();
	var atividade = parseInt(getValue("WKNumState"));
	
	var errorMsg = "";
	var lineBreaker = "<br>";
	var topic = "->";
	if (atividade == INICIO_0 || atividade == INICIO_4) {

		if ((form.getValue("solicitanteNome") == null || form.getValue("solicitanteNome") == "") ) {
	        errorMsg += topic+"Informe o nome do solicitante"+lineBreaker;
	    }
		if ((form.getValue("solicitanteEmail") == null || form.getValue("solicitanteEmail") == "") ) {
			errorMsg += topic+"Informe o email do solicitante"+lineBreaker;
	    }
		if ((form.getValue("solicitanteAgencia") == null || form.getValue("solicitanteAgencia") == "") ) {
			errorMsg += topic+"Informe a agência do solicitante"+lineBreaker;
	    }
		if ((form.getValue("tbNomeEvento") == null || form.getValue("tbNomeEvento") == "") ) {
			errorMsg += topic+"Escolha um evento já realizado ou informe o nome do novo evento"+lineBreaker;
	    }
		if ((form.getValue("tbLocalEvento") == null || form.getValue("tbLocalEvento") == "") ) {
			errorMsg += topic+"Informe o local do evento"+lineBreaker;
	    }
		if ((form.getValue("tbSinteseEvento") == null || form.getValue("tbSinteseEvento") == "") ) {
			errorMsg += topic+"Informe a síntese do evento"+lineBreaker;
	    }
		if ((form.getValue("tbTipoEvento") == null || form.getValue("tbTipoEvento") == "") ) {
			errorMsg += topic+"Informe o tipo do evento"+lineBreaker;
	    }
		if ((form.getValue("tbDataInicio") == null || form.getValue("tbDataInicio") == "") || 
			form.getValue("tbDataFim") == null || form.getValue("tbDataFim") == "") {
			errorMsg += topic+"Informe o período de início e fim do evento"+lineBreaker;
		}

		var indexesRat = form.getChildrenIndexes("despesas");
		if (indexesRat.length == 0) {
			errorMsg += topic+ "Insira pelo menos uma despesa"+lineBreaker;
		}
		
		var indexesRatC = form.getChildrenIndexes("contratos");
		if (indexesRatC.length == 0) {
			errorMsg += topic+"Insira pelo menos um contrato"+lineBreaker;
		}

		if ((form.getValue("itensContratosJson") == null || form.getValue("itensContratosJson") == "") ) {
			errorMsg += topic+"Insira itens de contratos"+lineBreaker;
	    }
		
		/*
		var datas = form.getValue("tbDataInicio");
		var datap = form.getValue("tbDataFim");
		
		var datassplit =  datas.split("/");
		var dataInicio = new Date(datassplit[2], datassplit[1] - 1, datassplit[0]);
		
		var datapsplit =  datap.split("/");
		var dataFim = new Date(datapsplit[2], datapsplit[1] - 1, datapsplit[0]);

		var t2 = dataInicio.getTime();
		var t1 = dataFim.getTime();
		var qtDias = parseInt((t2-t1)/(24*3600*1000));

		if(qtDias > 30){
			throw "O período do evento não pode ser maior que 30 dias. Favor Corrigir.";
		}
		*/

		
		
		
		/* Valida tabela Pai x Filho do Rateio Projeto/Acao */
		/*
		var totalvalorrateio = 0.0;
		if (indexesRat.length > 0) {
			var projeto, acao, fontrecurso, valorrateio ;
	        for (var i = 0; i < indexesRat.length; i++) { // Percorre os campos Pai x Filho
	        	projeto = form.getValue('rmprojeto___' + indexesRat[i]);
	        	acao = form.getValue('rmacao___' + indexesRat[i]);
				fontrecurso = form.getValue('rmrecurso___' + indexesRat[i]);
				valorrateio = form.getValue('cpRateioValor___' + indexesRat[i]);
	            if(projeto == null || projeto == '') {
	                throw "Confirme ao menos um Projeto para iniciar a sua solicitação";
	            }
	            if(acao == null || acao == '') {
	                throw "Confirme ao menos uma Ação para iniciar a sua solicitação";
	            }
	            if(fontrecurso == null || fontrecurso == '') {
	                throw "Confirme ao menos uma fonte de recurso";
	            }
	            if(valorrateio == null || valorrateio == '') {
	                throw "Confirme ao menos um valor de rateio";
	            }else{
	            	totalvalorrateio += parseFloat(valorrateio.replace(",", "."));
	            }
	        }
	        if(totalvalorrateio != form.getValue("tbTotalDespesas").replace(",", ".")){
	        	throw "A soma do rateio deve ser igual ao total de despesas (R$ "+form.getValue("tbTotalDespesas").replace(",", ".")+")";
	        }
	    } else if (indexesRat.length > -1) {
	    	throw "<strong>Insira pelo menos uma despesa</strong>";
	    }
			*/
		
		/*Valores*/

	}
	
	if(errorMsg != ""){
		throw "<b>Validação da solicitação</b>:"+lineBreaker+
		errorMsg;
	}
	
}


