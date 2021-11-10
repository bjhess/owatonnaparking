"use strict";
import * as Worker from './worker.js';

var now = new Date();
var month = now.getMonth();
var day = now.getDate();
var hour = now.getHours();

// Current date and time in Owatonna
var nowString = 
  now.toLocaleTimeString("en-US", Worker.timeOptions) +
  " on " +
  now.toLocaleDateString("en-US", Worker.dateOptions);

window.onload = function() {
  var parkingDeets = Worker.parkingDeets(now);

  document.getElementById("now").innerHTML = nowString;
  document.getElementById("park").innerHTML = parkingDeets.get('park');
  document.getElementById("parkArticle").innerHTML = parkingDeets.get('parkArticle');
  document.getElementById("parkExplanation").innerHTML = parkingDeets.get('parkExplanation');
};