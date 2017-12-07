function calculator(operator) {
    return new Function('a', 'b', 'return a ' + operator + ' b');
}

var handleCalculateClick = function (event) {
	let result = document.getElementById('result');
	let number1 = document.getElementById('number1');
	let number2 = document.getElementById('number2');
	let sign = document.getElementById('sign');
	let operation = calculator(String(sign.value));
	result.innerHTML = operation(Number(number1.value), Number(number2.value));
};

var button = document.querySelector('#calc_button');
button.addEventListener('click',handleCalculateClick);





// $(function(){
// 	$("#firstp").click(function(){
// 		$(this).hide();
// 	});	
// });

// $("body").append($('<p> extra p </p>'));

// $(function(){
// 	$("#anchor1").click(function(event){
// 		alert("Thanks for visiting!");
// 		console.log("hello");
// 	});
// });

