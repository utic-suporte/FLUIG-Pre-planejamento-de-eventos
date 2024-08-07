

function validateForm(form){
	
	var mode = form.getFormMode();
	var atividade = parseInt(getValue("WKNumState"));
	
	if (atividade == INICIO_0 || atividade == INICIO_4) {

		if ((form.getValue("solicitanteNome") == null || form.getValue("solicitanteNome") == "") ) {
	        throw "Informe o nome do solicitante";
	    }
		if ((form.getValue("solicitanteEmail") == null || form.getValue("solicitanteEmail") == "") ) {
	        throw "Informe o email do solicitante";
	    }
		if ((form.getValue("solicitanteAgencia") == null || form.getValue("solicitanteAgencia") == "") ) {
	        throw "Informe a agência do solicitante";
	    }
		if ((form.getValue("tbNomeEvento") == null || form.getValue("tbNomeEvento") == "") ) {
	        throw "Escolha um evento já realizado ou informe o nome do novo evento";
	    }
		if ((form.getValue("tbLocalEvento") == null || form.getValue("tbLocalEvento") == "") ) {
	        throw "Informe o local do evento";
	    }
		if ((form.getValue("tbSinteseEvento") == null || form.getValue("tbSinteseEvento") == "") ) {
	        throw "Informe a síntese do evento";
	    }
		if ((form.getValue("tbTipoEvento") == null || form.getValue("tbTipoEvento") == "") ) {
	        throw "Informe o tipo do evento";
	    }
		if ((form.getValue("tbDataInicio") == null || form.getValue("tbDataInicio") == "") || 
			form.getValue("tbDataFim") == null || form.getValue("tbDataFim") == "") {
	        throw "Informe o período de início e fim do evento.";
		}

		var indexesRat = form.getChildrenIndexes("despesas");
		if (indexesRat.length == 0) {
			throw "<strong>Insira pelo menos uma despesa</strong>";
		}
		
		var indexesRatC = form.getChildrenIndexes("contratos");
		if (indexesRatC.length == 0) {
			throw "<strong>Insira pelo menos um contrato</strong>";
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
	
	if (atividade == PARECER_UGAL) {
		if ((form.getValue("deferidoUGAL") == null || form.getValue("deferidoUGAL") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
	        throw "Favor, informar o parecer.";
	    }
		if ((form.getValue("parecerUGAL") == null || form.getValue("parecerUGAL") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
	        throw "Favor, informar a observação.";
	    }
	}
	
	if (atividade == PARECER_UMCC) {
		if ((form.getValue("deferidoUMCC") == null || form.getValue("deferidoUMCC") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
	        throw "Favor, informar o parecer.";
	    }
		if ((form.getValue("parecerUMCC") == null || form.getValue("parecerUMCC") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
	        throw "Favor, informar a observação.";
	    }
	}

	if (atividade == PARECER_GERENTE) {
		if ((form.getValue("deferidoGerente") == null || form.getValue("deferidoGerente") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
	        throw "Favor, informar o parecer.";
	    }
	}

	if (atividade == DIREX) {
		if ((form.getValue("deferidoDiretor") == null || form.getValue("deferidoDiretor") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
	        throw "Favor, informar o parecer.";
	    }
	}

	if (atividade == INFORMAR_APROVACAO) {
		if(form.getValue("deferidoAprovacao") == "D"){
			if(parseFloat(form.getValue("tbTotalDespesas")) > 15000 && (form.getValue("numseap") == null || form.getValue("numseap") == "")){
				throw "<strong>O total de despesas ultrapassa o valor de R$ 15.000,00, por isso, vocÊ deve informar o Número da autorização SEAP.</strong>";
			}
		}
	}
	
}


