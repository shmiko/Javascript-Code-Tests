var size = 8;

var board = "";

for (var y = 0; y < size; y++) { //board doesn't change for y loops
  for (var x = 0; x < size; x++) { //board changes for each x loop within y loop
  	if ((x + y) % 2 == 0)
      board += " "; //if even number then add space
    else
      board += "#"; //if odd number add hash
  }
  board += "\n"; //for each y loop add new line
}
console.log(board.length); //should be 8 + (8 x 8) = 72
console.log(board); //prints checkboard starting with space then hash 8 characters long