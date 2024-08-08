function displayFields(form,customHTML){ 
	
	var mode = form.getFormMode();
	var atividade = parseInt(getValue("WKNumState"));
	var numproc = parseInt(getValue("WKNumProces"));
	
	customHTML.append("<script>");
	customHTML.append("const MATRICULA = '" + getValue("WKUser") + "';");
	customHTML.append("const ATIVIDADE = " + atividade + ";");
	customHTML.append("const MODO = '" + mode + "';");
	customHTML.append("const EMAIL = '" + fluigAPI.getUserService().getCurrent().getEmail() + "';");
	customHTML.append("</script>");
	
	form.setVisibleById("collapseDivDadosGerente", false);
	
	if (mode == "ADD" || atividade == INICIO_0 || atividade == INICIO_4) {
		carregaDadosColaborador(form);
		
		form.setValue('dataSolicitacao', getDataAtual());
	} else if (mode == "MOD"){
		if( atividade == AUTORIZAR_EVENTO_GERENTE){

		}
	}
}

//Atividade de Início (Gestor) - 1
function carregaDadosColaborador(form) {
	var usuarioLogado =  fluigAPI.getUserService().getCurrent();

	form.setValue('solicitanteNome', usuarioLogado.getFullName());
	form.setValue('solicitanteEmail', usuarioLogado.getEmail());
	form.setValue('solicitanteUsuarioCod', getValue("WKUser"));
	
	var d1 = DatasetFactory.createConstraint("EMAIL",  usuarioLogado.getEmail(), usuarioLogado.getEmail(), ConstraintType.MUST);
	var ds_colab = DatasetFactory.getDataset("rm_consulta_dadoscolaborador", null, [d1], null);
	if(ds_colab.rowsCount > 0){
		form.setValue('solicitanteAgencia', ds_colab.getValue(0, "SECAO"));
		form.setValue('solicitanteDepartamento', ds_colab.getValue(0, "DEPTO"));
		form.setValue('tbGerenteUsuarioCod', ds_colab.getValue(0, "GERENTEUSUARIO"));
		form.setValue('tbDiretorUsuarioCod', ds_colab.getValue(0, "CHAPADIRETOR"));
		form.setValue('nmDiretor', ds_colab.getValue(0, "DIRETOR"));
		form.setValue('nmGerente', ds_colab.getValue(0, "GERENTE"));
		form.setValue('solicitanteChapaRM', ds_colab.getValue("CHAPA"));
		form.setValue('gerenteChapaRM', ds_colab.getValue("CHAPAGERENTE"));
		form.setValue('diretorChapaRM', ds_colab.getValue("CHAPADIRETORRM"));
	}
	
	if(usuarioLogado.getEmail() == "suportecg@pb.sebrae.com.br"){
		form.setValue('solicitanteAgencia', "Agencia Regional Campina Granbde");
		form.setValue('solicitanteDepartamento', "SEDE-PB");
		form.setValue('solicitanteUsuarioCod', "ronycley");
		form.setValue('tbGerenteUsuarioCod',  "ronycley");
		form.setValue('tbDiretorUsuarioCod',  "ronycley");
		form.setValue('nmDiretor', "Gerente Teste");
		form.setValue('nmGerente', "Diretor Teste");
		form.setValue('solicitanteChapaRM', "000001");
		form.setValue('gerenteChapaRM', "000001");
		form.setValue('diretorChapaRM', "000001");
	}

	if(usuarioLogado.getEmail() == "ronycley@bitsolucoes.info"){
		form.setValue('solicitanteAgencia', "Agencia Regional Campina Granbde");
		form.setValue('solicitanteDepartamento', "SEDE-PB");
		form.setValue('solicitanteUsuarioCod', "ronycley");
		form.setValue('tbGerenteUsuarioCod',  "ronycley");
		form.setValue('tbDiretorUsuarioCod',  "ronycley");
		form.setValue('nmDiretor', "Ronycley Agra");
		form.setValue('nmGerente', "Ronycley Agra");
		form.setValue('solicitanteChapaRM', "012340");
		form.setValue('gerenteChapaRM', "012340");
		form.setValue('diretorChapaRM', "012340");
	}
}

function getDataAtual(){
	var fullDate = new Date();
	var date = fullDate.getDate().toString();
	if(date.length == 1) { date = 0+date; }
	var mes = (fullDate.getMonth()+1).toString();
	if(mes.length == 1) { mes = 0+mes; }
	return date+"/"+mes+"/"+fullDate.getFullYear();
}