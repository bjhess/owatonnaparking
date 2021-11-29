"use strict";
import * as Worker from './worker.js';

function loadEvenOdd() {
  const now = new Date();

  // Current date and time in Owatonna
  const nowString = 
    now.toLocaleTimeString("en-US", Worker.timeOptions) +
    " on " +
    now.toLocaleDateString("en-US", Worker.dateOptions);

  const parkingDeets = Worker.parkingDeets(now);

  document.getElementById("now").innerHTML = nowString;
  document.getElementById("park").innerHTML = parkingDeets.get('park');
  document.getElementById("parkArticle").innerHTML = parkingDeets.get('parkArticle');
  document.getElementById("parkExplanation").innerHTML = parkingDeets.get('parkExplanation');
}

function loadLights() {
  const now = new Date();
  if (now.getMonth() == 11 && now.getDate() <= 25) {
    const lines = document.querySelectorAll(".line")
    for (var i = 0; i < lines.length; i++) {
      lines[i].style.display = "none"
    }
    const lights = document.querySelectorAll(".lights")
    for (var i = 0; i < lights.length; i++) {
      lights[i].style.display = ""
    }
  }
}

window.onload = function() {
  loadEvenOdd();
  loadLights();
}

// This works for most cases
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    loadEvenOdd();
  }
});

// Update every 60 seconds
setInterval(loadEvenOdd, 60000);