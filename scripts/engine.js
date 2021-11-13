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

window.onload = function() {
  loadEvenOdd();
}

// This works for most cases
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    loadEvenOdd();
  }
});

// Update every 60 seconds
setInterval(loadEvenOdd, 60000);