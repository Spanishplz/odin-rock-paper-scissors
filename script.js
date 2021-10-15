
// console.log(playRound(playerChoice, computerPlay));
// console.log(playerChoice());



playGame();

function playGame() {

    const weapons = document.querySelectorAll('img.weapon');
    let weaponsArray = Array.from(weapons);
    console.log(weaponsArray);

    weaponsArray.forEach((element) => {
        element.addEventListener('click', (e) => {
            // console.log(element.id);
            let choice = element.id;
            console.log(playRound(choice, computerPlay()));

        });
    });
};

// THE COMPUTER SELECTION
function computerPlay() {
    let randomNumber = Math.floor(Math.random()* 3) + 1;
    let finalValue = '';
    // console.log(randomNumber);
    if ( randomNumber === 1 ) {
        finalValue = 'Rock';
    } else if ( randomNumber === 2) {
        finalValue = 'Paper';
    } else {
        finalValue = 'Scissors';
    }
    finalValue = finalValue.toLowerCase();
    return finalValue;
}

// 1 ROUND
function playRound(playerSelection, computerSelection) {
    let result = '';
    if ( playerSelection === computerSelection ) {
        result = "tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
               playerSelection === "paper" && computerSelection === "rock" ||
               playerSelection === "scissors" && computerSelection === "paper") {
        result = "win";
    } else {
        result = "lose";
    }
    return result;
}

function changeImages(result) {
    
}


// choose your weapon








































// fiveMatches();

// plays the game 5 times and keeps the score
// function fiveMatches() {

//     let playerScore = 0;
//     let computerScore = 0;

//     for (i = 1; i <= 5; i++) {
//         console.log(`\n`);
//         console.log(`Round ${i}... FIGHT!`);
//         console.log(`\n`);
//         let result = game();
//         // console.log(result);
//         if (result === "tie") {
//             //score doesnt move
//         } else if (result === "win") {
//             playerScore += 1;
//         } else {
//             computerScore += 1;
//         }
//         console.log(`Computer score: ${computerScore}`);
//         console.log(`Player score: ${playerScore}`);
//     }

//     // if (playerScore === computerScore) {
//     //     console.log(`\n`);
//     //     console.log(`I thought you were better than this...`);
//     //     console.log(`FINAL SCORE: \n${computerScore} - ${playerScore}`);
//     //     console.log(`IT'S A TIIIIIIIIIIIIIEEEEEE! `);
//     // } else if (playerScore > computerScore) {
//     //     console.log(`\n`);
//     //     console.log(`Not so much AI in here, eh? Hehehe`);
//     //     console.log(`FINAL SCORE: \n${computerScore} - ${playerScore}`);
//     //     console.log(`YOUUUUUU ARE THE CHAAAAAAAAMPIONNN!!!`);
//     // } else {
//     //     console.log(`\n`);
//     //     console.log(`I don't wanna say I'm disappointed...but I a...m...`);
//     //     console.log(`FINAL SCORE: \n${computerScore} - ${playerScore}`);
//     //     console.log(`YOU LOOOOOOSE! LOOOOOSE....LOOOSE...LOOSE...`);
//     // }
// }

// function game() {
//     // let playerNoFormat = prompt("Type what you choose: rock, paper or scissors?");

//     // // Asks for some input, as long as it isn't null or an empty string
//     // while (playerNoFormat === null || playerNoFormat == "") {
//     //     alert('Please, enter one option! (Rock, paper or scissors)');
//     //     playerNoFormat = prompt("Type what you choose: rock, paper or scissors?");
//     // }

//     // // formatting the user's input and receiving the input from the computerPlay()
//     // // function
//     // let playerSelection = playerNoFormat.toLowerCase();
//     let playerSelection = "Rock";
//     const computerSelection = computerPlay();

//     // Makes you choose one valid option to continue, otherwise you stay here
//     // while (playerSelection != "rock" &&
//     //        playerSelection != "paper" &&
//     //        playerSelection != "scissors" &&
//     //        playerSelection != null) {
//     //     console.log(`"${playerNoFormat}" isn't a valid option, try again please!`);
//     //     console.log(`\n`);
//     //     playerNoFormat = prompt("Type what you choose: rock, paper or scissors?");
//     //     playerSelection = playerNoFormat.toLowerCase();
//     // }

//     toPrint(playerSelection, computerSelection);
//     let roundResult = playRound(playerSelection, computerSelection);
//     // winnerRoundDecision(playerSelection, computerSelection, roundResult);
//     // console.log(roundResult);

//     return roundResult;
//     // console.log(roundResult);
// }


// function to give the results using the return value
// of playRound, playerSelection and computeRSelection
// Special cases for scissors
// function winnerRoundDecision(playerSelection, computerSelection, roundResult) {
//     let player = formatString(playerSelection);
//     let computer = formatString(computerSelection);

//     if (roundResult === "tie") {
//         if (playerSelection === "scissors") {
//             console.log(`It's a tie! ${player} tie with ${computer}!`);
//         } else {
//             console.log(`It's a tie! ${player} ties with ${computer}!`);
//         }
//     } else if (roundResult === "win") {
//         if (playerSelection === "scissors") {
//             console.log(`You win! ${player} beat ${computer}!`);
//         } else {
//             console.log(`You win! ${player} beats ${computer}!`);
//         }

//     } else {
//         if (computerSelection === "scissors") {
//             console.log(`You lose! ${computer} beat ${player}!`);
//         } else {
//             console.log(`You lose! ${computer} beats ${player}!`);
//         }

//     }
// }
// random generation of the computer selection

// formats the results capitalizing the first letter
// to be able to print them
// function formatString(textToFormat) {
//     let firstLetter = textToFormat.charAt(0); // h
//     let toCaps = firstLetter.toUpperCase(); // H
//     let result = toCaps + textToFormat.substring(1);

//     return result;

// }
// prints the results in the console
// function toPrint(playerSelection, computerSelection) {

//     let resultComputer = formatString(computerSelection);
//     let resultPlayer = formatString(playerSelection);

//     // to print in console
//     console.log(`\n`);
//     console.log(`The computer picked ${resultComputer}!`);
//     console.log(`You picked ${resultPlayer}!`);

// }

// computerPlay();
// for (i = 0; i < 100; i++) {
//     computerPlay();
// }




























