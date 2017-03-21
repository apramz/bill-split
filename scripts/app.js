var main = function(){

/********************************
			TOOLBOX
*********************************/
//Clears Content of Selected Area - Function
	var clear = function(content_area) {
		$('#'+content_area).empty();
	}

/********************************
			FORM
*********************************/
//Add Fields to Form - Function
	var addFields = function(){
		var container = $('#input-fields');
		var input_div = document.createElement("div");
		var input_number = document.getElementById('input-fields').children.length;
		input_div.innerHTML = "<input type='number' min='0.01' step='0.01' id='item_"+input_number+"_price' name='item_"+input_number+"_price' placeholder='Item #"+input_number+" Price ($)'>";
		container.append(input_div);
	}

//[Binding] - Adding Fields to Form Button - Function
	$('#add-input').click(function(){
		addFields();
	});

//[Binding] - Clear Form Fields After Button - Function
	$('#add-bill').click(function(){
		var number_fields = document.getElementById('input-fields').children.length;
		for (i = 0; i < number_fields; i++) {
			document.getElementById('bill-info-form').elements[i].value='';
		}
	})

};

$(document).ready(main)