/**
 * Timer Plugin
 *
 * Parse the document and look for timers to be activated.
 * Syntax is easy, any node with timer="(time here in minutes)" attribute
 * will be initialized.
 *
 * Click on the element start/pause the timer
 * Shift-click reset the timer
 * Cmd-click (osx) Ctrl-click (windows, linux) prompt for a new time
 */
var RevealStopwatch = (function() {
  var DEBUG = false;
  var ATTR_TIMER = "timer";
  var ATTR_TIMER_AUTOSTART = "timer-autostart";
  var ATTR_TIMER_STATUS = "timer-status";

  var WARN_THRESHOLD = 5 * 60;

  var IS_MAC = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

  function pad(num) {
    var s = "000000000" + num;
    return s.substr(s.length - 2);
  }

  function formatTime(seconds) {
    var hours = Math.floor(seconds / 3600);
    return pad(hours)
      + ":"
      + pad(Math.floor((seconds - hours * 3600) / 60))
      + ":"
      + pad(seconds % 60);
  }

  function getSeconds(watch) {
    var minutes = watch.getAttribute(ATTR_TIMER) || 30;
    return parseFloat(minutes) * 60;
  }

  var timers = [].slice.call(document.querySelectorAll("[" + ATTR_TIMER + "]") || []);
  timers.forEach(function(watch) {
    watch.classList.toggle("countdown");
    watch.textContent = formatTime(getSeconds(watch));
  });


  Reveal.addEventListener("slidechanged", function(event) {
    timers.forEach(function(watch) {
      if (
        !watch.started
          && event.currentSlide.contains(watch)
          && watch.hasAttribute(ATTR_TIMER_AUTOSTART)
      ) {
        watch.click();
      }
    })
  });

  var checkHandler;
  function checkTime() {
    var oneActive = timers.reduce(function(active, watch) {
      if (
        !watch.started
          && watch.hasAttribute(ATTR_TIMER_AUTOSTART)
          && Reveal.getCurrentSlide().contains(watch)
      ) {
        watch.click();
      }

      if (watch.started) {
        var seconds = Math.max(-1, watch.getAttribute(ATTR_TIMER_STATUS) - 1);
        // Timer is over
        if (seconds === -1) {
          delete watch.started;
          return active || false;
        }

        // Timer is less than treshold
        if (seconds < WARN_THRESHOLD) {
          watch.style.color = "#CE0058";
        } else {
          delete watch.style.color;
        }

        // Visual remaining time update
        watch.textContent = formatTime(seconds);
        watch.setAttribute(ATTR_TIMER_STATUS, seconds);
        return active || true;
      }
      return active || false;
    }, false);

    if (!oneActive) {
      DEBUG && console.log("[RevealTimer]", "No active timer, deactivating chekHandler interval");
      clearInterval(checkHandler);
      checkHandler = null;
    }
  }

  document.addEventListener("click", function(event) {
    var target = event.target;
    // It's not a timer.
    if (!target.hasAttribute(ATTR_TIMER)) {
      return;
    }

    // We want to reset it.
    if (event.shiftKey) {
      target.textContent = formatTime(getSeconds(target));
      target.removeAttribute(ATTR_TIMER_STATUS);
      target.style.color = null;
      delete target.started;
      return;
    }

    if ((IS_MAC && event.metaKey) || event.ctrlKey) {
      target.removeAttribute(ATTR_TIMER_STATUS);
      var minutes = prompt("Reset timer to (minutes) ?", 15);
      if (minutes !== null) {
        target.setAttribute(ATTR_TIMER, minutes);
        target.textContent = formatTime(getSeconds(target));
      }
    }

    // We toggle start/pause
    if (!target.started) {
      if (!target.hasAttribute(ATTR_TIMER_STATUS)) {
        target.setAttribute(ATTR_TIMER_STATUS, getSeconds(target));
      }
      target.started = true;

      // First time we activate a timer, let's watch
      if (!checkHandler) {
        DEBUG && console.log("[RevealTimer]", "Starting chekHandler interval");
        checkHandler = setInterval(checkTime, 1000);
      }

    } else {
      target.started = false;
    }
  }, true);
})();
