$.getJSON('json/servicios.json', function(data) {
	var output = '<ul>';
	$.each(data, function(key, val) {
		output += '<li>';
		output += '<h2>'+ val.name +'</h2>';
		output += '<img src="img/servicios/'+ val.shortname +'.jpg" alt="'+ val.name +'" />';
		output += '<p><strong> Duración/periodicidad:</strong> '+ val.tiempo +'<br>';
		output += '<strong> Descripción:</strong><br>'+ val.opinion +'</p>';
		output += '<a href="'+val.link+'">Link a video del servicio</a>';
		output += '</li>';
	});
	output +='</ul>';
	$('#update').prepend(output);
});
