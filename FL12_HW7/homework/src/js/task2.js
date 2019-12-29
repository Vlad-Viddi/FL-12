let attempts = 3,
	attemptsLeft,
	totalPrize = 0,
	maxPrize,
	max = 9,
	playAgain = true,
	usersGuess,
	round = 0,
	guessNumber;
let playGameResult = confirm('Do you want to play a game?');
if (!!playGameResult === false) {
	alert('You did not become a billionaire, but can');
} else {
	while (playAgain) {
		guessNumber = Math.floor(Math.random() * Math.floor(max));
		attemptsLeft = attempts;
		maxPrize = 100 * Math.pow(2, round);
		for (let i = 0; i < attempts; i++) { 
			usersGuess = prompt('Choose a roulette pocket number from 0 to ' + (max - 1) +
			'\r\n Attempts left: ' + attemptsLeft +
			'\r\n Total prize: ' + totalPrize +
			'\r\n Possible prize on current attempt: ' + maxPrize +
			'\r\n');
			if (!!usersGuess === false || Number(usersGuess) !== guessNumber) {
				attemptsLeft -= 1;
				maxPrize = maxPrize / 2;
			} else if (guessNumber === Number(usersGuess)) {
				round += 1;
				totalPrize += maxPrize;
				max += 4;
				maxPrize *= round;
				alert('Congratulation, you won!\r\nYour prize is: ' + totalPrize + ' $.');
				playAgain = confirm('1 Do you wanna continue?');
				break;
			}
		}
		if (attemptsLeft === 0) {
			alert('Thank you for your participation!\r\nYour prize is: ' + totalPrize + ' $.');
			playAgain = confirm('2 off for loop -  Do you wanna continue?');
			round = 0;
			max = 9;
		}
	}	
}
if (playAgain === false) {
	alert('You did not become a billionaire, but could! Game over!');
}
