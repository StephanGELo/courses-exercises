var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

var attribute = document.getElementsByClassName("img1")[0].attributes.src;

attribute = JSON.stringify("./images/dice"+randomNumber1+".png");
console.log(attribute);
document.getElementsByClassName("img1")[0].attributes.src=attribute;