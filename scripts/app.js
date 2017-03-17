var main = function(){

/********************************
			TOOLBOX
*********************************/
//Add Fields to Form Function
	var addFields = function(){
		var container = $('#input-fields');
		var input = document.createElement("input");
		input.type = "number";
		input.min = "0.01";
		input.step = "0.01";
		container.append(input);
	}

//Binding - Adding Fields to Form Button Function
	$('#add-input').click(function(){
		addFields();
	});

};

$(document).ready(main)