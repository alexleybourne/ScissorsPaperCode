document.addEventListener("DOMContentLoaded", () => {
    newGame()
    newGameAnim()
})




var sources = [
    "Scissors.png",
    "Paper.png",
    "Code.png"
];

function newGame() {

var randomLeft = sources[Math.floor(Math.random()*sources.length)]
var randomRight = sources[Math.floor(Math.random()*sources.length)]

document.getElementsByClassName("leftImage")[0].src = `${randomLeft}`
document.getElementsByClassName("emojiLeftText")[0].innerHTML = `${randomLeft.replace('.png','')}`

document.getElementsByClassName("rightImage")[0].src = `${randomRight}`,
document.getElementsByClassName("emojiRightText")[0].innerHTML = `${randomRight.replace('.png','')}`

newGameAnim()

}


// ANIMATIONS

anime({
    targets: '.content',
    keyframes: [
        {scale: 1, opacity: 1, duration: 1000}
    ],
});

anime({
    targets: '.topCol',
    keyframes: [
        {scale: 0, opacity: 0, duration: 10},
        {scale: 1, opacity: 1}
    ],
    delay: anime.stagger(100) // increase delay by 100ms for each elements.
});


function newGameAnim() {

    anime({
        targets: '.emojiLeftText, .emojiRightText',
        keyframes: [
            {scale: 0, duration: 1},
            {scale: 1}
        ]
    })

    anime({
        targets: '.rightImage',
        keyframes: [
            {scale: 0, rotate: 360, duration: 10},
            {scale: 1, rotate: 270}
        ]
    })

    anime({
        targets: '.leftImage',
        keyframes: [
            {scale: 0, rotate: 10, scaleX: -1, duration: 10},
            {scale: 1, rotate: 90}
        ]
    })

    anime({
        targets: '.button',
        keyframes: [
            {scale: 1.1, duration: 100},
            {scale: 1}
        ]
    })


}