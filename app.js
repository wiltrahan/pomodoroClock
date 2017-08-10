$(document).ready(function() {
  var sessionCount = parseInt($("#session_time").html());
  var breakCount = parseInt($("#break_time").html());
  $("#reset").hide();


  $("#subtract_session").click(function() {
    sessionCount -= 5;
    $("#session_time").html(sessionCount);
  });

  $("#add_session").click(function() {
    sessionCount += 5;
    $("#session_time").html(sessionCount);
  });

  $("#subtract_break").click(function() {
    breakCount -= 1;
    $("#break_time").html(breakCount);
  });

  $("#add_break").click(function() {
    breakCount += 1;
    $("#break_time").html(breakCount);
  });


});
