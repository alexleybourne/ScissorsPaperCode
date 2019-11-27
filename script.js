document.addEventListener("DOMContentLoaded", () => {
    newGame(),
    emojiAnim()
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

emojiAnim()

}


// ANIMATIONS


const leftEmoji = popmotion.styler(document.querySelector('.leftImage'))
const rightEmoji = popmotion.styler(document.querySelector('.rightImage'))
const emojiLeftText = popmotion.styler(document.querySelector('.emojiLeftText'))
const emojiRightText = popmotion.styler(document.querySelector('.emojiRightText'))

function emojiAnim() {
    popmotion.spring ({
        from: {
            scale: 0,
            rotate: 290,
            scaleX: -1
        },
        to: {
            scale: 1,
            rotate: 270,
            scaleX: -1
        },
        velocity: 0.8
    }).start(leftEmoji.set)

    popmotion.spring ({
        from: {
            delay: 1,
            scale: 0,
            rotate: 290,
        },
        to: {
            scale: 1,
            rotate: 270,
        },
        velocity: 0.8
    }).start(rightEmoji.set)

    popmotion.spring ({
        from: {
            delay: 1,
            scale: 0
        },
        to: {
            scale: 1,
        },
        velocity: 0.8
    }).start(emojiLeftText.set)

    popmotion.spring ({
        from: {
            delay: 1,
            scale: 0
        },
        to: {
            scale: 1,
        },
        velocity: 0.8
    }).start(emojiRightText.set)
}





