//variables for game
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuess = []; 
var computerChoice;



//to initiate the game
var playAgain = true;

if (playAgain) {
	testGame();
}

//letter randomizer
function testGame() {
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var randomLetter = alphabet[Math.floor(Math.random() * 26)];
	var computerChoice = randomLetter;

	console.log(computerChoice);



	document.onkeyup = function(event) {

		//turns user's unicode into corresponding alphanumeric key,
		//then turns it into a lowercase string.
		var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(userChoice);

		if (userChoice === computerChoice) {
			console.log("You win.");
			playAgain = false;
		} else {
			guessesLeft = guessesLeft - 1;
			document.getElementById("guesses-left").innerHTML = guessesLeft;

			console.log(guessesLeft);

				if (guessesLeft === 0) {
					console.log("YOU LOST EVERYTHING.");
				} else {
					console.log("You lose. Try again");
					testGame();
				}

		}

	}

}




