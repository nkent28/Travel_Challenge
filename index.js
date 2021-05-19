
let randomNumber = Math.random() * 6;

let addOne = Math.floor(randomNumber) + 1;

let randomImage = "image" + addOne + ".jpg";

let randomizeImage = "images/" + randomImage;

let changeImage = document.querySelectorAll("img")[0];

changeImage.setAttribute("src", randomizeImage);

let randomNumber1 = Math.random() * 6;

let addOne1 = Math.floor(randomNumber1) + 1;

let randomImage1 = "image" + addOne1 + ".jpg";

let randomizeImage1 = "images/" + randomImage1;

let changeImage1 = document.querySelectorAll("img")[1];

changeImage1.setAttribute("src", randomizeImage1);

if (addOne > addOne1) {
    document.querySelector("h2").innerHTML = "Player 1 wins!";
} else if (addOne === addOne1) {
    document.querySelector("h2").innerHTML = "Draw!";
} else {
    document.querySelector("h2").innerHTML = "Player 2 wins!";
}


