$(document).ready(function() {
  var sessionCount = parseInt($("#session_time").html());
  var breakCount = parseInt($("#break_time").html());
  var timeClock = parseInt($("#time_clock").html());
  $("#reset").hide();

  $("#start").click(function() {
    var counter = setInterval(timer, 1000);

    function timer() {
      $("#start, #subtract_session, #add_session, #subtract_break, #add_break").hide();
      timeClock -= 1;
      if(timeClock === 0) {
        clearInterval(counter);

      }

      $("#time_clock").html(timeClock);
    }
  });


  $("#subtract_session").click(function() {
    if(sessionCount > 5) {
      sessionCount -= 5;
      $("#session_time").html(sessionCount);
    }

  });

  $("#add_session").click(function() {
    sessionCount += 5;
    $("#session_time").html(sessionCount);
  });

  $("#subtract_break").click(function() {
    if(breakCount > 1) {
      breakCount -= 1;
      $("#break_time").html(breakCount);
    }
  });

  $("#add_break").click(function() {
    breakCount += 1;
    $("#break_time").html(breakCount);
  });


});
