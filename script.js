document.addEventListener("DOMContentLoaded", () => {
    newGame()
})

var sources = [
    "Scissors.png",
    "Paper.png",
    "Code.png"
];

function newGame() {

var randomLeft = sources[Math.floor(Math.random()*sources.length)];
var randomRight = sources[Math.floor(Math.random()*sources.length)];

document.getElementsByClassName("leftImage")[0].src = `${randomLeft}`
document.getElementsByClassName("emojiLeftText")[0].innerHTML = `${randomLeft.replace('.png','')}`
document.getElementsByClassName("rightImage")[0].src = `${randomRight}`
document.getElementsByClassName("emojiRightText")[0].innerHTML = `${randomRight.replace('.png','')}`


}
