const gameBoard = document.getElementById('game-board');
const attemptsDisplay = document.getElementById('attempts');
const timerDisplay = document.getElementById('timer');
const resetButton = document.getElementById('reset-button');

const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let cards = [...cardValues, ...cardValues]; // Duplicamos las cartas
cards = shuffle(cards); // Barajamos las cartas

let flippedCards = [];
let matchedCards = [];
let attempts = 0;
let timer=null;
let seconds = 0;
let isGameOver = false;

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function createCard(value) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = value;
    card.addEventListener('click', flipCard);
    return card;
}

function flipCard(event) {
    // Si ya hay dos cartas volteadas, no permitir más clics
    if (flippedCards.length === 2 || event.target.classList.contains('flipped') || event.target.classList.contains('matched') || isGameOver) {
        return;
    }

    const card = event.target;
    card.textContent = card.dataset.value;
    card.classList.add('flipped');
    flippedCards.push(card);

    // Si hay dos cartas volteadas, se verifica si coinciden
    if (flippedCards.length === 2) {
        attempts++;
        attemptsDisplay.textContent = attempts;
        setTimeout(checkMatch, 1000); // Esperamos un segundo antes de verificar
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;

    // Si las cartas coinciden, las marcamos como emparejadas
    if (card1.dataset.value === card2.dataset.value) {
        matchedCards.push(card1, card2);
        card1.classList.add('matched');
        card2.classList.add('matched');
    } else {
        // Si no coinciden, las volteamos de nuevo
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        card1.textContent = '';
        card2.textContent = '';
    }

    flippedCards = []; // Limpiamos las cartas volteadas
    checkWin(); // Verificamos si el juego terminó
}

function checkWin() {
    if (matchedCards.length === cards.length) {
        isGameOver = true;
        clearInterval(timer); // Detener el temporizador
        resetButton.classList.remove('hidden');
    }
}

function startTimer() {
    if (timer) clearInterval(timer); // Detener cualquier temporizador previo
    timer = setInterval(() => {
        seconds++;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }, 1000);
}

function initGame() {
    cards = shuffle([...cardValues, ...cardValues]); // Rebarajar las cartas
    matchedCards = [];
    flippedCards = [];
    attempts = 0;
    seconds = 0;
    isGameOver = false;
    attemptsDisplay.textContent = attempts;
    timerDisplay.textContent = '00:00';
    resetButton.classList.add('hidden');

    gameBoard.innerHTML = '';
    cards.forEach(value => {
        const card = createCard(value);
        gameBoard.appendChild(card);
    });

    startTimer();
}

resetButton.addEventListener('click', initGame);

initGame(); // Iniciar el juego cuando cargue la página
