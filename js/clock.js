$(document).ready(function () {
  let clock;

  const targetDate = moment.tz("2026-07-17T20:00:00", "Africa/Cairo");
  const now = moment();
  let diff = targetDate.diff(now, "seconds");

  if (diff <= 0) {
    clock = $(".clock").FlipClock(0, {
      clockFace: "DailyCounter",
      countdown: true,
      autostart: false
    });
    console.log("Date has already passed!");
  } else {
    clock = $(".clock").FlipClock(diff, {
      clockFace: "DailyCounter",
      countdown: true,
      callbacks: {
        stop: function () {
          console.log("Timer has ended!");
        }
      }
    });

    function checktime() {
      let t = clock.getTime().time;
      if (t <= 0) {
        clock.setTime(0);
      } else {
        setTimeout(checktime, 1000);
      }
    }

    setTimeout(checktime, 1000);
  }
});