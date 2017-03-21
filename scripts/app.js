var main = function(){

/********************************
			TOOLBOX
*********************************/
//Clears Content of Selected Area - Function
	var clear = function(content_area) {
		$('#'+content_area).empty();
	}

/********************************
			FORM TOOLS
*********************************/
//Add Fields to Form - Function
	var addFields = function(){
		var container = $('#input-fields');
		var input_div = document.createElement("div");
		var input_number = document.getElementById('input-fields').children.length;
		input_div.innerHTML = "<input type='number' min='0.01' step='0.01' id='item_"+input_number+"_price' name='item_"+input_number+"_price' placeholder='Item #"+input_number+" Price ($)'>";
		container.append(input_div);
	}

//[onClick] - Adding Fields to Form Button - Function
	$('#add-input').click(function(){
		addFields();
	});

//[onClick] - Clear Form Fields After Button - Function
	$('#add-bill').click(function(){
		createVariables();
		var number_fields = document.getElementById('input-fields').children.length;
		for (i = 0; i < number_fields; i++) {
			document.getElementById('bill-info-form').elements[i].value='';
		}
	})

/********************************
		FORM DATA SUBMISSION
*********************************/
//Count Number of Input Fields - Function
	var countFields = function(){
		var number_fields = document.getElementById('input-fields').children.length;
		return number_fields;	
	}

//Return Inner Value of Input Field - Function

//Creating Bill Item Variables - Function
	var createVariables = function(){
		var item_values = [];
		var number_fields = countFields();
		for (i = 0; i < number_fields; i++) {
			var item = document.getElementById('input-fields').children[i].children[0].value;
			item_values.push(item);
			console.log(item_values);
		};
		return item_values;
	}

//[onClick] - Create Bill Item Variables Button - Function


};

$(document).ready(main)