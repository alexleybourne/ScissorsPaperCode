document.addEventListener("DOMContentLoaded", () => {
    // newGame()
    newGameAnim()
    resultTextAnim()
    notificationAnim()
})

var sources = [
    "Scissors.png",
    "Paper.png",
    "Code.png"
];

var maxScore = 3
var currentRound = 0

var userScore = 0
var botScore = 0

var valueRight = ""
var valueLeft = ""

function scissorsPick() {
    valueLeft = "Scissors.png"
    newGame()

}

function paperPick() {
    valueLeft = "Paper.png"
    newGame()

}

function robotPick() {
    valueLeft = "Code.png"
    newGame()

}

function diceRoll() {
    valueLeft = sources[Math.floor(Math.random()*sources.length)]
    newGame()

}

function newGame() {
    
    // Computers Choice Maker
    valueRight = sources[Math.floor(Math.random()*sources.length)]

    // User Pick
    document.getElementsByClassName("leftImage")[0].src = `${valueLeft}`
    document.getElementsByClassName("emojiLeftText")[0].innerHTML = `${valueLeft.replace('.png','')}`

    // Computer
    document.getElementsByClassName("rightImage")[0].src = `${valueRight}`,
    document.getElementsByClassName("emojiRightText")[0].innerHTML = `${valueRight.replace('.png','')}`

    newGameAnim()

    function resultText(x){
        document.getElementsByClassName("letters")[0].innerHTML = x
    }

    if (valueLeft === valueRight) {

        resultText("DRAW")
        userScore++
        botScore++

    } else if (valueLeft.includes("S") && valueRight.includes("P")) {

        resultText("WINNER")
        userScore++

    } else if (valueLeft.includes("C") && valueRight.includes("S")) {

        resultText("WINNER")
        userScore++

    } else if (valueLeft.includes("P") && valueRight.includes("C")) {

        resultText("WINNER")
        userScore++

    }   else {

        resultText("LOSER")
        botScore++

    }

    document.getElementsByClassName("notifScoreUser")[0].innerHTML = `${userScore}`
    document.getElementsByClassName("notifScoreBot")[0].innerHTML = `${botScore}`
    resultTextAnim()
    notificationAnim()
    currentRound++

    if (userScore === maxScore) {
        whoWins()
    } else if (botScore === maxScore) {
        whoWins()
    }

    function whoWins(){
        if (userScore === botScore) {
            setTimeout(function() {
                resultText("ITS A DRAW")
                resetGame()
              }, 1000);
        } else if (userScore > botScore) {
            setTimeout(function() {
                resultText("YOU'RE A WINNER")
                resetGame()
              }, 1000);
        } else {
            setTimeout(function() {
                resultText("YOU'RE A LOSER")
                resetGame()
              }, 1000);
        }
    }
}


function resetGame() {
    userScore = 0
    botScore = 0
    hideButtons()
    resultTextAnim()
    notificationAnim()
    currentRound = 0
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
    delay: anime.stagger(150) // increase delay by 100ms for each elements.
});

anime({
    targets: '.textMessage',
    keyframes: [
        {scale: 0.2, translateY: -10, duration: 100},
        {scale: 1, translateY: 0 }
    ]
})

anime({
    targets: '.button',
    keyframes: [
        {scale: 0, opacity: 0, duration: 10},
        {scale: 1, opacity: 1}
    ],
    delay: anime.stagger(150) // increase delay by 100ms for each elements.
});


function newGameAnim() {

    anime({
        targets: '.textMessage',
        keyframes: [
            {scale: 0, duration: 1},
            {scale: 1}
        ]
    })

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

    // anime({
    //     targets: '.button',
    //     keyframes: [
    //         {scale: 1.1, duration: 100},
    //         {scale: 1}
    //     ]
    // })
}


function hideButtons() {
    anime({
        targets: '.button',
        keyframes: [
            {scale: 1, opacity: 1, duration: 10},
            {scale: 0, opacity: 0}
        ],
        delay: anime.stagger(150) // increase delay by 100ms for each elements.
    });
    document.getElementById("Button").disabled = true
}


function resultTextAnim() {

    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml6 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline()
    .add({
        delay: 3000,
        targets: '.ml6 .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
    });
}

function notificationAnim() {

    if (userScore === 0) {
        document.getElementsByClassName("notifScoreUser")[0].style.visibility = "hidden"
    } else {
        document.getElementsByClassName("notifScoreUser")[0].style.visibility = "visible"
    }

    if (botScore === 0) {
        document.getElementsByClassName("notifScoreBot")[0].style.visibility = "hidden"
    } else {
        document.getElementsByClassName("notifScoreBot")[0].style.visibility = "visible"
    }

    anime({
        targets: '.notifScoreUser',
        keyframes: [
            {scale: 0.2, translateY: -10, duration: 100},
            {scale: 1, translateY: 0}
        ]
     })

     anime({
        targets: '.notifScoreBot',
        keyframes: [
            {scale: 0.2, translateY: -10, duration: 100},
            {scale: 1, translateY: 0}
        ]
     })

}