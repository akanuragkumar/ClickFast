$(document).ready(function() {

  var timeVar = null;
  var clicks = 0;
  var timerFlag = true;

  $("#restart-icon").hide();
  $("#fb-share").hide();

  $("#clicking-pad").click(function() {
    if (clicks == 0) {
      startTimer();
      $("#pad-text").hide();
    }
    if (timerFlag) {
      clicks = clicks + 1;
      $("#mouse-clicks").text(clicks);
    }
  });

  /* Timer Functions */
  function startTimer()  {
    timeVar = setInterval(function()  {changeTimer()}, 1000);
  }

  function changeTimer()  {
    var time = parseInt( $("#timer").text() );
    if( time == 0 ) {
      timerFlag = false;
      stopTimer();
      $("#timer").text("Time Over");

      var score = clicks / 15;
      var resultText = "You clicked " + score.toFixed(2) + " times per second";
      $("#pad-text").text(resultText).fadeIn();

      $("#restart-icon").fadeIn();
      $("#fb-share").fadeIn();
    }
    else  {
      $("#timer").text(time-1);
    }
  }

  function stopTimer()  {
    clearInterval(timeVar);
  }
  /* End Timer Functions */

  $("#restart-icon").click(function() {
    location.reload();
  })
});
