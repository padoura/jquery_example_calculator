$("body").append($('<div> </div>'));

$("div").append($('<p> </p>'));
$("p").attr("id","p1");
$("#p1").append($('<label>Number 1: </label>'));
$("#p1").append($('<input type="text" value="2"> </input>'));
$("#p1 > input").attr("id","number1");

$("div").append($('<p></p>'));
$("#p1").next().attr("id","p2");
$("#p2").append($('<label>Number 2: </label>'));
$("#p2").append($('<input type="text" value="2"> </input>'));
$("#p2 > input").attr("id","number2");

$("div").append($('<p></p>'));
$("#p2").next().attr("id","p_sign");
$("#p_sign").append($('<label>Sign: </label>'));
$("#p_sign").append($('<input type="text"> </input>'));
$("#p_sign > input").attr({"id":"sign","value":"**"});

$("div").append($('<p></p>'));
$("#p_sign").next().attr("id","p_calc");
$("#p_calc").append($('<button>Calculate</button>'));
$("button").attr("id","calc_button");

$("div").append($('<p></p>'));
$("#p_calc").next().attr("id","p_result");
$("#p_result").append($('<label>Result:</label>'));
$("#p_result").append($('<span> </span>'));
$("#p_result span").attr("id","result");

$("#sign").addClass("inputClass");
$("#number1").addClass("inputClass");
$("#number2").addClass("inputClass");
$("#calc_button").addClass("inputClass");
$("#result").addClass("inputClass");

$("div").css({"display":"table"});
$("p").css({"display":"table-row"});
$("label").css({"display":"table-cell"});
$(".inputClass").css({"display": "table-cell"});

$("div").append('<button>Ajax</button>');

$("body").append('<div id="div1"></div>');
$("#div1").append('<button>This button will disappear</button>');


$("#div1 > button").click(function(){
    $.ajax({url: "http://echo.jsontest.com/key/value/one/two", success: function(result){
        $("#div1").html(JSON.stringify(result));
    }});
});

//
//$("#number1").on({
//        mouseover: function () {
//            $(this).hide();
//        }
//});
//
//$("#p_sign").on({
//        mouseover: function () {
//            $("#number1").show();
//        }
//});















// var button = document.querySelector('#big-button');
// button.addEventListener('click', handleClick);

// var Person = function (name) {
//     this.name = name;
// };
// var tom = new Person("tom");

// var Animal = {
// 	type: 'Invertabrates',
// 	displayType: function(){
// 		console.log(this.type);
// 	}
// };

// var animal1 = Object.create(Animal);
// animal1.displayType();

// var fish = Object.create(Animal);
// fish.type = 'Fishes';

// fish.displayType();
// animal1.displayType();
// Animal.displayType();

// console.log(document.URL);
// console.log(document.inputEncoding)







