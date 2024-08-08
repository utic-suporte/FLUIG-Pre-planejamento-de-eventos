/***************************************/

/* CARREGA O ZOOM AO ABRIR O FORMULARIO */

$('#colabzoom').children().one('click', function (e) {
    var codigopessoa = document.getElementById("tbCodPessoa").value;
    reloadZoomFilterValues('rm_dadoscolab', 'CODPESSOA,'+codigopessoa); 
});

function setSelectedZoomItem(selectedItem) {

    var zoomitm = selectedItem.inputName;

    var contratoLinha = zoomitm.substring(0, 18);
    var itemlinha = zoomitm.substring(0,15);
    var itemDespesa = zoomitm.substring(0,19);

    if (selectedItem.inputId == "rm_dadoscolab"){
		document.getElementById("tbGerente").value = gerente;
		document.getElementById("tbGerenteUsuario").value = gerenteusuario;
		document.getElementById("tbDiretor").value = diretor;
		document.getElementById("tbAgencia").value = agencia;
		document.getElementById("tbFilial").value = codfilial;
		document.getElementById("tbCodVen").value = codven;
		document.getElementById("rm_depto").value = depto;
		document.getElementById("rm_coddepto").value = coddepto;
	}else if (contratoLinha == "rm_contratosativos") {
        var cLinha = selectedItem.inputName.substring(18, selectedItem.inputName.lenght);
        $("#tbNumeroContrato"+ cLinha).val(selectedItem.CODIGOCONTRATO);
        $("#tbIdContrato"+ cLinha).val(selectedItem.IDCNT);
        $("#CPFOuCNPJContratos"+ cLinha).val(selectedItem.CNPJ);
        $("#tbValorContrato"+ cLinha).val(selectedItem.VALORCONTRATO);
        $("#tbSaldoContrato"+ cLinha).val(selectedItem.SALDO);
        $("#tbVencimentoContrato"+ cLinha).val(selectedItem.DATAFIM);

        console.log("rm_itemcontrato" + cLinha, 'IDCNTITEM,' + selectedItem.IDCNT);
        reloadZoomFilterValues("rm_itemcontrato" + cLinha, 'IDCNTITEM,' + selectedItem.IDCNT);
    }else if (itemlinha == "rm_itemcontrato") {
        var cLinha = selectedItem.inputName.substring(15, selectedItem.inputName.lenght);
        $("#rmvalor"+ cLinha).val(selectedItem.VLRUNITARIO);
    }else if (itemDespesa == "descNaturezaDespesa") {
        var cLinha = selectedItem.inputName.substring(19, selectedItem.inputName.lenght);
        $("#codNaturezaDespesa"+ cLinha).val(selectedItem.CODTB1FAT);
    }

    if (selectedItem.inputId == "tbEventoCadastrado") {

        let c1 = DatasetFactory.createConstraint("tbNomeEvento", selectedItem["TBNOMEEVENTO"], selectedItem["TBNOMEEVENTO"], ConstraintType.MUST);
        let c2 = DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST);
		let retorno = DatasetFactory.getDataset("FormuláriodePlanejamentodeEventos9437", null, [c1,c2], null);
		if(retorno.values.length > 0){
            let despesa = retorno.values[retorno.values.length-1];
            $("#tbNomeEvento").val(despesa.tbNomeEvento);
            $("#tbLocalEvento").val(despesa.tbLocalEvento);
            $("#tbSinteseEvento").val(despesa.tbSinteseEvento);
            $("#tbTipoEvento"+despesa.tbTipoEvento).prop("checked", true);
        }else{
            FLUIGC.toast({
                title: 'Atenção',
                message : "Não foi possível encontrar o evento nas solicitações de planejamento de eventos.", 
                type : "warning",
                timeout: 10000
            });
        }
    }

}




