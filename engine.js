"use strict";
import * as Worker from './worker.js';

var now = new Date();
var month = now.getMonth();
var day = now.getDate();
var hour = now.getHours();
const nowDateOptions = { 
  month: 'short', 
  day: 'numeric', 
  timeZone: 'America/Chicago' };
const nowTimeOptions = {
  hour: '2-digit', 
  minute: '2-digit', 
  timeZone: 'America/Chicago' };

// Current date and time in Owatonna
var nowString = 
  now.toLocaleTimeString("en-US", nowTimeOptions) +
  " on " +
  now.toLocaleDateString("en-US", nowDateOptions);

window.onload = function() {
  var parkingDeets = Worker.parkingDeets(now);

  document.getElementById("now").innerHTML = nowString;
  document.getElementById("park").innerHTML = parkingDeets.get('park');
  document.getElementById("parkArticle").innerHTML = parkingDeets.get('parkArticle');
  document.getElementById("parkExplanation").innerHTML = parkingDeets.get('parkExplanation');
};