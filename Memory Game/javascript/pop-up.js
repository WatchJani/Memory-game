let startButton = document.getElementById("play");
let timeText = document.getElementById("your-time");
let movesText = document.getElementById("your-moves");

const SuperReader = () => {
    timeText.innerHTML = card.time
    movesText.innerHTML = card.moves
}

startButton.addEventListener("click", () => {
    popUp.style.display = "none"
    card.pair = 0
    card.moves = 0
    Render()
})