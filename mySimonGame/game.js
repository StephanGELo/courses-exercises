var buttonColors = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];

function nextSequence() {
  // generate a random number from 0 to 3
  var randomNumber = Math.floor(Math.random()*4);
  //Select the button with the same color as randomChosenColor
  var randomChosenColor = buttonColors[randomNumber];
  //Create a new pattern
  gamePattern.push(randomChosenColor);
  var id = "#" + randomChosenColor;
  //Flash the button of the randomChosenColor
  $(id).fadeIn(100).fadeOut(100).fadeIn(100);
  //Play the audio corresponding to the randomChosenColor
  var audio = new Audio('./sounds/' + randomChosenColor + '.mp3');
  audio.play();
}
