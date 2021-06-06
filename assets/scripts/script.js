
var scoreCount = 0;


function computerPlay() {
    // Returns at random either of
    // Rock, Scissors or Paper
    const playModeTypes = ["Rock", "Scissors", "Paper"];

    const playMode = Math.floor(Math.random() * playModeTypes.length);
    return (playMode, playModeTypes[playMode]);
}

function playRound(playerSelection, computerSelection) {
    // Single Round game, returns string that decleares
    // if the player won or lose.
    
    /*
    playerSelection = prompt("Your Move: 'Rock', 'Paper' or 'Scissors'");

    if (computerSelection === 'Rock' && playerSelection === 'Paper' ) {
        console.log("You Won!");
    } else {
        console.log("You Lost!");
    }
    */
    playerSelection = prompt("Your Move: 'Rock', 'Paper' or 'Scissors' ");
    computerSelection = computerPlay();
    

    if (computerSelection === 'Rock' && playerSelection === 'Paper' ) {
        console.log("You Won! Paper beats Rock");
    }
    

    
    /*
    if (computerSelection === 'Rock') {
        switch (playerSelection) {
            case "Rock": console.log("That was a tie! Rock and Rock are friends ");
            case "Paper": console.log("You Win! Paper beats Rock");
            case "Scissors": console.log("You Lose! Rock blunts Scissors");
            default: break;
        } 
    }

    if (computerSelection === 'Paper' ) {
        switch (playerSelection) {
            case "Rock": console.log( "You Lose! Paper beats Rock");
            case "paper": console.log( "That was a tie! :( Paper cant win over paper'");
            case "Scissors": console.log( "You Win! Scissors rips apart Paper");
            default: break;
        } 
        
    }
    
    if (computerSelection === 'Scissors') {
        switch (playerSelection) {
            case "rock": console.log("You Win! Rock blunts Scissors");
            case "paper": console.log( "You Lose! :( Scissors beats paper");
            case "scissors": console.log( "That was a tie! Scissors can't beat scissors");
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