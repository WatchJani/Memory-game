Render()

let card = {
    "thisClick": null,
    "previousCard": null,
    "isAnimationRunning": false,
    "time": "",
    "isTimeStart": false,
    "moves": 0,
    "numberOfCard": data.length,
    "pair": 0
}


const Read = (cardId) => {
    //security
    if (card.isAnimationRunning || card.previousCard == cardId || cardId == null) {
        return;
    }

    //active timer
    if (!card.isTimeStart) {
        card.isTimeStart = true
        startTimer()
    }

    //this card
    let thisImage = document.getElementById(cardId);

    //count moves
    card.moves++

    //animation
    thisImage.classList.add('animate');

    //previous card
    let previousImage = document.getElementById(card.previousCard)
    //set a new card image
    thisImage.src = `../../assets/${(cardId % (card.numberOfCard / 2)) + 1}.webp`

    //is it a second flip
    if (card.previousCard == null) {
        card.previousCard = cardId
        return
    }

    //block code
    card.isAnimationRunning = true

    //is it the same card
    if (card.previousCard % (card.numberOfCard / 2) == cardId % (card.numberOfCard / 2)) {
        card.pair++
        card.previousCard = null
        card.isAnimationRunning = false

        previousImage.id = null
        thisImage.id = null

        //end game
        if (card.pair == card.numberOfCard / 2) {
            card.time = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
                ":" + (seconds > 9 ? seconds : "0" + seconds);
            popUp.style.display = "block"
            SuperReader()
            resetTimer()
        }
        return
    }

    //reset all property
    card.previousCard = null
    setTimeout(function () {
        thisImage.classList.remove('animate');
        previousImage.classList.remove('animate');
        thisImage.src = `../../assets/background-card.webp`
        previousImage.src = `../../assets/background-card.webp`
        card.isAnimationRunning = false
    }, 1000);
}
