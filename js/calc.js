	$(document).ready(function() {
		var limit = 2;
		$('input.single-checkbox').on('change', function(evt) {
		   if($(this).siblings(':checked').length >= limit) {
		       this.checked = false;
		   }
		});
	});

var types = new Array(
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5, 1, 1],// Normal
[1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2, 1, 1],// Fire
[1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1, 1],// Water
[1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1, 1, 1],// Electric
[1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 1, 1],// Grass
[1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5, 1, 1],// Ice
[2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2, 0.5, 1],// Fighting
[1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0, 2, 1],// Poison
[1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2, 1, 1],// Ground
[1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5, 1, 1],// Flying
[1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5, 1, 1],// Psychic
[1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5, 0.5, 1],// Bug
[1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5, 1, 1],// Rock
[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 1, 1],// Ghost
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5, 0, 1],// Dragon
[1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 0.5, 1],// Dark
[1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 2, 1],// Steel
[1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 1, 1],// Fairy
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);// None

var type_name = new Array("Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy");

var abilities = new Array(
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],// None
[1, 0.5, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],// Thick Fat
[1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],// Heatproof
[1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],// Levitate
[1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],// Volt Absorb
[1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],// Water Absorb
[1, 1.25, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],// Dry Skin
[1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],// Flash Fire
[1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],// Sap Sipper
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],// Filter
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);// Wonder Guard

var weathers = new Array(
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],// None
[1, 1.5, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],// Drought
[1, 0.5, 1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);// Drizzle

var thing = {};
$(document).ready(function(){

	// put multiple input values into an arr
		var $checkes = $('input.single-checkbox').change(function () {
        var vals = $checkes.filter(':checked').map(function () {
            return this.value;
        }).get();
        thing = {one: function() {
        	return (vals);
        }
    	};
        return (vals);
        });

	$("#submit").click(function()
	{
		$("div#content").hide();
		var arr = thing.one();
  		var type1 = arr[0]-1;
		console.log(type1);
		var type2 = arr[1]-1 || 18;
		console.log(type2);
		var ability = $("#def_ability").val();
		var weather = $("#def_weather").val();
		var color = [];
		var result = [];
		var output;
		var i;
		
		if(type1 != type2)
		{
			for (i=0; i<=18; i++)
			{
				result[i] = ((types[i][type1] * types[i][type2]) * abilities[ability][i]) * weathers[weather][i];
				if((types[i][type1] * types[i][type2]) < 2 && ability == 10){result[i] = 0};
				if((types[i][type1] * types[i][type2]) >= 2 && ability == 9){result[i] = result[i] * 0.75};
				if(result[i] == 1){color[i] = "dmg_normal"};
				if(result[i] < 1){color[i] = "dmg_resist"};
				if(result[i] < 0.5){color[i] = "dmg_resist2"};
				if(result[i] == 0){color[i] = "dmg_immune"};
				if(result[i] > 1){color[i] = "dmg_weak"};
				if(result[i] > 2){color[i] = "dmg_weak2"};
			}
	
			output = '<div id="table-output"><table class="output" cellspacing="1" cellpadding="3"> <tr>';
			for (i=0; i<=17; i++)
			{
				output += '<td class="tbl_heading">' + type_name[i] + '</td><td class="'+ color[i] +'">x' + result[i] + '</td></tr>';
			}
			output += '</tr></table></div>';
			
			$("div#content").empty().append(output).show("slow");
		} else
		{
			$("div#content").empty().append("Type 1 and Type 2 must be different").show("slow");
		}
		
	});
});
