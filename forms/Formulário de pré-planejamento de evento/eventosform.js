function carregarDespesas(){

    $("#div_tabelaDespesasCarregadas").show();
}

function insereDespesa() {
	return wdkAddChild("despesas");
}

function removeDespesa(elemento) {
	fnWdkRemoveChild(elemento);
}

function insereContrato() {
	return wdkAddChild("contratos");
}

function insereItemContrato(linhaItem) {
	//conctinuar daqui, pegando o indice da linha do cotrato ( ___indice )
	let tbodyItensInserido = $(linhaItem).closest('#row').find("#itensInseridos");

	console.log((linhaItem).closest('#tbodyContrato'));
	console.log(tbodyItensInserido);
	console.log($(tbodyItensInserido));
	$(linhaItem).closest('#tbodyContrato').find("#itensInseridos").append(
		"<tr>"+
			"<td>teste</td>"+
			"<td><center>teste</center></td>"+
			"<td><center>teste</center></td>"+
			"<td><center>teste</center></td>"+
			"<td><center>teste</center></td>"+
		"</tr>"
	);
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