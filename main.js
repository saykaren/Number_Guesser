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
  /*Setting range for minimum range number based upon input*/
  document.getElementById("startNum").innerHTML = document.getElementById("minRange").value;
  let startNum = document.getElementById("startNum").innerHTML;
  console.log("we are starting at "+startNum);
  
  /*Setting range for maximum range number based upon input*/
  document.getElementById("endNum").innerHTML = document.getElementById("maxRange").value;
  let endNum = document.getElementById("endNum").innerHTML;
  console.log("we are ending at "+endNum);
  return startNum, endNum;
}

//Random Function to Determine Random number then compare players guesses
function myRandomInt (min, max) {
  var min = Math.ceil(min);
  var max = Math.floor(max);
  let randomArray = [];
  /*Generate random number and setting players guess*/
  const ranAnswer = Math.floor(Math.random() * (max - min)) + min;
  randomArray.push(ranAnswer);
  console.log("Random Number in array is" + randomArray[0]);
  let playerOneResult = document.getElementById('playerOneRecordGuess').innerHTML;
  console.log("Player one result is "+playerOneResult);
  let playerTwoResult = document.getElementById('playerTwoRecordGuess').innerHTML;
  console.log("Player two result is "+playerTwoResult);

  //Player One results qualifications 
  if (playerOneResult == randomArray[0]) {
    let oneWinner = "Winner!";
    document.getElementById('funnyResultOne').innerHTML = oneWinner;
    addElement();
    var resultsOneWinner = document.getElementById('namePlayerOne').value; 
    console.log("testing resultsOneWinner = "+resultsOneWinner);
    document.getElementById('scoreDetails').innerHTML = "Challenger "+ resultsOneWinner+" Winner";
  } else {
    if (playerOneResult < randomArray[0]) {
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
  if (playerTwoResult == randomArray[0]) {
    let twoWinner = "Winner!";
    document.getElementById('funnyResultTwo').innerHTML = twoWinner;
    addElement();
    var resultsTwoWinner = document.getElementById("namePlayerTwo").value;
    console.log("testing resultsTwoWinner = "+resultsTwoWinner);    
    document.getElementById("scoreDetails").innerHTML = "Challenger "+resultsTwoWinner+" Winner";
  } else {
    if (playerTwoResult < randomArray[0]) {
      console.log("Player Two too low, you lose");
      let tooLowTwo = "that's too low";
      document.getElementById('funnyResultTwo').innerHTML = tooLowTwo;
    } else{
        console.log("Player Two, too high, you lose");
        let tooHighTwo = "that's too high";
        document.getElementById('funnyResultTwo').innerHTML = tooHighTwo;
      }
  }
  console.log("Testing function myRandomInter: Random number is "+ranAnswer+ ". Then results player one is "+resultsOneWinner+". Results for player two is "+resultsTwoWinner);
  var importantResults = [];
  importantResults.push(randomArray);
  
  //If Statement to push into variable important results
  if (resultsOneWinner !== undefined){
    importantResults.push(resultsOneWinner);
  }
  if (resultsTwoWinner !== undefined){
    importantResults.push(resultsTwoWinner);
  }
  return importantResults;
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
  var createP = document.createElement('p');
  var textDiv = document.createTextNode(
    document.getElementById('resultNamePlayerOne').innerHTML
    + 
    " VS " 
    + 
    document.getElementById('resultNamePlayerTwo').innerHTML 
  );
  var textP = document.createTextNode(
    "CHALLENGER"
    +
    " WINNER" 
  );

  createDiv.className = "scoreCard";
  createDiv.id = "scoreTitle";
  createP.className = "scoreCard";
  createP.id = "scoreDetails";
   
  createDiv.appendChild(textDiv);
  createP.appendChild(textP);
  var elementDiv = document.getElementById('resultsDiv');
  elementDiv.appendChild(createDiv);
  var elementP = document.getElementById('resultsDiv');
  elementP.appendChild(createP);
}

//Resource https://www.youtube.com/watch?v=OpajusnOfYo
onkeyup="lettersOnly(this)"
function lettersOnly (input) {
  var regex = /[^a-z]/gi;
  input.value = input.value.replace(regex, "");
}