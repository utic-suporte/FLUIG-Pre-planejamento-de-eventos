/***************************************/

/* CARREGA O ZOOM AO ABRIR O FORMULARIO */

$('#colabzoom').children().one('click', function (e) {
    var codigopessoa = document.getElementById("tbCodPessoa").value;
    reloadZoomFilterValues('rm_dadoscolab', 'CODPESSOA,'+codigopessoa); 
});

function setSelectedZoomItem(selectedItem) {

    var zoomitm = selectedItem.inputName;
    var ProjetoLinha = zoomitm.substring(0, 9);
    var AcaoLinha = zoomitm.substring(0, 6);

    var contratoLinha = zoomitm.substring(0, 18);
    var itemlinha = zoomitm.substring(0,15);

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
    }

}

function atualizaConsultaCnpj(){
    var oiObjField = document.all["cpfconsulta"].value;
    
    if(oiObjField != null){
        reloadZoomFilterValues("rm_fcfo", 'CGCCFO,'+oiObjField);
    }
}

function atribuirCamposContratos(selectedItem) {

    $("#tbNumeroContrato").val(selectedItem.CODIGOCONTRATO);
    $("#tbIdContrato").val(selectedItem.IDCNT);
    $("#CPFOuCNPJContratos").val(selectedItem.CNPJ);
    $("#tbValorContrato").val(selectedItem.VALORCONTRATO);
    $("#tbSaldoContrato").val(selectedItem.SALDO);
    $("#tbVencimentoContrato").val(selectedItem.DATAFIM);
    $("#nomeFornecedorContratos").val(selectedItem.NOMEFANTASIA);
}

function manipularPaineis(selectedItem) {
    const fonecedorPessoaFisica = $("#fornecedorPessoaFisica");
    const fonecedorPessoaJuridica = $("#fornecedorPessoaJuridica");
    $("#painelNomeFornecedorContratos").show();
    $("#painelNomeFornecedorContratos").prop("hidden", false);


    fonecedorPessoaJuridica.hide();
    fonecedorPessoaFisica.hide();

    if (selectedItem.CNPJ.length > 14) {

        fonecedorPessoaFisica.hide();
        fonecedorPessoaFisica.prop("hidden", true);

        fonecedorPessoaJuridica.show();
        fonecedorPessoaJuridica.prop("hidden", false);
    } else {
        fonecedorPessoaFisica.show();
        fonecedorPessoaFisica.prop("hidden", false);

        fonecedorPessoaJuridica.hide();
        fonecedorPessoaJuridica.prop("hidden", true);

    }
}