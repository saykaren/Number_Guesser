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
  return startNum, endNum;


}

//Random Function to Determine Random number then compare players guesses
function myRandomInt (min, max) {
  var min = Math.ceil(min);
  var max = Math.floor(max);

  const ranAnswer = Math.floor(Math.random() * (max - min)) + min;
  console.log("Random Number is " + ranAnswer);
  let playerOneResult = document.getElementById('playerOneRecordGuess').innerHTML;
  console.log("Player one result is "+playerOneResult);
  let playerTwoResult = document.getElementById('playerTwoRecordGuess').innerHTML;
  console.log("Player two result is "+playerTwoResult);

   //Player One results qualifications 
  if (playerOneResult == ranAnswer) {
    let oneWinner = "Winner! Player One!";
    document.getElementById('funnyResultOne').innerHTML = oneWinner;
  } else {
    if (playerOneResult < ranAnswer) {
      console.log("Player One Too low, you lose");
      let tooLowOne = "Player One too low, you lose";
      document.getElementById('funnyResultOne').innerHTML = tooLowOne;
    } else {
      console.log("Player One Too high!");
      let tooHighOne = "Player One too high! You lose";
      document.getElementById('funnyResultOne').innerHTML = tooHighOne;
    }
  }

  
  //Player Two Results Qualifications
  if (playerTwoResult == ranAnswer) {
    console.log('Player Two you Win!!');
    let twoWinner = "Winner! Player Two!";
    document.getElementById('funnyResultTwo').innerHTML = twoWinner;
  } else {
    if (playerTwoResult < ranAnswer) {
      console.log("Player Two too low, you lose");
      let tooLowTwo = "Player Two too low, you lose";
      document.getElementById('funnyResultTwo').innerHTML = tooLowTwo;
    }
      else{
        console.log("Player Two, too high, you lose");
        let tooHighTwo = "Player Two too high! You lose";
        document.getElementById('funnyResultTwo').innerHTML = tooHighTwo;
      }
  }

}

//Function for Submit Button
function nameFunctionAndGuess () {
  document.getElementById("resultNamePlayerOne").innerHTML = document.getElementById("namePlayerOne").value;
  document.getElementById("resultNamePlayerTwo").innerHTML = document.getElementById("namePlayerTwo").value;
  document.getElementById("playerOneRecordGuess").innerHTML = document.getElementById("guessPlayerOne").value;
  document.getElementById("playerTwoRecordGuess").innerHTML = document.getElementById("guessPlayerTwo").value;
  
  let startNum = document.getElementById("startNum").innerHTML;
  console.log("we are starting at "+startNum);
  
  let endNum = document.getElementById("endNum").innerHTML;
  console.log("we are ending at "+endNum);
  myRandomInt(startNum, endNum);
}

//Reset Button --- still working on 
function myResetButton () {
  document.getElementsByClassName('inputField').value= '';
  document.getElementsByClassName('inputField').innterHTML = '';
}