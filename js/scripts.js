$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var lastInput = $("input#last").val();
    var streetInput= $("input#street").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();

    $(".name").text(nameInput);
    $(".last").text(lastInput);
    $(".street").text(streetInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);

    $("#letter").show();

    event.preventDefault();
  });
});
