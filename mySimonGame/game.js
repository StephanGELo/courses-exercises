var buttonColors = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClickedPattern = [];
var hasGamestarted = false;
var level = 0;

// Detect when a key is pressed to start the game
  $(document).keydown(function() {
    if(!hasGamestarted){
      nextSequence();
      $('.level-title').text("Level " + level);
      hasGamestarted = true;
    }
  });
  
function playSound(name) {
  //Play the audio corresponding to the randomChosenColor
  var audio = new Audio('./sounds/' + name + '.mp3');
  audio.play();
}

//Animate button when clicked and remove animation after 100ms
function animatePress(currentColor) {
    $('#' + currentColor).addClass("pressed");
    setTimeout(function(){
      $('#' + currentColor).removeClass("pressed");
    }, 100);
}

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
  playSound(randomChosenColor);
  level += 1;
  $('.level-title').text("Level " + level);
}

//Create user clicked pattern
$('.btn').click(function(){
  var userChosenColor = $(this).attr("id");
  playSound(userChosenColor);
  animatePress(userChosenColor);
  userClickedPattern.push(userChosenColor);
});
