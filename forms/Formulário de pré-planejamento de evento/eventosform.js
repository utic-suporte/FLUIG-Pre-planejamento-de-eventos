function carregarDespesas(){

    $("#div_tabelaDespesasCarregadas").show();
}

function insereDespesa() {
	return wdkAddChild("despesas");
}

function removeDespesa(elemento) {
	fnWdkRemoveChild(elemento);
}

function removeContrato(elemento) {
	fnWdkRemoveChild(elemento);
}

function insereContrato() {
	return wdkAddChild("contratos");
}

function insereItemContrato(linhaItem) {
	let contratoSelecinado = $(linhaItem).closest('#tbodyContrato').find("[name^='rm_contratosativos___']");
	let indexContrato = contratoSelecinado.attr("name").split("___")[1];

	let qtdItens = $("#itensInseridos___"+indexContrato+" > tr").length;
	console.log(qtdItens);
	$("#itensInseridos___"+indexContrato).append(
		"<tr>"+
			"<td>"+$("#rm_itemcontrato___"+indexContrato).find(":selected").val()+"</td>"+
			"<td><center>"+$("#rmquant___"+indexContrato).val()+"</center></td>"+
			"<td><center>"+$("#rmvalor___"+indexContrato).val()+"</center></td>"+
			"<td><center>"+$("#rmnrodiarias___"+indexContrato).val()+"</center></td>"+
			"<td><center>"+$("#rmtotal___"+indexContrato).val()+"</center></td>"+
			"<td style='display: none;'><center>"+(qtdItens+1)+"</center></td>"+
		"</tr>"
	);

	atualizaCampoItensContratosJson();
	/*
	let itensContratosJson = $("#itensContratosJson").val();
	let itemcontjson = {};
	if(itensContratosJson == "" || itensContratosJson == "{}"){
		itemcontjson[parseInt(indexContrato)] = {
			"descricao":$("#rm_itemcontrato___"+indexContrato).find(":selected").val(),
			"quantidade":$("#rmquant___"+indexContrato).val(),
			"valorunitario":$("#rmvalor___"+indexContrato).val(),
			"numdiarias":$("#rmnrodiarias___"+indexContrato).val(),
			"total":$("#rmtotal___"+indexContrato).val(),
			"index" : qtdItens+1
		}
		$("#itensContratosJson").val(JSON.stringify(itemcontjson));
	}else{
		atualizaCampoItensContratosJson();
	}
		*/
}

function atualizaCampoItensContratosJson(){

	let itemcontjson = {};
	$("[name^='rm_contratosativos___']").each(function( index, element ) {
		let indexCont = $(this).attr("name").split("___")[1];
		itemcontjson[indexCont] = [];
		console.log(JSON.stringify(itemcontjson));
		$('#itensInseridos___'+indexCont+' > tr').each(function() {
			//console.log($(this).find('td').eq(2).text());
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
			/*
			itemcontjson[parseInt(indexCont)] = {
				"descricao": 		$(this).find('td').eq(0).text(),
				"quantidade": 		$(this).find('td').eq(1).text(),
				"valorunitario": 	$(this).find('td').eq(2).text(),
				"numdiarias": 		$(this).find('td').eq(3).text(),
				"total": 			$(this).find('td').eq(4).text(),
				"index": 			$(this).find('td').eq(5).text()
			}
				*/
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
};

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