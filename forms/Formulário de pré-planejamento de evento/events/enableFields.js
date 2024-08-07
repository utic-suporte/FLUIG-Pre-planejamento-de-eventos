function enableFields(form){ 
	
	var atividade = parseInt(getValue("WKNumState"));
	
	/*
	if ( atividade == DIREX ) {
		EnableDadosSolic(form);
		form.setEnabled("deferidoUGAL",false);
		form.setEnabled("parecerUGAL",false);
		form.setEnabled("deferidoUMCC",false);
		form.setEnabled("parecerUMCC",false);
		form.setEnabled("numseap",false);
		form.setEnabled("parecerGerente",false);
		form.setEnabled("deferidoGerente",false);
		form.setEnabled("parecerDiretor",true);
		form.setEnabled("deferidoDiretor",true);
	} 
	*/
}

function EnableDadosSolic(form) {
	form.setEnhancedSecurityHiddenInputs(true); /*protegendo os campo*/
	
	form.setEnabled("rm_dadoscolab",false);
	form.setEnabled("rm_ano_evento",false);
	form.setEnabled("tbTipoEvento",false);
	form.setEnabled("tbSolicDirex",false);
	form.setEnabled("tbNomeEvento",false);
	form.setEnabled("tbLocalEvento",false);
	form.setEnabled("tbSinteseEvento",false);
	form.setEnabled("tbProjeto",false);
	form.setEnabled("tbAcao",false);
	form.setEnabled("tbDataEventoInicio",false);
	form.setEnabled("tbDataEventoFinal",false);
	form.setEnabled("tbPapelSebrae",false);
	form.setEnabled("tbPoliticasPublicas",false);
	form.setEnabled("tbParcerias",false);
	form.setEnabled("tbCbo",false);
	form.setEnabled("tbReb",false);
	form.setEnabled("tbCsn",false);
	form.setEnabled("tbConv",false);
	form.setEnabled("tbEmpresasAtendidas",false);
	form.setEnabled("tbEmpreendedoresAtendidos",false);
	form.setEnabled("tbPP",false);
	form.setEnabled("tbAI",false);
	form.setEnabled("tbPI",false);
	
	form.setEnabled("InstbCbo",false);
	form.setEnabled("InstbReb",false);
	form.setEnabled("InstbCsn",false);
	form.setEnabled("InstbConv",false);
	
	form.setEnabled("tbPublicoIndireto",false);
	
	form.setEnabled("InscpPP",false);
	form.setEnabled("InscpAI",false);
	form.setEnabled("InscpPI",false);
	
	form.setEnabled("tbDespPublicPropag",false);
	form.setEnabled("tbDespEmpOrgEvn",false);
	form.setEnabled("tbDespMaterialPromoc",false);
	form.setEnabled("tbDespSinalizacao",false);
	form.setEnabled("tbDespGrafica",false);
	form.setEnabled("tbDespStandMont",false);
	form.setEnabled("tbDespTenda",false);
	form.setEnabled("tbDespAudiovisual",false);
	form.setEnabled("tbDespProjArquite",false);
	form.setEnabled("tbDespHospedagem",false);
	form.setEnabled("tbDespPassagemAerea",false);
	form.setEnabled("tbDespDemaisCustos",false);
	form.setEnabled("tbDespPalestranteInst",false);

	form.setEnabled("numseap",false);
	form.setEnabled("rm_mesprevbaixa",false);
	form.setEnabled("rmrecurso",false);

	form.setEnabled("deferidoUGAL",false);
	form.setEnabled("parecerUGAL",false);

	form.setEnabled("deferidoUMCC",false);
	form.setEnabled("parecerUMCC",false);
	
	form.setEnabled("deferidoGerente",false);
	form.setEnabled("parecerGerente",false);

	form.setEnabled("deferidoAnaliseUMCC",false);
	form.setEnabled("parecerAnaliseUMCC",false);

	form.setEnabled("deferidoAprovacao",false);
	form.setEnabled("parecerAprovacao",false);

	form.setEnabled("parecerDiretor",false);
	form.setEnabled("deferidoDiretor",false);
	
	var indexesProj = form.getChildrenIndexes("tableRateioProjAcao");
    if (indexesProj.length > 0) {
        for (var i = 0; i < indexesProj.length; i++) { // Percorre os campos Pai x Filho
        	form.setEnabled("rmprojeto___"+ indexesProj[i],false);
        	form.setEnabled("rmacao___"+ indexesProj[i],false);
			form.setEnabled("rmrecurso___"+ indexesProj[i],false);
			form.setEnabled("cpRateioValor___"+ indexesProj[i],false);
        }
    }
}