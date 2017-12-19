(function() {
  $(".text-green").on("click", function(event) {
    $("#event").show();
    $("#hotel").hide();
    return event.preventDefault();
  });

  $(".text-blue").on("click", function(event) {
    $("#hotel").show();
    $("#event").hide();
    return event.preventDefault();
  });

  $('#subject').niceSelect();

}).call(this);
