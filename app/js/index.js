var randomNumber1 = Math.floor(Math.random() * 6) + 1; // find random number for Player 1 
const images = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6"]; // List of dice image names to pick 
const imageIndex1 = images[randomNumber1 - 1]; // pick the dice for player 1
var imageValue = "app/images/" + imageIndex1 + ".png"; // make the string to put in the value for player1 Source image
document.querySelector(".img1").setAttribute("src", imageValue); // setting the value 

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
const imageIndex2 = images[randomNumber2 - 1];
imageValue = "app/images/" + imageIndex2 + ".png";
document.querySelector(".img2").setAttribute("src", imageValue);

const messages = ["🚩Player1 Wins!", "Player2 Wins!🚩", "Draw!"]; // list of Win messages
var msg = "";
//if player 1 wins
if ( imageIndex1 > imageIndex2 ){
    msg = messages[0];
}
//if player 2 wins
else if ( imageIndex1 < imageIndex2 ) {
    msg = messages[1]
}
// Draw
else {
    msg = messages[2];
}
document.querySelector("h1").textContent = msg;