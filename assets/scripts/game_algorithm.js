/* Game Algorithm is is the logic behind our Rock, Scissors and Paper Game. 
   Also known as ro-sham-bo, originated from early China and is been played by at least two people.
   
   Gameplay: Hand Gestures are used to demonstrate 
*/

let wins = 0;
let loses = 0;

/* Game Logic */
function computerPlay() {
    // Returns a random value of either, Rock, Paper
    // or Scissors.
    const gameModes = ["Rock", "Scissors", "Paper"];
    const playMode = Math.floor(Math.random() * gameModes.length);
    return playMode;
}

const computerMove = computerPlay(); // This is the Computer's 
                                   // Selection per round. 


function playRound(playerSelection, computerSelection) {
    // Single Round game, returns string that decleares
    // if the player won or lose.

    playerSelection = prompt("Your Move: Rock, Paper or Scissors? ");
    computerSelection = computerMove;
    
    if (playerSelection.toLowerCase() === 'rock') {
        switch (computerSelection) {
            case 1: 
                console.log(computerSelection);
                alert('You Won! Paper beats rock');
                wins++;
                break;
            case 2:
            case 0:
                console.log(computerSelection);
                alert('You lose to a much bigger Move :(');
                loses++;
                break;
            default:
                break;
        }

    } else if (playerSelection.toLowerCase() === 'paper') {
        switch (computerSelection) {
            case 2: 
                console.log(computerSelection);
                alert('You Won! Scissors beats Paper');
                wins++;
                break;
            case 1:
            case 0:
                console.log(computerSelection);
                alert('You lose to a much bigger Move :(');
                loses++;
                break;
            default:
                break;
        }
    } else if (playerSelection.toLowerCase() === 'scissors') {
        switch (computerSelection) {
            case 0: 
                console.log(computerSelection);
                alert('You Won! Rock beats Scissors');
                wins++;
                break;
            case 1:
            case 2:
                console.log(computerSelection);
                alert('You lose to a much bigger Move :(');
                loses++;
                break;
            default:
                break;
        }
    }
   
}    

let game = () => { // 5 rounds makes a full game
    let gameCount = 0;
    while(true) {
       for (let rounds=0; rounds <= 5; rounds++) {
           playRound();
           gameCount ++;

           if (gameCount === 5) {
               alert("Game Summary: ", '% s %d %s %d', 'wins' , 'loses', wins, loses); 
               break;
            }
        }

        let ask = prompt('Would you like to try again: Y - Yes, N - No?')
        (ask == 'y') ? game() : 'Its Okay. game will now close.';
    } 
}

game(); 