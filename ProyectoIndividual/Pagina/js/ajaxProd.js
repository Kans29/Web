$('#search').keyup(function() {
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, "i");
	$.getJSON('json/productos.json', function(data) {
		var output = '<ul class="searchresults">';
		$.each(data, function(key, val) {
			if ((val.name.search(myExp) != -1) ||
			(val.bio.search(myExp) != -1)) {
				output += '<li>';
				output += '<h2>'+ val.name +'</h2>';
				output += '<a href="'+val.link+'"><img src="img/productos/'+ val.shortname +'.jpg" alt="'+ val.name +'" /></a>';
				output += '<p>Click sobre la imagen del producto para video.</p>'
				output += '<p><strong> Valor:</strong> '+ val.precio+'<br>';
				output += '<strong>Fondos Disponibles:</strong> '+ val.reknown +'<br>';
				output += '<strong>Cantidad disponible:</strong> '+ val.cantidad +'<br>';
				output += '<strong>Descripción:</strong> '+ val.bio +'</p>';
				output += '</li>';
			}
		});
		output += '</ul>';
		$('#update').html(output);
	}); //get JSON
});
