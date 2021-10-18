
const weapons = document.querySelectorAll('img.weapon');
let weaponsArray = Array.from(weapons);
let counter = 1;

// 2 functions needed game + reset
btnResetCounter();
newPlayGame();

// THIS IS THE MAIN GAME SO FAR
function newPlayGame() {
    for(let i = 0; i <= weaponsArray.length-3; i++) {
        weaponsArray[i].addEventListener('click', (e) => {
            if (counter === 5) {
                fiveRoundsPrintResult();
            }else if (counter > 5) {
                return;
            }
            let choice = weaponsArray[i].id; // this is "rock";
            let computerPlayArray = computerPlay();
            let computerSelection = computerPlayArray[0];
            // console.log(computerSelection);
            let computerImageSelection = computerPlayArray[1];
            // console.log(computerImageSelection);

            result = playRound(choice, computerSelection);
            currentRound(counter);
            moveImage(choice);
            imageColors(choice, computerImageSelection, result);
            roundPrintResult(result);
            // console.log(result);
            countScore(result);
            console.log(counter);
            counter++;
            // return counter;
        });
    }
}

// round out of 5
function currentRound(counter) {
    let numberPara = document.getElementById('round-number-number');
    numberPara.textContent = `${counter} out of 5`;
}

// button to reset the counter
function btnResetCounter() {
    let btn = document.getElementById('reset-btn');
    btn.addEventListener('click', () => {
        resetRoundResult();
        makeRoundsCero();
        makeScoreCero();
        resetFinalRoundResults();
        counter = 1;
        // console.log(counter);
        return counter;

    });
};

// function to reset the round scores
function makeScoreCero() {
    let playerScore = document.getElementById('player-score-number');
    let computerScore =document.getElementById('computer-score-number');
    playerScore.textContent = "0";
    computerScore.textContent = "0";

}

function makeRoundsCero() {
    let numberPara = document.getElementById("round-number-number");
    numberPara.textContent = "1 out of 5";
}

function resetFinalRoundResults(){
    let finalResultPara = document.getElementById("final-results");
    finalResultPara.textContent = "Let's see who's BETTER!";

}

function resetRoundResult() {
    let roundResultsPara = document.getElementById('current-results-para');
    roundResultsPara.textContent = "Let's see what happens on the first round!";
}

function roundPrintResult(result) {
    // let roundNumberPara = document.getElementById('round-num+ber-div').firstChild;
    let roundResultsPara = document.getElementById('current-results-para');
    roundResultsPara.textContent = `You ${result} the round!`;
}

function fiveRoundsPrintResult(){
    let finalResultPara = document.getElementById("final-results");
    let playerResultPara = document.getElementById("player-score-number");
    let computerResultPara = document.getElementById("computer-score-number");
    let playerWins = Number(playerResultPara.textContent);
    let computerWins = Number(computerResultPara.textContent);
    if ( playerWins === computerWins) {
        finalResultPara.textContent = `You tied the game with a computer! HA!`;
    } else if (playerWins > computerWins) {
        finalResultPara.textContent = `I never doubted you! YOU WIN!`;
    } else {
        finalResultPara.textContent = `Well... keep trying? Or not... YOU LOSE!`;
    }
}



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
}



// adds the number of wins/losses to the paragraph
function countScore(result) {
    let playerScore = document.getElementById('player-score-number');
    let computerScore =document.getElementById('computer-score-number');
    let playerScoreNumber = parseInt(playerScore.textContent);
    let computerScoreNumber = parseInt(computerScore.textContent);
    // console.log(playerScoreNumber);
    // console.log(computerScoreNumber);
    if (result === "lose") {
        computerScore.textContent = computerScoreNumber + 1;

    } else if (result === "win") {
        //add one to the placer score
        playerScore.textContent = playerScoreNumber + 1;

    } else {
        return;
    }


}

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
    let computerPlayImage = computerImage(finalValue);
    // console.log(computerPlayImage);
    let computerPlayArray = [];
    computerPlayArray.push(finalValue);
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


