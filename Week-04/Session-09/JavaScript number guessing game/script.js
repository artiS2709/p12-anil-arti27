// JavaScript number guessing game

// Counting the number of guesses
// made for correct Guess
let guess=1;

function playGuessingGame(numToGuess,totalGuesses){
    
    let userVal = prompt("Enter a number between 1 and 100");
    // Generate a Random Number
    //let randomNum = Math.floor(Math.random() * 10 + 1);
    let randomNum =3;
    //console.log(randomNum);
    //console.log(numToGuess);
    while(totalGuesses){
    if (numToGuess == randomNum) {
        return guess;
    }else if (numToGuess > randomNum && numToGuess!="") {
        guess++;
        prompt(numToGuess+" is too large. Guess a smaller number.");
    }else if(numToGuess < randomNum && numToGuess!=""){
        guess++;
        prompt(numToGuess+" is too small. Guess a larger number");
    }else if(isNaN(numToGuess) || numToGuess==""){
        prompt("Please enter a number");
    }else{
        return 0;
    }
}

}

playGuessingGame(numToGuess,totalGuesses);

 
