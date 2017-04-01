/* Print out a chess board with a given length and width with the following pattern:
# # # #
 # # # #
# # # #
 # # # #
*/
var HEIGHT = 8, WIDTH = 8;

for ( var i = 0; i < HEIGHT; i++ ) {
  var row = '';
  for ( var j = 0; j < WIDTH; j++ ) {
    if ((i + j) % 2 === 0 ) {
      row += '#';
    } else {
      row += ' ';
    }
  }
  console.log(row);
}
