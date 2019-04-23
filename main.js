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
    let oneWinner = "Winner!";
    document.getElementById('funnyResultOne').innerHTML = oneWinner;
    addElement();
    var resultsOneWinner = document.getElementById(namePlayerOne).value;
    
  } else {
    if (playerOneResult < ranAnswer) {
      console.log("Player One Too low, you lose");
      let tooLowOne = "that's too low";
      document.getElementById('funnyResultOne').innerHTML = tooLowOne;
    } else {
      console.log("Player One Too high!");
      let tooHighOne = "that's too high";
      document.getElementById('funnyResultOne').innerHTML = tooHighOne;
    }
  }

  
  //Player Two Results Qualifications
  if (playerTwoResult == ranAnswer) {
    console.log('Player Two you Win!!');
    let twoWinner = "Winner!";
    document.getElementById('funnyResultTwo').innerHTML = twoWinner;
    addElement();
    var resultsTwoWinner = document.getElementById(namePlayerTwo).value;
    
     
  } else {
    if (playerTwoResult < ranAnswer) {
      console.log("Player Two too low, you lose");
      let tooLowTwo = "that's too low";
      document.getElementById('funnyResultTwo').innerHTML = tooLowTwo;
    } else{
        console.log("Player Two, too high, you lose");
        let tooHighTwo = "that's too high";
        document.getElementById('funnyResultTwo').innerHTML = tooHighTwo;
      }
  }
  return [ranAnswer, resultsOneWinner, resultsTwoWinner];
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

//Adding Results Element in second column

function addElement () {
  var createDiv = document.createElement('div');
  var textDiv = document.createTextNode(
    document.getElementById('resultNamePlayerOne').innerHTML
    + 
    " versus " 
    + 
    document.getElementById('resultNamePlayerTwo').innerHTML 
    + 
    "WINNER" 

  );

  createDiv.className = "scoreCard";
  createDiv.id = "scoreTitle"
   
  createDiv.appendChild(textDiv);
  var elementDiv = document.getElementById('resultsDiv');
  elementDiv.appendChild(createDiv);
}

//Resource https://www.youtube.com/watch?v=OpajusnOfYo
onkeyup="lettersOnly(this)"
function lettersOnly (input) {
  var regex = /[^a-z]/gi;
  input.value = input.value.replace(regex, "");
}