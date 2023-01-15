var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var images = ["dice1","dice2","dice3","dice4","dice5","dice6"];
var image = images[randomNumber1-1];
var imageValue = "images/" + image + ".png";
document.querySelector(".img1").setAttribute("src", imageValue);

