var randomNumber1 = Math.floor((Math.random() * 6) + 1 );
var randomNumber2 = Math.floor((Math.random() * 6) + 1 );

var images1 = "dice" + randomNumber1 + ".png";
var images2 = "dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", images1);
document.querySelector(".img2").setAttribute("src", images2);

function whoWon () {
       if (randomNumber1 > randomNumber2) {
           return document.querySelector("h1").innerHTML = "Player 1 Wins!";
       }
       else if (randomNumber2 > randomNumber1) {
           return document.querySelector("h1").innerHTML = "Player 2 Wins!";
       } 
       else if (randomNumber1 === randomNumber2) {
           return document.querySelector("h1").innerHTML = "Draw !";
       }
}

var result = whoWon();
document.querySelector("h1").innerHTML = result;

