let ran = console.log(parseInt((Math.random() * 100) + 1))
const submit = document.querySelector('#subt')
const uservalue = document.querySelector('#guessField')
const Prevguesses = document.querySelector('.guesses')
const remainingguesses = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')
const p = document.createElement('p')
let prevguess = []
let numguess = 1
let playgame = true
if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(uservalue.value);
        console.log(guess);
        validguess(guess)
    })
}
function validguess(guess) {
    if (isNaN(guess)) {
        alert('please enter a valid number')
    } else if (guess < 1) {
        alert('please enter a valid number')
    }
    else if (guess > 100) {
        alert('please enter a valid number')
    } else {
        Prevguess.push(guess)
        if (numguess === 11) {
            displayguess(guess)
            displaymessage(`Game over, random no is ${ran}`)
            endgame()
        } else {
            displayguess(guess)
            checkguess(guess)
        }
    }
}
function checkguess(guess) {
    if (guess === ran) {
        displaymessage(`you guessed it right`);
        endgame()
    } else if (guess < ran) {
        displaymessage(`number is too low`);
    }
    else if (guess > ran) {
        displaymessage(`number is too high`);
    }
}
function displayguess(guess) {
    uservalue.value = ''
    Prevguesses.innerHTML += `${guess}`
    numguess++;
    remainingguesses.innerHTML = `${11 - numguess}`
}
function displaymessage(message) {
    lowOrHi.innerHTML = ` <h2>${message}</h2>`
}
function newgame() {
    const newgameButton = document.querySelector('#newgame')
    newgameButton.addEventListener('click', function (e) {
        let ran = console.log(parseInt((Math.random() * 100) + 1))
        prevguess = []
        numguess = 1
        Prevguesses.innerHTML = ''
        remainingguesses.innerHTML = `${11 - numguess}`
        uservalue.removeAttribute('disabled')
        startover.removeChild('p')
        playgame = true;
    })
}
function endgame() {
    uservalue.value = ''
    uservalue.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newgame">Start new game</h2>`;
    startover.appendChild(p)
    playgame = false
    newgame()
}