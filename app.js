$(document).ready(function() {
  var sessionCount = parseInt($("#session_time").html());
  var breakCount = parseInt($("#break_time").html());
  var timeClock = parseInt($("#time_clock").html(sessionCount));
  $("#reset").hide();
  $("#work_time, #relax_time").hide();


//start button click function
  $("#start").click(function() {
    var counter = setInterval(timer, 500);

    function timer() {
      $("#start, #subtract_session, #add_session, #subtract_break, #add_break").hide();
      $("#work_time").show();
      sessionCount -= 1;
      if(sessionCount === 0) {
        clearInterval(counter);
        breakTime();

      }

      $("#time_clock").html(sessionCount);
    }
  });


  $("#subtract_session").click(function() {
    if(sessionCount > 5) {
      sessionCount -= 5;
      $("#session_time").html(sessionCount);
      $("#time_clock").html(sessionCount);
    }

  });

  $("#add_session").click(function() {
    sessionCount += 5;
    $("#session_time").html(sessionCount);
    $("#time_clock").html(sessionCount);
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

  function breakTime() {

    $("#work_time").hide();
    $("#relax_time").show();
    $("#time_clock").html(breakCount);
  }




});
