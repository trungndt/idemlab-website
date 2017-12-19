$(".text-green").on "click", (event) ->
  $("#event").show()
  $("#hotel").hide()
  event.preventDefault()
$(".text-blue").on "click", (event) ->
  $("#hotel").show()
  $("#event").hide()
  event.preventDefault()
$('#subject').niceSelect()