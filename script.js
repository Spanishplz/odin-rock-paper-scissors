// gets the computer choice
function getComputerChoice(num) {
    let choice = Math.floor(Math.random() * 3 );
    let computerChoice;
//    console.log(choice);

    if (choice === 0) {
        computerChoice = 'Rock';
    } else if (choice === 1) {
        computerChoice = 'Paper';
    } else if (choice === 2)  {
        computerChoice = 'Scissors';
    };
    return computerChoice;
}
// function to make users input case insensitive
function capitalizeWord(word) {
    let toLower = word.toLowerCase();
    let toLowerCut = toLower.slice(1);
    let first = word[0];
    let firstCap = first.toUpperCase();
    let capitalizeWord = firstCap.concat(toLowerCut);
    console.log(capitalizeWord);
    return capitalizeWord;
}


// plays one round
function playRound(playerSelection, computerSelection) {
    let result;
    //rock
    if (playerSelection == 'Rock' && computerSelection == 'Rock') {
        result = 'tie';
        console.log('It\'s a tie! Rock draws with Rock');
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        result = 'loss';
        console.log('You lose! Rock loses to Paper');
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        result = 'win';
        console.log('You win! Rock beats Scissors');
        //paper
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        result = 'win';
        console.log('You win! Paper beats Rock');
    } else if (playerSelection == 'Paper' && computerSelection == 'Paper') {
        result = 'tie';
        console.log('It\'s a tie! Paper draws with Paper');
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        result = 'loss';
        console.log('You lose! Paper loses to Scissors');
        //scissors
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        result = 'loss';
        console.log('You lose! Scissors loses to Rock');
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        result = 'win';
        console.log('You win! Scissors beats Paper');
    } else if (playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        result = 'tie';
        console.log('It\'s a tie! Scissors draws with Scissors');
    }
    return result;
}

// console.log(playRound(playerSelection, computerSelection));
// plays the game (5 rounds)
function game() {
    let playerScore = 0;
    let computerScore = 0; 
    for (i = 1; i < 6; i++) {
        let roundNumber = i;
        console.log('Round number: ' + i);
        let userInput = capitalizeWord(prompt('Please, select your champion! (Rock, Paper or Scissors)'));
//        console.log('You chose: ' + userInput);
        let playerSelection = userInput;
        let computerSelection = getComputerChoice();
        console.log('You picked: ' + playerSelection + '.\n' + 'The computer picked: ' + computerSelection + '.');
        let score = playRound(playerSelection, computerSelection);
//        console.log(score);
        if (score == 'win') {
            playerScore++;
        } else if (score == 'loss') {
            computerScore++;
        }
        console.log('The score is: ' + playerScore + ' to ' + computerScore + '.');

        // (score == 'win') ? playerScore++ :
        //     (score == 'loss') ? computerScore++

    }
    (playerScore > computerScore) ? console.log(`CONGRATULATIONS YOU WON ${playerScore} to ${computerScore}, you are THE CHAMPION!` ) :
        (playerScore < computerScore) ? console.log(`BEATEN by a computer ${playerScore} to ${computerScore}, I expected more from you!` ) :
        console.log(`It\'s a tie ${playerScore} to ${computerScore}, better luck next time!`);

}
game();
