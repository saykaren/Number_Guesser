/* 
input items:
	Range: minRange / maxRange
	Names: namePlayerOne / namePlayerTwo
	Guess: guessPlayerOne / guessPlayerTwo

change points:
	Range: startNum / endNum
	Name: resultNamePlayerOne / resultNamePlayerTwo
	Result: playerOneRecordGuess / playerTwoRecordGuess
  Comments: funnyResultOne / funnyResultTwo
  
Functions:
  minFunction() - Start number
  maxFunction() - End number
  nameOneFunction() - Player One Name
  nameTwoFunction() - Player Two Name

*/
function minFunction () {
  document.getElementById("startNum").innerHTML = document.getElementById("minRange").value;
}

function maxFunction () {
  document.getElementById("endNum").innerHTML = document.getElementById("maxRange").value;
}

function nameOneFunction (){
  document.getElementById("resultNamePlayerOne").innerHTML = document.getElementById("namePlayerOne").value;
}

function nameTwoFunction (){
  document.getElementById("resultNamePlayerTwo").innerHTML = document.getElementById("namePlayerTwo").value;
}

