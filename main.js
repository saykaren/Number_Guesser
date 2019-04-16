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
  let startNum = document.getElementById("startNum").innerHTML;
  console.log("we are starting at "+startNum);
  
  document.getElementById("endNum").innerHTML = document.getElementById("maxRange").value;
  let endNum = document.getElementById("endNum").innerHTML;
  console.log("we are ending at "+endNum);

  function myRandomInt (startNum, endNum) {
    let ranAnswer = parseInt(Math.random() * (endNum-startNum) + startNum);
    console.log("Random Number is " + ranAnswer);
    let playerOneResult = document.getElementById('playerOneRecordGuess').innerHTML;
    console.log("Player one result is "+playerOneResult);
  }


}

function myRandomInt (startNum, endNum) {
  let ranAnswer = parseInt(Math.random() * (endNum-startNum) + startNum);
  console.log("Random Number is " + ranAnswer);
  let playerOneResult = document.getElementById('playerOneRecordGuess').innerHTML;
  console.log("Player one result is "+playerOneResult);
}

function karenRandomInt (min, max) {
  let ranAnswer = parseInt(Math.random() * (max-min) + min);
  console.log("Random number is " + ranAnswer);
  let playerOneResult = document.getElementById('playerOneRecordGuess').innerHTML;
  console.log("Player one result is "+playerOneResult);
  
}


function nameFunctionAndGuess () {
  document.getElementById("resultNamePlayerOne").innerHTML = document.getElementById("namePlayerOne").value;
  document.getElementById("resultNamePlayerTwo").innerHTML = document.getElementById("namePlayerTwo").value;
  document.getElementById("playerOneRecordGuess").innerHTML = document.getElementById("guessPlayerOne").value;
  document.getElementById("playerTwoRecordGuess").innerHTML = document.getElementById("guessPlayerTwo").value;
}

function myResetButton () {
  document.getElementsByClassName('inputField').value= '';
  document.getElementsByClassName('inputField').innterHTML = '';
}