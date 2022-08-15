/*var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector("guesses");
var lastResult = document.querySelector("lastResult");
var lowOrHi = document.querySelector("lowOrHi");

var guessSubmit = document.querySelector(".guessSubmit");
var guessFild = document.querySelector(".guessFild");

var guessCount = 1;
var resetButton;

function checkGuess() {
    var userGuess = Number(guessFild.value);
    if (guessCount ===1) {
        guesses.textContent = "Введите число: ";
    }

    guesses.textContent += userGuess + "";

    if (userGuess === randomNumber) {
        lastResult.textContent = "Угадал";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";

        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = "Gay Over"

        setGameOver();

    } else {
        lastResult.textContent = "lox";
        lastResult.style.backgroundColor = "red";
        if(userGuess < randomNumber) {
            lowOrHi.textContent = "Маловато";

    } else if (userGuess > randomNumber) {
        lowOrHi.textContent = "Многовато";
    }
    
}

guessCount++;
guessFild.value = "";
guessFild.focus();

}

guessSubmit.addEventListener('click', checkGuess);*/


let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
let guessCount = 1;
let resetButton;

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }

  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Повезло Поезло)";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = " ";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "Gay Over";
    lowOrHi.textContent = " ";
    setGameOver();
  } else {
    lastResult.textContent = "Вадя лох";
    lastResult.style.backgroundColor = "red";
    if(userGuess < randomNumber) {
      lowOrHi.textContent = "Маловато" ;
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = "Многовато";
    }
  }

  guessCount++;
  guessField.value = " ";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Начать новую игру";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);

}

function resetGame () {
  guessCount = 1;
  
  var resetPaaras = document.querySelectorAll(".resultParas p");
  for (var i = 0 ; i<resetPaaras.length ; i++) {
    resetPaaras[i].textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  let randomNumber = Math.floor(Math.random() * 100) + 1;
}





