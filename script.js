
const weapons = document.querySelectorAll('img.weapon');
let weaponsArray = Array.from(weapons);


// THIS IS THE MAIN GAME SO FAR
// newPlayGame();
// let result = newPlayGame();
// fiveRounds(result);

newPlayGame();
function newPlayGame() {
    let counter = 0;
    for(let i = 0; i <= weaponsArray.length-3; i++) {
        weaponsArray[i].addEventListener('click', (e) => {
            // console.log(weaponsArray[i].id);
            let choice = weaponsArray[i].id; // this is "rock";
            // computerPlayArray.push(finalValue, computerPlayImage);
            let computerPlayArray = computerPlay();
            let computerSelection = computerPlayArray[0];
            let computerImageSelection = computerPlayArray[1];
            result = playRound(choice, computerSelection);
            moveImage(choice);
            imageColors(choice, computerImageSelection, result);
            console.log(result);
            countScore(result);
            console.log(counter);
            if (counter >= 5 ){
                fiveRounds(result);
            } else counter++;

        });
    }

}
roundCounter();
// function fiveRounds() {}
function roundCounter() {
    counter = 1;

    for(let i = 0; i <= weaponsArray.length-3; i++) {
        weaponsArray[i].addEventListener('click', (e) => {
            // console.log(weaponsArray[i].id);
            // let choice = weaponsArray[i].id; // this is "rock";
            let roundOf = document.getElementById('round-number-div').firstChild;
            roundOf.textContent = `${counter} out of 5`;
            if (counter > 4) {
                let allImages = document.querySelectorAll('img.weapon');
                let allImagesArray = Array.from(allImages);
                console.log(allImagesArray);

                allImagesArray[i].classList.add("non-interactive");
                // allImagesArray.forEach((element)=> {
                //     element.classList.add("non-interactive");
                // });
                // return;
            }
            counter++;
            console.log(counter);
        });
    }
};



// completeGame();
// let roundMax = 5;
// function completeGame() {
//     let counter = 0;

// //    every time newPlay gets executed, need to add one.
// }




function fiveRounds(result) {
    let roundNumberPara = document.getElementById('round-number-div').firstChild;
    let roundResultsPara = document.getElementById('current-results').firstChild;
    let rounds = 0;
    roundResultsPara.textContent = `You ${result}`;
}



// function that plays 5 times.
// calls the play function 5 times
// keeps track of the number of rounds
// prints the round result and the final message.

// fiveRounds();
// function fiveRounds() {
//     let roundNumberDiv = document.getElementById('round-number-div');
//     let roundPara = document.createElement('p');
//     let roundResults = document.getElementById('current-results');
//     let roundResultsPara = document.createElement('p');
//     let rounds = 1;
//     // while (rounds < 6) {
//     //     let result = newPlayGame();

//     //     roundPara.textContent = `${rounds} out of 5`;
//     //     roundNumberDiv.appendChild(roundPara);

//     //     roundResults.appendChild(roundResultsPara);
//     //     roundResultsPara.textContent = `You ${result}`;
//     //     rounds++;
//     // }
// }












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


// make the color of both images change depending on results
// still not decided if they need to stay or change once they come back
// maybe staying the could help the player make the next decision

function imageColors(choice, computerImageSelection, result) {
    let playerChoice = document.getElementById(`${choice}`);
    let computerChoice = computerImageSelection;

    if (result === "tie") {
        playerChoice.style.backgroundColor = "yellow";
        computerChoice.style.backgroundColor = "yellow";
    } else if(result === "win") {
        playerChoice.style.backgroundColor = "green";
        computerChoice.style.backgroundColor = "red";
    } else {
        playerChoice.style.backgroundColor = "red";
        computerChoice.style.backgroundColor = "green";
    }




    //     // for just 1 second
    //     //make winner green
    //     //make loser red
    //     //make tie yellow
    // }
}




function countScore(result) {
    let playerScore = document.getElementById('player-score-number');
    let computerScore =document.getElementById('computer-score-number');
    let playerScoreNumber = parseInt(playerScore.textContent);
    let computerScoreNumber = parseInt(computerScore.textContent);
    console.log(playerScoreNumber);
    console.log(computerScoreNumber);
    if (result === "lose") {
        computerScore.textContent = computerScoreNumber + 1;

    } else if (result === "win") {
        //add one to the placer score
        playerScore.textContent = playerScoreNumber + 1;

    } else {
        return;
    }


}





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

// Moves the image and makes it non-interactive for the time the "fight" is going
function moveImage(choice){ // choice
    // let choice = "rock";
    // this needs to pick depending on click
    const imageParent = document.querySelector(`div #${choice}-div`);
    const image = document.getElementById(`${choice}`);
    // image.style.backgroundColor = "red";
    let vsParent = document.getElementById('chosen-weapon');
    let oldChild = document.querySelector('#chosen-weapon img');
    vsParent.replaceChild(image, oldChild);
    // image.classList.add('non-interactive');
    // blockOtherSelections(choice);

    let allImages = document.querySelectorAll('img.weapon');
    let allImagesArray = Array.from(allImages);

    allImagesArray.forEach((element)=> {
        element.classList.add("non-interactive");
        // console.log(element);
    });

    setTimeout(()=> {
        vsParent.replaceChild(oldChild,image);
        imageParent.appendChild(image);
        // this needed to be inside the setTimeout
        allImagesArray.forEach((element)=> {
            element.classList.remove("non-interactive");

        });
    }, 1000);

};


//didnt work
// function blockOtherSelections(choice) {
//     let rock = document.getElementById('rock');
//     let paper = document.getElementById('paper');
//     let scissors = document.getElementById('scissors');

//     if (choice === "rock") {
//         paper.classList.add('non-interactive');
//         scissors.classList.add('non-interactive');
//     } else if (choice === "paper") {
//         rock.classList.add('non-interactive');
//         scissors.classList.add('non-interactive');
//     } else {
//         rock.classList.add('non-interactive');
//         paper.classList.add('non-interactive');
//     }
// }

// need to add the computer image
function computerImage(finalValue) {
    let vsComputer = document.getElementById('computer-play');
    let whiteSelection = document.getElementById('empty-box');
    if (whiteSelection === null)  return;
    let removedChild = vsComputer.removeChild(whiteSelection);
    let newImage = document.createElement('img');
    newImage.setAttribute("src", "media/rock-finished.png");
    vsComputer.appendChild(newImage);
    let computerFinalImage;
    if (finalValue === "rock") {
        newImage.setAttribute("src", "media/rock-finished.png");
        vsComputer.appendChild(newImage);
    } else if (finalValue === "paper") {
        newImage.setAttribute("src", "media/paper-finished.png");
        vsComputer.appendChild(newImage);
    } else if (finalValue === "scissors") {
        newImage.setAttribute("src", "media/scissors-finished.png");
        vsComputer.appendChild(newImage);
    }
    setTimeout(function() {
        vsComputer.removeChild(newImage);
        vsComputer.appendChild(removedChild);
    }, 1000);

    return newImage;
}










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
    let computerPlayImage = computerImage(finalValue);
    // console.log(computerPlayImage);
    let computerPlayArray = [];
    computerPlayArray.push("scissors");
    computerPlayArray.push(computerPlayImage);
    return computerPlayArray;
    // return finalValue;
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


///////////////////////////////////////////////////////////////////////////////////////////////////
//old















// playGame(); // with forEach()

// function playGame() {

//     weaponsArray.forEach((element) => {
//         element.addEventListener('click', (e) => {
//             // console.log(element.id);
//             let choice = element.id;
//             console.log(playRound(choice, computerPlay()));

//         });
//     });
// };



// Adds a non-needed extra event
// console.log(playRound(playerChoice, computerPlay));
// console.log(playerChoice());

// moveImage()

// function moveImage(choice){
//     // this needs to pick depending on click
//     const imageParent = document.querySelector('div #rock-div');
//     const image = document.getElementById('rock');

//     image.addEventListener('click', () => {
//         // image.style.backgroundColor = "red";
//         let vsParent = document.getElementById('chosen-weapon');
//         // let oldChild = document.querySelector('chosen-weapon.img');
//         let oldChild = document.querySelector('#chosen-weapon img');
//         vsParent.replaceChild(image, oldChild);
//         setTimeout(()=> {
//             vsParent.replaceChild(oldChild,image);
//             imageParent.appendChild(image);
//         }, 1000);
//     });
// };






