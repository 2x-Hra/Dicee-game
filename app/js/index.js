var randomNumber1 = Math.floor(Math.random() * 6) + 1;
const images = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6"];
const imageIndex1 = images[randomNumber1 - 1];
var imageValue = "images/" + imageIndex1 + ".png";
document.querySelector(".img1").setAttribute("src", imageValue);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
const imageIndex2 = images[randomNumber2 - 1];
imageValue = "images/" + imageIndex2 + ".png";
document.querySelector(".img2").setAttribute("src", imageValue);

const messages = ["🚩Player1 Wins!", "Player2 Wins!🚩", "Draw!"];
var msg = "";
if ( imageIndex1 > imageIndex2 ){
    msg = messages[0];
}
else if ( imageIndex1 < imageIndex2 ) {
    msg = messages[1]
}
else {
    msg = messages[2];
}
document.querySelector("h1").textContent = msg;