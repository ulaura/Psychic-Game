//variables for game
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuess = []; 
var computerChoice;



//to initiate the game
var playAgain = true;

if (playAgain) {
	theGame();
}

//letter randomizer
function theGame() {

	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var randomLetter = alphabet[Math.floor(Math.random() * 26)];
	var computerChoice = randomLetter;

	console.log(computerChoice);
		

	checkIfCorrect();

	function checkIfCorrect() {

		document.onkeyup = function(event) {

			//turns user's unicode into corresponding alphanumeric key,
			//then turns it into a lowercase string.
			var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
			

			if (userChoice === computerChoice) {
				console.log("You win."); //test
				wins = wins + 1;
				document.getElementById("your-wins").innerHTML = wins;

				guessesLeft = 9; //reset variable
				yourGuess = [];  //reset array so it's empty
				document.getElementById("guesses-left").innerHTML = guessesLeft;  //reset display on screen
				document.getElementById("your-guesses").innerHTML = yourGuess;    //reset display on screen
				theGame(); //restart the game with new computerChoice. 
			} else {
				guessesLeft = guessesLeft - 1;
				
				document.getElementById("guesses-left").innerHTML = guessesLeft; 
				yourGuess.push(userChoice); 

				console.log("Your guesses so far: " + yourGuess); //test

				document.getElementById("your-guesses").innerHTML = yourGuess;

				console.log(guessesLeft);

					if (guessesLeft === 0) {
						console.log("YOU LOSE.");
						losses = losses + 1
						document.getElementById("your-losses").innerHTML = losses;

						guessesLeft = 9; //reset variable
						yourGuess = [];  //reset array so it's empty
						document.getElementById("guesses-left").innerHTML = guessesLeft;  //reset display on screen
						document.getElementById("your-guesses").innerHTML = yourGuess;    //reset display on screen
						theGame(); //restart the game with new computerChoice.

					} else {
						console.log("Incorrect. Try again");
						checkIfCorrect();
						
					}

			}
		}
	}

}



