function carregarDespesas(){

    $("#div_tabelaDespesasCarregadas").show();
}

function insereDespesa() {
	return wdkAddChild("despesas");
}

function removeDespesa(elemento) {
	fnWdkRemoveChild(elemento);
}

function maskValor(i) {
	var v = i.value.replace(/\D/g, '');
	v = (v / 100).toFixed(2) + '';
	v = v.replace(".", ",");
	v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
	v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
	i.value = v;
};