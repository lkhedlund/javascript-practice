/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

function joinList(list) {
  var joinedList = '';
  for (i = 0; i < list.length; i++) {
    if (i !== list.length - 1) {
      joinedList += list[i] + ', ';
    } else {
      joinedList += list[i];
    }
  }
  return joinedList;
}
var concepts = joinList(conceptList);

console.log("Today I learned about " + concepts + ".");
