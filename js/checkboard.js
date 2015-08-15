var winningCombinations =

var scoreBox = document.getElementsByClassName("square");

for(var i=0;i< scoreBox.length; i++) {
   (function(index) {
        scoreBox[index].addEventListener("click", function(){
           console.log("you clicked box " + index);
         })
   })(i);
}

