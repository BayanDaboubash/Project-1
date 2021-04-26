const cards = document.querySelectorAll('.memory-card');



let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

const flipCard = (card) => {
  if (lockBoard) return;
  if (card === firstCard) return;

  card.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = card;

    return;
  }

  secondCard = card;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}``

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => {
    card.addEventListener('click', () => {
        flipCard(card)
    })
});