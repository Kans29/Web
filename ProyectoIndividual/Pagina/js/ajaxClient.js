$.getJSON('json/clientes.json', function(data) {
	var output = '<ul>';
	$.each(data, function(key, val) {
		output += '<li>';
		output += '<h2>'+ val.name +'</h2>';
		output += '<img src="img/clientes/'+ val.shortname +'.jpg" alt="'+ val.name +'" />';
		output += '<p><strong> Tiempo como cliente:</strong> '+ val.tiempo +'<br>';
		output += '<strong> Opinion:</strong><br>'+ val.opinion +'</p>';
		output += '<a href="'+val.link+'">Link a la página del cliente</a>';
		output += '</li>';
	});
	output +='</ul>';
	$('#update').prepend(output);
});
