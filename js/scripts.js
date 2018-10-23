var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
}

var multiply = function(number1, number2) {
  return number1 * number2;
}

var divide = function(number1, number2) {
  return number1 / number2;
}

var count = function(number1, number2) {
  for (index = number1; index <= number2; index += number1) { // count by number1 to number2
    alert(index);
  }
}

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#sub1").val());
    var number2 = parseInt($("#sub2").val());
    var result = subtract(number1, number2);
    $("#output").text(result);
  });
  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#mult1").val());
    var number2 = parseInt($("#mult2").val());
    var result = multiply(number1, number2);
    $("#output").text(result);
  });
  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#div1").val());
    var number2 = parseInt($("#div2").val());
    var result = divide(number1, number2);
    $("#output").text(result);
  });
  $("form#count").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#count1").val());
    var number2 = parseInt($("#count2").val());
    var result = count(number1, number2);
    $("#output").text(result);
  });
});
