let flipped = null;
let score = 0;
let blocked = false;
const front = 'img/front.png';


function populateCards() {
  let cards = [
    'img/bone-96.png',
    'img/coffee-96.png',
    'img/desktop-computer-96.png',
    'img/germany-96.png',
    'img/hamburger-96.png',
    'img/headphone-96.png',
    'img/lemon-96.png',
    'img/pizza-96.png',
    'img/scooter-96.png',
    'img/united-states-96.png',
  ];

  cards = cards.concat(cards);
  cards = cards.sort(() => .5 - Math.random());

  for (card of cards) {

    const img = createCard(card);
    document.getElementsByClassName('cards')[0].appendChild(img);
  }
}

function createCard(card) {
  const img = document.createElement('img');
  img.src = front;
  img.dataset.img = card;
  img.alt = 'Card';
  img.addEventListener('click', function(event) {
    flip(event);
  });

  return img;
}

function flip(event) {

  if (blocked === true) {
    return false;
  }

  event.target.src = event.target.dataset.img;

  if (flipped === null) {
    flipped = event.target;
  } else {

    blocked = true;

    if (event.target.src === flipped.src) {
      updateScore(10);
      resetClick();
    } else {
      setTimeout(function() {
        resetCard(event.target);
      }, 1000);
    }
  }
}

function resetCard(card) {
  card.src = front;
  flipped.src = front;

  resetClick();
}

function resetClick() {
  flipped = null;
  blocked = false;
}

function updateScore(points) {
  score += 10;
  document.getElementById('points').innerHTML = score;

  if (score === 100) {
    alert('congratulations, you win!');
  }
}

populateCards();