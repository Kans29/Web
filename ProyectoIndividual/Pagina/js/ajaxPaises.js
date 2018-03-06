$.getJSON('json/paises.json', function(data) {
	var output = '<option selected value="0"> Elige una opción </option>';
	var cant = 1;
	$.each(data, function(key, val) {
		output += '<option value="'+cant+'">'+val+'</option> ';
		cant = cant+1
	});
	$('#pais').prepend(output);
});
