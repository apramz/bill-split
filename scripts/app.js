var main = function(){

/********************************
			TOOLBOX
*********************************/
//Add Fields to Form Function
	var addFields = function(){
		var container = $('#input-fields');
		var input_div = document.createElement("div");
		var input_number = document.getElementById('input-fields').children.length;
		input_div.innerHTML = "<input type='number' min='0.01' step='0.01' id='item_"+input_number+"_price' name='item_"+input_number+"_price' placeholder='Item #"+input_number+" Price ($)'>";
		container.append(input_div);
	}

//Binding - Adding Fields to Form Button Function
	$('#add-input').click(function(){
		addFields();
	});

};

$(document).ready(main)