//variables for game
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuess = []; 
var computerChoice;



//to initiate the game
theGame();

//letter randomizer
function theGame() {

	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var randomLetter = alphabet[Math.floor(Math.random() * 26)];
	var computerChoice = randomLetter;

	console.log(computerChoice); //test
		

	checkIfCorrect();

	function checkIfCorrect() {

		document.onkeyup = function(event) {

			//turns user's unicode into corresponding alphanumeric key,
			//then turns it into a lowercase string.
			var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
			
			//potentially add an if statement to prevent letters that were
			//previously guessed from being counted against the user

			if (userChoice === computerChoice) {
				console.log("You win."); //test
				
				//switches still image of black box to animated gif of light bulb flashing
				document.getElementById("image-here").setAttribute("src", "assets/images/light-bulb.gif");
				
				//setTimeout() delays a block of code for x seconds (written in milliseconds). 
				//in this case it will delay the You win! alert for 3 seconds, allowing the gif animation to cycle through. 
				setTimeout(function(){alert("You win!");}, 3000);
				wins = wins + 1;
				document.getElementById("your-wins").innerHTML = wins;

				//this delays the reset of the black box image
				setTimeout(function(){document.getElementById("image-here").setAttribute("src", "assets/images/black-box.png");}, 3000);

				resetGame();

			} else {
				guessesLeft = guessesLeft - 1;
				
				document.getElementById("guesses-left").innerHTML = guessesLeft; 
				yourGuess.push(userChoice); //append user's choice to array yourGuess

				console.log("Your guesses so far: " + yourGuess); //test

				document.getElementById("your-guesses").innerHTML = yourGuess;

				console.log("Guesses Left: " + guessesLeft); //test

					if (guessesLeft === 0) {
						console.log("YOU LOSE."); //test
						alert("YOU LOSE!");
						losses = losses + 1
						document.getElementById("your-losses").innerHTML = losses;

						resetGame();

					} else {
						console.log("Incorrect. Try again"); //test
						checkIfCorrect();
						
					}

			}
		}
	}

	function resetGame() {
		guessesLeft = 9; //reset variable
		yourGuess = [];  //reset array so it's empty
		document.getElementById("guesses-left").innerHTML = guessesLeft;  //reset display on screen
		document.getElementById("your-guesses").innerHTML = yourGuess;    //reset display on screen
		theGame(); //restart the game with new computerChoice.

	}

}




