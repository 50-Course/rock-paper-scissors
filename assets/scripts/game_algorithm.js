/* Game Algorithm is is the logic behind our Rock, Scissors and Paper Game. 
   Also known as ro-sham-bo, originated from early China and is been played by at least two people.
   
   Gameplay: Hand Gestures are used to demonstrate 
*/




function computerPlay() {
    // Returns a random value of either, Rock, Paper
    // or Scissors.
    const playModeTypes = ["Rock", "Scissors", "Paper"];

    const playMode = Math.floor(Math.random() * playModeTypes.length);
    return (playMode, playModeTypes[playMode]);
}
console.log(computerPlay());
