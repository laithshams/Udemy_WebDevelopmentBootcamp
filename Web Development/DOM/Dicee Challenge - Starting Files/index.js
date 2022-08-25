var rand1;
var rand2;

rand1 = Math.floor(Math.random()*6 + 1);
rand2 = Math.floor(Math.random()*6 + 1);

document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + rand1 + ".png");

document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + rand2 + ".png");

if (rand1 == rand2) {
  document.querySelector("h1").innerText = "Draw";
} else if (rand1 > rand2) {
  document.querySelector("h1").innerText = "Player 1 win";
} else {
  document.querySelector("h1").innerText = "Player 2 win";
}
