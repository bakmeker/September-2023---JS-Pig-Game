'use strict';

//! 03.09.2023

// Selecting elements
const player1El = document.querySelector(`.player--1`)
const player0El = document.querySelector(`.player--0`)
const score1El = document.getElementById(`score--0`)
const score2El = document.getElementById(`score--1`)
const current0El = document.getElementById(`current--0`)
const current1El = document.getElementById(`current--1`)
const diceEl = document.querySelector(`.dice`)
const btnNew = document.querySelector(`.btn--new`)
const btnRoll = document.querySelector(`.btn--roll`)
const btnHold = document.querySelector(`.btn--hold`)
let playing = true;



const switchPlayer = function() {document.getElementById(`current--${activePlayer}`).textContent = 0
currentScore = 0;
activePlayer = activePlayer === 0 ? 1 : 0;
player0El.classList.toggle(`player--active`);
player1El.classList.toggle(`player--active`);
}

// Starting conditions
score1El.textContent = 0;
score2El.textContent = 0;
diceEl.classList.add(`hidden`)


// Starting conditions
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener(`click`, function()


// 1. Generating a random dice roll
{
    
    if (playing) {

    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);


    // 2. Displa dice 
diceEl.classList.remove(`hidden`);
diceEl.src = `dice-${dice}.png`

    // 3.  check for rolled 1
    if (dice !== 1 ) {
        currentScore += dice;
       document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        // Switch to next player
     switchPlayer()
    }

}
})

btnHold.addEventListener(`click`, function() {

    if (playing) {
    scores[activePlayer] += currentScore;
    console.log('Hold pressed');
    
    
    
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];


    // Check if player is won

    
    if (scores[activePlayer] >= 20 ) {
        playing = false;
        diceEl.classList.add(`hidden`);
        document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
        document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);
    } else {

        switchPlayer();
    } }
});


btnNew.addEventListener(`click`, function() {
    diceEl.classList.add(`hidden`);
    document.querySelector(`.player--${activePlayer}`).classList.remove(`player--winner`);
    document.querySelector(`.player--${activePlayer}`).classList.add(`player--active`);
    switchPlayer();
    current0El.textContent = 0;
    current1El.textContent = 0;
    score1El.textContent = 0;
    score2El.textContent = 0;
    playing = true;

})

