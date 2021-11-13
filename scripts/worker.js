function evenOrOdd(day) {
  return (0 == day % 2 ? "EVEN" : "ODD");
}

export const dateOptions = { 
  month: 'long', 
  day: 'numeric', 
  timeZone: 'America/Chicago' };

export const timeOptions = {
  hour: 'numeric', 
  minute: '2-digit', 
  timeZone: 'America/Chicago' };

export function parkingDeets(date) {
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const excludedMonths = [3, 4, 5, 6, 7, 8, 9];
  let park = "ANY";
  let parkExplanation = "because it is not the winter parking season";
  let parkArticle = "";


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
    const tomorrow = new Date(date);
    tomorrow.setDate(day + 1);
    parkArticle = " the";
    park = evenOrOdd(tomorrow.getDate());
    parkExplanation = "because the towing window is in the pre-dawn hours of " + tomorrow.toLocaleDateString("en-US", dateOptions);
  }

  const deets = new Map();
  deets.set('park', park)
    .set('parkExplanation', parkExplanation)
    .set('parkArticle', parkArticle);
  return deets;
}
