$.getJSON('json/servicios.json', function(data) {
	var output = '<option selected value="0"> Elige una opción </option>';
	var cant = 1;
	$.each(data, function(key, val) {
		output += '<option value="'+cant+'">'+val.name+'</option> ';
		cant = cant + 1;
	});
	output += '<option value="'+cant+'"> Otros </option> ';
	$('#info').prepend(output);
});
