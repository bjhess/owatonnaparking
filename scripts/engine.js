"use strict";
import * as Worker from './worker.js';

function loadEvenOdd(now) {

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

function loadLights(now) {
  if (now.getMonth() == 11 && now.getDate() <= 25) {
    document.querySelector(".line").style.display = 'none';
    document.querySelector(".lights").style.display = '';
  }
}

window.onload = function() {
  const now = new Date();
  loadEvenOdd(now);
  loadLights(now);
}

// This works for most cases
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    loadEvenOdd();
  }
});

// Update every 60 seconds
setInterval(loadEvenOdd, 60000);