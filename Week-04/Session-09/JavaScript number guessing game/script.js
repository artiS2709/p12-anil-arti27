// JavaScript number guessing game
let totalGuesses=0;
let numToGuess = prompt("Enter a number between 1 and 100");
function playGuessingGame(numToGuess,totalGuesses){
    totalGuesses++;
    alert(totalGuesses);
}

playGuessingGame();