$(document).ready(function() {
  $("form#appointmentBooking").submit(function(event) {
    var customerName =$("input#name").val();
    var date = $("input#date").val();
    var startTime = $("input#startTime").val();
    var endTime = $("input#endTime").val();
    $(".customerName").text(customerName);
    $(".customerDate").text(date);
    $(".setTime").text(startTime);
    $(".setEndTime").text(endTime);
    $("#appointmentConfirmation").show();
    event.preventDefault();
  });
});
