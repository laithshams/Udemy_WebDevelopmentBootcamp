$("h1").addClass("test2");
$("button").text("reset");
$("button").addClass("def");

$("button").click(function() {
  $("h1").text("hello");
  $("h1").attr("class", "test2");
  $("button").addClass("def");
});

$(document).keypress(function(event) {
  $("h1").text(event.key);
  $("h1").attr("class", "test1");
  $("button").removeClass("def");
});
