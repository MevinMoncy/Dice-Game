//for dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // gives num b/w 1 to 6

//getting the dice images
var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);



//for dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // gives num b/w 1 to 6

//getting the dice images
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);




//player 1 wins
if (randomNumber1 > randomNumber2){
    document.getElementById("title id").innerHTML = "Player 1 Wins!";
}

// player 2 win
else if (randomNumber2 > randomNumber1){
    document.getElementById("title id").innerHTML = "Player 2 Wins!";
}

//draw
else{
    document.getElementById("title id").innerHTML = "Draw!";
}