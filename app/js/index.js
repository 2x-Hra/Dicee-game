var randomNumber1 = Math.floor(Math.random() * 6) + 1;
if ( randomNumber1 == 1){
    document.querySelector(".img1").setAttribute("src", "images/dice1.png")
}
if ( randomNumber1 == 2){
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice2.png")
}
if ( randomNumber1 == 3){
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice3.png")
}
if ( randomNumber1 == 4){
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice4.png")
}
if ( randomNumber1 == 5){
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice5.png")
}
if ( randomNumber1 == 6){
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice6.png")
}
