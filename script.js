let choicesNumber = 3;
function getComputerChoice(num) {
    // get 3 numbers randomly

    let choice = Math.floor(Math.random() * 3 );
    let computerChoice;
    console.log(choice);

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
function firstLetter(word) {
    let toLower = word.toLowerCase();
    let toLowerCut = toLower.slice(1);
    let first = word[0];
    let firstCap = first.toUpperCase();
    let capitalizeWord = firstCap.concat(toLowerCut);
    console.log(capitalizeWord);
    return capitalizeWord;
}

let userInput = firstLetter(prompt('Please, select your champion! (Rock, Paper or Scissors)'));
console.log('You chose: ' + userInput);

let playerSelection = userInput;
let computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
    let result;
    //rock
    if (playerSelection == 'Rock' && computerSelection == 'Rock') {
        result = 'It\'s a tie, Rock draws with Rock';
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        result = 'You lose, Rock loses to Paper';
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        result = 'You win, Rock beats Scissors ';
        //paper
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        result = 'You win, Paper beats Rock';
    } else if (playerSelection == 'Paper' && computerSelection == 'Paper') {
        result = 'It\'s a tie, Paper draws with Paper';
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        result = 'You lose, Paper loses to Scissors';
        //scissors
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        result = 'You lose, Scissors loses to Rock';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        result = 'You win, Scissors beats Paper';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        result = 'It\'s a tie, Scissors draws with Scissors';
    }
    return result;
}

console.log(playRound(playerSelection, computerSelection));
