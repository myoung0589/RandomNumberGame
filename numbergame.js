//Create a function that plays the following game: The computer picks a secret random integer between 1 and 100 (both inclusive), and repeatedly asks the user for guesses.


function playGame(){
  var random = Math.floor((Math.random() * 100) + 1);
  alert(random);
  var counter =0;

  do{
    var guess = prompt("Pick a number between 1-100!");
    if(guess>random) {
      alert("Too high!");
    }
    if(guess<random){
      alert("Too low!")
    }
  }
  while (guess!=random);
  alert("You WON!")

};










//If the users guess is too high or too low, the computer notifies them of that; and if the user guesses the secret number correctly, the computer displays a winning message and the game is over.










//Stretch goal 1: If the user has not guessed the secret number in seven tries, the user loses.
function playGame(){
  var random = Math.floor((Math.random() * 100) + 1);
  alert(random);
  var counter = 0;

  var userName=prompt("Please enter your name");
  do{

    var guess =parseInt(prompt("Pick a number between 1-100!"));
    if (isNaN(guess)) {
      alert("Not a number");
    }
    counter=counter +1;
    console.log("my counter "+counter);
    if(guess>random) {
      alert("Too high!" + counter);
    }
    if(guess<random){
      alert("Too low! " + counter);
    }
  }
  while (guess!=random && counter<=3);
  if(guess===random) {
    alert(userName + " ,You Won!");
  }
  else{
    alert(userName + " ,You lost!");
  };


};









//Stretch goal 2: Validate the users input. If the user puts a anything other than a number, tell the user they can only use numbers.
if (guess ===NaN(guess)); {
  alert("Not a number");


}





//Stretch goal 3: Allow the user to put there name in before the game starts. When the user has won the game, let the user know they have won, using their name.
