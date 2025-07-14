const cards = document.querySelectorAll(".card"),
timeTag = document.querySelector(".time b"),
flipsTag = document.querySelector(".flips b"),
refreshBtn = document.querySelector(".details button");

let maxTime = 30;
let timeLeft = maxTime;
let flips = 0;
let matchedCards = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer;

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
    } else {
        clearInterval(timer);
        disableDeck = true;
    }
}

function flipCard ({target: clickedCard}) {
    if (!isPlaying) {
        isPlaying = true;
        timer = setInterval(initTimer, 1000);
    }

    if (clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
        flips++;
        flipsTag.innerText = flips;
        clickedCard.classList.add("flip");

        if (!cardOne) {
            return cardOne = clickedCard;
        }

        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneIcon = cardOne.querySelector(".back-view i").classList.value;
        let cardTwoIcon = cardTwo.querySelector(".back-view i").classList.value;
        matchCards(cardOneIcon, cardTwoIcon);
    }
}

function matchCards(icon1, icon2) {
    if (icon1 === icon2) {
        matchedCards++;

        if (matchedCards == 6 && timeLeft > 0) {
            clearInterval(timer);
        }

        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        disableDeck = false;
    } else {
        setTimeout(() => {
            cardOne.classList.add("shake");
            cardTwo.classList.add("shake");
        }, 400);

        setTimeout(() => {
            cardOne.classList.remove("shake", "flip");
            cardTwo.classList.remove("shake", "flip");
            cardOne = cardTwo = "";
            disableDeck = false;
        }, 1200);
    }
}

function shuffleCards() {
    timeLeft = maxTime;
    flips = matchedCards = 0;
    cardOne = cardTwo = "";
    clearInterval(timer);
    timeTag.innerText = timeLeft;
    flipsTag.innerText = flips;
    disableDeck = isPlaying = false;

    let icons = [
        "bxl-tiktok", 
        "bxl-instagram-alt", 
        "bxl-facebook-circle", 
        "bxl-twitter", 
        "bxl-whatsapp", 
        "bxl-youtube"
    ];
    let arr = [...icons, ...icons];
    arr.sort(() => Math.random() - 0.5);

    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let iconTag = card.querySelector(".back-view i");
        iconTag.className = `bx ${arr[index]}`;
        card.addEventListener("click", flipCard);
    });
}

shuffleCards();

refreshBtn.addEventListener("click", shuffleCards);

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});