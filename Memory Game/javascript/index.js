//random array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

data = shuffleArray(data);

//get element from html
const slikeDiv = document.getElementById("img");

//object array 
const htmlString = data.map(obj => {
    return `<img src="../../assets/background-card.webp" alt="Slika ${obj.id}" id="${obj.id}" onClick="Read(${obj.id}, ${obj.key})">`;
}).join("");

//print data from array
slikeDiv.innerHTML = htmlString;

let card = {
    "thisClick": null,
    "previousCard": null
}

let isAnimationRunning = false

const Read = (cardId, cardKey) => {
    if (isAnimationRunning || card.previousCard == cardId) {
        return;
    }

    let thisImage = document.getElementById(cardId);

    thisImage.classList.add('animate');


    let previousImage = document.getElementById(card.previousCard)
    thisImage.src = `../../assets/${cardKey}.webp`

    if (card.previousCard == null) {
        card.previousCard = cardId
        return
    }

    isAnimationRunning = true

    if (card.previousCard % 10 == cardId % 10) { // the best 😎😎😎
        console.log("win")
        card.previousCard = null
        return
    }
    
    card.previousCard = null

    setTimeout(function () {
        thisImage.classList.remove('animate');
        previousImage.classList.remove('animate');
        thisImage.src = `../../assets/background-card.webp`
        previousImage.src = `../../assets/background-card.webp`
        isAnimationRunning = false
    }, 1000);
}