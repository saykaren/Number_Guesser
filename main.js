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

//Random set function Globally
var outsideRandomGlobal = 0;
var guessCountGame = 0;
var gameFinalTimer;


window.onload = myRandomInt(1, 100);

function minMaxFunction () {
  /*Setting range for minimum range number based upon input*/
  document.getElementById("startNum").innerHTML = document.getElementById("minRange").value;
  let startNum = document.getElementById("startNum").innerHTML;
  console.log({startNum});
  
  /*Setting range for maximum range number based upon input*/
  document.getElementById("endNum").innerHTML = document.getElementById("maxRange").value;
  let endNum = document.getElementById("endNum").innerHTML;
  console.log("we are ending at "+endNum);

  //update random global variable
  myRandomInt(startNum, endNum);

  return startNum, endNum;
}


//Random Function to Determine Random number
function myRandomInt (min, max) {
  var min = Math.ceil(min);
  var max = Math.floor(max);
  let randomArray = [];
  /*Generate random number and setting players guess*/
  const ranAnswer = Math.floor(Math.random() * (max - min)) + min;
  outsideRandomGlobal = ranAnswer;
  /*Starts timer*/
  gameStartTimer();
}
  
function comparePlayerGuesses () {
  let playerOneResult = document.getElementById('playerOneRecordGuess').innerHTML;
  console.log({playerOneResult});
  let playerTwoResult = document.getElementById('playerTwoRecordGuess').innerHTML;
  console.log({playerTwoResult});

  //Player One results qualifications 
  if (playerOneResult == outsideRandomGlobal) {
    let oneWinner = "Winner!";
    document.getElementById('funnyResultOne').innerHTML = oneWinner;
    let TwoLoser = "Better luck next time";
    document.getElementById('funnyResultTwo').innerHTML = TwoLoser;
    addElement();
    var resultsOneWinner = document.getElementById('namePlayerOne').value; 
    console.log({resultsOneWinner});
    document.getElementById('scoreDetails').innerHTML = "Challenger 1 "+ resultsOneWinner+" Winner";
    
  } else {
    if (playerOneResult < outsideRandomGlobal) {
      let tooLowOne = "that's too low";
      document.getElementById('funnyResultOne').innerHTML = tooLowOne;
    } else {
      let tooHighOne = "that's too high";
      document.getElementById('funnyResultOne').innerHTML = tooHighOne;
    }
  }

  //Player Two Results Qualifications
  if (playerTwoResult == outsideRandomGlobal) {
    let twoWinner = "Winner!";
    let OneLoser = "Better luck next time";
    document.getElementById('funnyResultTwo').innerHTML = twoWinner;
    document.getElementById('funnyResultOne').innerHTML = OneLoser;
    addElement();
    var resultsTwoWinner = document.getElementById("namePlayerTwo").value;
    console.log({resultsTwoWinner});    
    document.getElementById("scoreDetails").innerHTML = "Challenger 2 "+resultsTwoWinner+" Winner";
  } else {
    if (playerTwoResult < outsideRandomGlobal) {
      let tooLowTwo = "that's too low";
      document.getElementById('funnyResultTwo').innerHTML = tooLowTwo;
    } else{
        let tooHighTwo = "that's too high";
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
  console.log({startNum});
  
  let endNum = document.getElementById("endNum").innerHTML;
  console.log({endNum});
  
  comparePlayerGuesses();
  guessAdder();
}

//Reset Button
function myResetButton () {
  document.getElementById('namePlayerOne').value = '';
  document.getElementById('namePlayerTwo').value = '';
  document.getElementById('guessPlayerOne').value = '';
  document.getElementById('guessPlayerTwo').value = '';
}

//Clear Game Button
function myClearButton () {
  myResetButton();
  var outsideRandomGlobal = 0;
  var guessCountGame = 0;
  var element = document.getElementById('resultsDiv');
  element.parentNode.removeChild(element);

}

//Adding Results Element in second column
function addElement () {
  gameEndTimer();
  var createDiv = document.createElement('div');
  var createP = document.createElement('p');
  var createDivFooter = document.createElement('div');
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
  var finalGuessCount = guessCountGame+1;
  var textDivFooter = document.createTextNode(
    finalGuessCount+" GUESSES        "+gameFinalTimer+" SECONDS"
  )

  createDiv.className = "scoreCard";
  createDiv.id = "scoreTitle";
  createP.className = "scoreCard";
  createP.id = "scoreDetails";
  createDivFooter.id = "scoreFooter";
   
  createDiv.appendChild(textDiv);
  createP.appendChild(textP);
  createDivFooter.appendChild(textDivFooter);
  var elementDiv = document.getElementById('resultsDiv');
  elementDiv.appendChild(createDiv);
  var elementP = document.getElementById('resultsDiv');
  elementP.appendChild(createP);
  var elementDivFooter = document.getElementById('resultsDiv');
  elementDivFooter.appendChild(createDivFooter);

  guessCountGame=-1;
  myRandomInt(1, 100);
  finalTimeAmount = 0;

}



//Resource https://www.youtube.com/watch?v=OpajusnOfYo
onkeyup="lettersOnly(this)"
function lettersOnly (input) {
  var regex = /[^a-z]/gi;
  input.value = input.value.replace(regex, "");
}

//Function to count how many guesses until a winner is determined 
function guessAdder() {
  guessCountGame ++;
}

//Timer functions
var startTime, endTime;

function gameStartTimer () {
  startTime = new Date();
};

function gameEndTimer () {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  //remove ms
  timeDiff /= 1000;

  //get seconds
  var finalTimeAmount = Math.round(timeDiff);
  console.log({finalTimeAmount});
  gameFinalTimer = finalTimeAmount;
}

