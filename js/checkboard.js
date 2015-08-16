// players so that the console knows who is who
var player1 = "X";
var player2 = "O";
// Add and click event to the board div so that when a box is selected it assigns
// an x or an o to that particular box. then watch the box so that values can be
// toted up to get a combination from winning array
var currentPlayer = document.getElementById('currentPlayer');

var body = document.getElementById('board')

body.addEventListener('click', function(){
 if (currentPlayer.innerHTML === "X"){
  currentPlayer.innerHTML = "O";
}else{
   currentPlayer.innerHTML = "X";
}});



// getting information from the current player as so to alter which player is selected
var playerChange = (currentPlayer.innerHTML.value);

// declare all possible winning declerations
var winningArray = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[1,4,7],[2,4,6],[0,3,6],[2,5,8]];
var movesArray;
// way of logging which box has been clicked. probably good idea to console log at first
 var clickBox = document.getElementsByClassName('square');

 var clickBox1 = clickBox[0];
 var clickBox2 = clickBox[1];
 var clickBox3 = clickBox[2];
 var clickBox4 = clickBox[3];
 var clickBox5 = clickBox[4];
 var clickBox6 = clickBox[5];
 var clickBox7 = clickBox[6];
 var clickBox8 = clickBox[7];
 var clickBox9 = clickBox[8];

 clickBox1.addEventListener("click", function(){
 console.log("box 1 was clicked");
   if (box1_1.innerHTML === 'X'){
   	box1_1.innerHTML = "O"
   }else{
   	box1_1.innerHTML = "X"
   } });

 clickBox2.addEventListener("click", function(){
 console.log("box 2 was clicked");
if (currentPlayer.innerHTML === "X"){
   	box1_2.innerHTML = "O"
   }else{
   	box1_2.innerHTML = "X"
   } });

 clickBox3.addEventListener("click", function(){
 console.log("box 3 was clicked");
if (currentPlayer.innerHTML === "X"){
   	box1_3.innerHTML = "O"
   }else{
   	box1_3.innerHTML = "X"
   } });

 clickBox4.addEventListener("click", function(){
 console.log("box 4 was clicked");
if (currentPlayer.innerHTML === "X"){
   	box2_1.innerHTML = "O"
   }else{
   	box2_1.innerHTML = "X"
   } });

 clickBox5.addEventListener("click", function(){
 console.log("box 5 was clicked");
 if (currentPlayer.innerHTML === "X"){
   	box2_2.innerHTML = "O"
   }else{
   	box2_2.innerHTML = "X"
   } });

 clickBox6.addEventListener("click", function(){
 console.log("box 6 was clicked");
if (currentPlayer.innerHTML === "X"){
   	box2_3.innerHTML = "O"
   }else{
   	box2_3.innerHTML = "X"
   } });

 clickBox7.addEventListener("click", function(){
 console.log("box 7 was clicked");
if (currentPlayer.innerHTML === "X"){
   	box3_1.innerHTML = "O"
   }else{
   	box3_1.innerHTML = "X"
   } });
 
 clickBox8.addEventListener("click", function(){
 console.log("box 8 was clicked");
if (currentPlayer.innerHTML === "X"){
   	box3_2.innerHTML = "O"
   }else{
   	box3_2.innerHTML = "X"
   } });

 clickBox9.addEventListener("click", function(){
 console.log("box 9 was clicked");
if (currentPlayer.innerHTML === "X"){
   	box3_3.innerHTML = "O"
   }else{
   	box3_3.innerHTML = "X"
   } });

// declare a winner
if (player1 === winningArray){
	alert("X has won");
}else if(player2 === winningArray){
	alert("O has won");
}else{
	alert("its a tie");
};

// need an array to store clickEvent data
// movesArray = movesArray.push[index]
// need a function to place an X or an O into a box once it's clicked






