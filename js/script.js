	'use strict';
	var local,template,result;

	$.ajax({
		url: 'data/mydata.json',
		dataType: 'json',
		type: 'get',
		cache: false,
		success: function(data) {
			local = 'http://192.168.1.11/~ryanpetruzzellis/';
			template = document.querySelector('#template').innerHTML;
			result = document.querySelector('#result');
			$.each(data, function(index, value) {
				result.innerHTML += template
				.replace( /{{nat}}/, value.Nat)
				.replace( /{{name}}/, value.Pokemon)
				.replace( /{{gender}}/, value.Gender)
				.replace( /{{hp}}/, value.HP)
				.replace( /{{atk}}/, value.Atk)
				.replace( /{{def}}/, value.Def)
				.replace( /{{sa}}/, value.SA)
				.replace( /{{typei}}/, value.TypeI)
				.replace( /{{typeii}}/, value.TypeII)
				.replace( /{{evolvesatby}}/, value.EvolvesAtBy)
				.replace( /{{evolvesinto}}/, value.EvolvesInto)
				.replace( /{{image}}/, local+value.Image);
			});
		}
	});

jQuery(document).ready(function($){

$('.live-search-list li').each(function(){
$(this).attr('data-search-term', $(this).text().toLowerCase());
});

$('.live-search-box').on('keyup', function(){

var searchTerm = $(this).val().toLowerCase();

    $('.live-search-list li').each(function(){

        if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
            $(this).show();
        } else {
            $(this).hide();
        }

    });

});

});