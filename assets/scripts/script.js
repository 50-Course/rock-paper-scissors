var playMode = ["Rock", "Scissors", "Paper"];
const computerSelection = computerPlay();
let playerSelection;
var scoreCount = 0;

function computerPlay() {
    // Returns at random either of
    // Rock, Scissors or Paper
    return playMode[Math.floor(Math.random() * playMode.length)];
}

function playRound(playerSelection, computerSelection) {
    // Single Round game, returns string that decleares
    // if the player won or lose.
    playerSelection = prompt("Your Move: 'Rock', 'Paper' or 'Scissors'");

    if (computerSelection === 'Rock' && playerSelection === 'Paper' ) {
        return "You Won!";
    }

 /*       
    if (computerSelection === 'rock') {
        switch (playerSelection) {
            case "rock": return "That was a tie! Rock and Rock are friends ";
            case "paper": return "You Win! Paper beats Rock";
            case "scissors": return "You Lose! Rock blunts Scissors";
            default: break;
        } 
    }

    if (computerSelection === 'paper' ) {
        switch (playerSelection) {
            case "rock": return "You Lose! Paper beats Rock";
            case "paper": return "That was a tie! :( Paper cant win over paper'";
            case "scissors": return "You Win! Scissors rips apart Paper";
            default: break;
        } 
        
    }
    
    if (computerSelection === 'scissors') {
        switch (playerSelection) {
            case "rock": return "You Win! Rock blunts Scissors"
            case "paper": return "You Lose! :( Scissors beats paper";
            case "scissors": return "That was a tie! Scissors can't beat scissors";
            default: break;
        } 
    }
    */

}

function game() {
    // 5 rounds makes a full game
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
}

playRound();
/*

    if (computerSelection === 'rock') {
        switch(playerSelection) {
            case "scissors":
            case "rock":
                scoreCount = 0;
                console.log(scoreCount);
                break;
            case "paper":
                scoreCount++;
                console.log(scoreCount);
                break;
            default:
                scoreCount = 0;
                console.log(scoreCount);
                break;       
        }

    }

    if (computerSelection === 'paper' ):
        switch(playerSelection) {
            case "scissors":
                scoreCount++;
                console.log(scoreCount);
                break;
            default:
                scoreCount = 0;
                console.log(scoreCount);
                break   
    }
    
    if (computerSelection === 'scissors') {
        switch(playerSelection) {
        
            case "rock":
                scoreCount++;
                console.log(scoreCount);
                break;
            default:
                scoreCount = 0;
                console.log(scoreCount);
                break;       
        }
    }

*/