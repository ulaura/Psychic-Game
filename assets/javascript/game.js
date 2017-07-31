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

		var userChoice = String.fromCharCode(event.keyCode).toLowerCase();

		if (userChoice === computerChoice) {
			console.log("You win.");
			playAgain = false;
		} else {
			console.log("You lose. Try again");
			testGame();
		}

	}

}




