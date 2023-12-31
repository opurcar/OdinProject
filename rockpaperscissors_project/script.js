// Create a function that returns userSelection

function userChoice() {
    let userChooses = prompt('Select rock, paper or scissors');
    return userChooses.toLowerCase();
}

// Declare all the possible randome choices for Computer Selection

const choices = ['rock', 'paper', 'scissors']; 

// Create a function that returns computerSelection

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection,computerSelection){
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
        return 'tie';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        console.log('You win!');
        return 'win';
    } else {
        console.log('You lose!');
        return 'lose';
    }
}

function playGame() {
    let computerScore = 0;
    let userScore = 0; 

    for (let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice();
        let playerSelection = userChoice();
        let result = playRound(playerSelection, computerSelection);
        
        if (result === 'win') {
            userScore++;
        } else if (result === 'lose') {
            computerScore++;
        }
    }
    console.log("Your score is " + userScore + " while the computer's is " + computerScore);
}

// Call playGame function to start the game

playGame();




