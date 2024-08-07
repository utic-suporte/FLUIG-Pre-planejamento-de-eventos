function carregarDespesas(){

    $("#div_tabelaDespesasCarregadas").show();
}

function insereDespesa() {
	return wdkAddChild("despesas");
}

function removeDespesa(elemento) {
	fnWdkRemoveChild(elemento);
	somaValorTotalDespesas();
}

function removeContrato(elemento) {
	fnWdkRemoveChild(elemento);
}

function insereContrato() {
	return wdkAddChild("contratos");
}

function insereItemContrato(linhaItem) {
	let index = $(linhaItem).attr("name").split("___")[1];

	/*
	let contratoSelecinado = $(linhaItem).closest('#tbodyContrato').find("[name^='rm_contratosativos___']");
	let indexContrato = contratoSelecinado.attr("name").split("___")[1];
	*/
	let qtdItens = $("#itensInseridos___"+index+" > tr").length;
	//console.log(qtdItens);
	$("#itensInseridos___"+index).append(
		"<tr>"+
			"<td>"+$("#rm_itemcontrato___"+index).find(":selected").val()+"</td>"+
			"<td><center>"+$("#rmquant___"+index).val()+"</center></td>"+
			"<td><center>"+$("#rmvalor___"+index).val()+"</center></td>"+
			"<td><center>"+$("#rmnrodiarias___"+index).val()+"</center></td>"+
			"<td><center>"+$("#rmtotal___"+index).val()+"</center></td>"+
			"<td><center><img src='lixeira.png' onclick='removeItemContrato(this)' style='cursor:pointer;cursor:hand;'></center></td>"+
			"<td style='display: none;'><center>"+(qtdItens+1)+"</center></td>"+
			
		"</tr>"
	);

	atualizaCampoItensContratosJson();
}

function removeItemContrato(linha){
	$(linha).closest('tr').remove(); 
	atualizaCampoItensContratosJson();
}

function atualizaCampoItensContratosJson(){

	let itemcontjson = {};
	$("[name^='rm_contratosativos___']").each(function( index, element ) {
		let indexCont = $(this).attr("name").split("___")[1];
		itemcontjson[indexCont] = [];
		$('#itensInseridos___'+indexCont+' > tr').each(function() {
			itemcontjson[indexCont].push(
				{
					"descricao": 		$(this).find('td').eq(0).text(),
					"quantidade": 		$(this).find('td').eq(1).text(),
					"valorunitario": 	$(this).find('td').eq(2).text(),
					"numdiarias": 		$(this).find('td').eq(3).text(),
					"total": 			$(this).find('td').eq(4).text(),
					"index": 			$(this).find('td').eq(5).text()
				}
			)
		});
	});

	$("#itensContratosJson").val(JSON.stringify(itemcontjson));

}

function maskValor(i) {
	var v = i.value.replace(/\D/g, '');
	v = (v / 100).toFixed(2) + '';
	v = v.replace(".", ",");
	v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
	v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
	i.value = v;
}

function calculaTotalTotal(objeto) {
		
	var id = $(objeto).attr('id');
	var n = id.split("___");
	
	var valorQtd 		= 0;
	var valorDiaria 	= 0;
	var qtdeItens 		= $('*[id^="rm_itemcontrato___"]');
	var valorTotal 		= 0;
	var total			= 0;
	
	console.log("Qtd Itens: " + qtdeItens.length);
	
	if (qtdeItens.length > 0) {	      
		for (var a = 0; a<qtdeItens.length; a++) {
			var ids = $(qtdeItens[a]).attr('id');
			var ns = ids.split("___");
			var valorUnit = String($("#rmvalor___"+ns[1]).val()).replace(",",".");
			valorDiaria = String(Number($("#rmnrodiarias___"+ns[1]).val())).replace(",",".");
			valorQtd = String(Number($("#rmquant___"+ns[1]).val())).replace(",",".");
			var subTotal = (valorUnit * valorDiaria * valorQtd);
			valorTotal += subTotal;
			
			$("#numberVlrTot").val(valorTotal.formatReais());
			$("#rmtotal___"+ns[1]).val(subTotal.formatReais());
	  }
	}else{
		$("#numberVlrTot").val("0,00");
	}
}

Number.prototype.formatReais = function () {
    return Number(this).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
};

function moeda(z){
	v = z.value;
	v=v.replace(/\D/g,"") //permite digitar apenas números
	v=v.replace(/[0-9]{9}/,"inválido") //limita pra máximo 999.999.999,99
	v=v.replace(/(\d{1})(\d{8})$/,"$1,$2") //coloca ponto antes dos últimos 8 digitos
	v=v.replace(/(\d{1})(\d{1,2})$/,"$1,$2") //coloca ponto antes dos últimos 5 digitos
	z.value = v;
}

function mascaraValor(i) {
	var v = i.replace(/\D/g, '');
	v = (v / 100).toFixed(2) + '';
	v = v.replace(".", ",");
	v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
	v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
	return v;
}

function mascaraValor2(i) {
	var v = i.value.replace(/\D/g, '');
	v = (v / 100).toFixed(2) + '';
	v = v.replace(".", ",");
	v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
	v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
	i.value = v;
}

function carregarDespesas(){

	let campoNomeEvento  = $("#tbEventoCadastrado").val();
	
	if(campoNomeEvento.length == 0){
		FLUIGC.toast({
				title: 'Atenção',
				message : "Escolha o evento antes de clicar no botão para carregar as despesas.", 
				type : "warning",
				timeout: 10000
			});
	}else{
		let c1 = DatasetFactory.createConstraint("nomeevento", campoNomeEvento[0], campoNomeEvento[0], ConstraintType.MUST);
		let retorno = DatasetFactory.getDataset("ds_despesaseventosrm", null, [c1], null);

		console.log(retorno);

		if(retorno.values.length > 0){
			let despesas = retorno.values;
			for(var i = 0; i < despesas.length; i++) {
				let despesaAtual = despesas[i];
				let index = insereDespesa();
				$("#descNaturezaDespesa___"+index).val(despesaAtual.descnatureza);
				$("#codNaturezaDespesa___"+index).val(despesaAtual.codnatureza);
				$("#valorDespesa___"+index).val(mascaraValor(despesaAtual.valoritem));
				$("#descNaturezaDespesa___"+index).prop("readonly","readonly");
				$("#valorDespesa___"+index).prop("readonly","readonly");

				setZoomData("descNaturezaDespesa___"+index, despesaAtual.descnatureza);
			}
		}

		somaValorTotalDespesas();
	}
}

function somaValorTotalDespesas(){
	let valorTotalDespesa = 0;
	$("[name^='descNaturezaDespesa___']").each(function( index, element ) {
		let indexCont = $(this).attr("name").split("___")[1];
		let valorDespesa = $('#valorDespesa___'+indexCont).val();
		valorDespesa = valorDespesa.replaceAll(".","").replace(",",".");
		valorTotalDespesa += parseFloat(valorDespesa);
	});

	$('#tbValorTotalDespesas').val(mascaraValor(valorTotalDespesa.toFixed(2)));
}

function setZoomData(instance, value){
    window[instance].setValue(value);
}