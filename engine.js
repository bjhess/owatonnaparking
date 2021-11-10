"use strict";
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
const excludedMonths = [3, 4, 5, 6, 7, 8, 9];

window.onload = function() {
  // Show current date and time in Owatonna
  var nowString = 
    now.toLocaleTimeString("en-US", nowTimeOptions) +
    " on " +
    now.toLocaleDateString("en-US", nowDateOptions);
  document.getElementById("now").innerHTML = nowString;

  var park = "ANY";
  var parkExplanation = "because it is not the winter parking season";
  var parkArticle = "";
  if (excludedMonths.includes(month) ||
      (10 == month && day < 14) ||
      (10 == month && day == 14 && hour < 12) ||
      (2 == month && day == 31 && hour > 11)) {
  // if (false) {
    ;
  } else if (0 <= hour && hour < 12) {
    parkArticle = " the";
    park = evenOrOdd(day);
    parkExplanation = "because you are currently in the towing window for today";
  } else {
    var tomorrow = new Date();
    tomorrow.setDate(day + 1);
    parkArticle = " the";
    park = evenOrOdd(tomorrow.getDate());
    parkExplanation = "because the towing window is in the pre-dawn hours of " + tomorrow.toLocaleDateString("en-US", nowDateOptions);
  }

  document.getElementById("park").innerHTML = park;
  document.getElementById("parkArticle").innerHTML = parkArticle;
  document.getElementById("parkExplanation").innerHTML = parkExplanation;

  function evenOrOdd(day) {
    return (0 == day % 2 ? "EVEN" : "ODD");
  }
};