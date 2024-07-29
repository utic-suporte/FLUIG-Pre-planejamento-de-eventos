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

	$("#itensInseridos___"+indexContrato).append(
		"<tr>"+
			"<td>"+$("#rm_itemcontrato___"+indexContrato).find(":selected").val()+"</td>"+
			"<td><center>"+$("#rmquant___"+indexContrato).val()+"</center></td>"+
			"<td><center>"+$("#rmvalor___"+indexContrato).val()+"</center></td>"+
			"<td><center>"+$("#rmnrodiarias___"+indexContrato).val()+"</center></td>"+
			"<td><center>"+$("#rmtotal___"+indexContrato).val()+"</center></td>"+
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