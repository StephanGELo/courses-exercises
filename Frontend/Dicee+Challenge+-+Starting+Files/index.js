var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var attribute1 = "./images/dice" + randomNumber1 + ".png";
const img1 = document.getElementsByClassName("img1")[0];
img1.setAttribute("src",attribute1);

var attribute2 = "./images/dice" + randomNumber2 + ".png";
const img2 = document.getElementsByClassName("img2")[0];
img2.setAttribute("src", attribute2);

var h1 = document.getElementsByTagName("h1")[0];

if (randomNumber1 > randomNumber2) {
    h1.innerHTML = " 🚩 Play 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    h1.innerHTML = "Player 2 Wins! 🚩";
} 
else {
    h1.innerHTML = "Draw!";
}
