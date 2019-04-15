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
  minMaxFunction - Start number and end number
  nameFunctionAndGuess () - Player One Name / Player Two Name / Guess of player one / Guess of player two



*/
function minMaxFunction () {
  document.getElementById("startNum").innerHTML = document.getElementById("minRange").value;
  document.getElementById("endNum").innerHTML = document.getElementById("maxRange").value;
}

nameOneFunction(); nameTwoFunction(); recordGuessPlayerOne()

function nameFunctionAndGuess () {
  document.getElementById("resultNamePlayerOne").innerHTML = document.getElementById("namePlayerOne").value;
  document.getElementById("resultNamePlayerTwo").innerHTML = document.getElementById("namePlayerTwo").value;
  document.getElementById("playerOneRecordGuess").innterHTML = document.getElementById("guessPlayerOne").value;
  document.getElementById("playerTwoRecordGuess").innterHTML = document.getElementById("guessPlayerTwo").value;
}

