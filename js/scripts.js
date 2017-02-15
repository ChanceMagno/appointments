$(document).ready(function() {
  $("form#appointmentBooking").submit(function(event) {

    var customerName =$("input#name").val();
    alert(customerName);
    var date = $("input#date").val();
    var startTime = $("input#startTime").val();
    var endTime = $("input#endTime").val();

      $(".customerName").text(customerName);
      $(".customerDate").text(date);
      $(".setTime").text(startTime);
      $(".setEndTime").text(endTime);
      $("#appointmentConfirmation").show();

      event.preventDefault();

      alert("end");
  });

});

/*
var weight = parseInt(prompt("What is your weight in kilograms?"));
var height = parseInt(prompt("What is your height in meters?"));
var calculateBMI = function(weight,height){
	return(weight / height / height);
};
alert("Your BMI is " + calculateBMI(weight,height) + ". Go to the hospital."); */


/*
var fahrenheit = parseInt(prompt("Enter fahrenheit: "));
var celsius = parseInt(prompt("Enter celcius: "));

var celsiusToFahrenheit = function(cel){
	return (cel*(9/5)) +32;
}

var fahrenheitToCelsius = function(fah){
	return (fah-32) * (5/9);
};

alert("Celsius to fahrenheit is: " + celsiusToFahrenheit(celsius));
alert("Fahrenheit to celsius is: " + fahrenheitToCelsius(fahrenheit)); */
