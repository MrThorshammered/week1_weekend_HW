// declare all possible winning declerations
var winningArray = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[1,4,7],[2,4,6],[0,3,6],[2,5,8]];
var movesArray;
// way of logging which box has been clicked. probably good idea to console log at first
 var clickBox = document.getElementsByClassName('square')
 var clickBox1 = clickBox[0];
 var clickBox2 = clickBox[1];
 var clickBox3 = clickBox[2];
 var clickBox4 = clickBox[3];
 var clickBox5 = clickBox[4];
 var clickBox6 = clickBox[5];
 var clickBox7 = clickBox[6];
 var clickBox8 = clickBox[7];
 var clickBox9 = clickBox[8];






// need an array to store clickEvent data
// movesArray = movesArray.push[index]
// need a function to place an X or an O into a box once it's clicked



// Add and click event to the board div so that when a box is selected it assigns
// an x or an o to that particular box. then watch the box so that values can be
// toted up to get a combination from winning array

// Changing players from x to o 
function changePlayer(){

 currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
 document.getElementById('currentPlayer').innerHTML = currentPlayer;
}
