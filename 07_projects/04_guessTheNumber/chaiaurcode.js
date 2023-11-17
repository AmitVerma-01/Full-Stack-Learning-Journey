let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 0;

let playGame = true;

if (playGame) {
  submit.addEventListener('click',(e)=>{
    e.preventDefault()

    const  guess = parseInt(userInput.value)
    validateGuess(guess);
  })
}

function validateGuess(guess) {
  // validate input
    if(isNaN(guess)){
      msg = `Please enter a valid Number btw 1 to 100`;
      displayMsg(msg);
    }else if(guess < 1){
      msg = `Please enter a Number greater than 1.`;
      displayMsg(msg);
    }
    else if(guess > 100){
      msg = `Please enter a Number less than 100.`;
      displayMsg(msg);
    } else {
        prevGuess.push(guess);
        if(numGuess === 10){
            displayGuess(guess);
            displayMsg(`Game Over! random number was ${randomNumber}`)
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
  // checking guess and print msg
  if(guess === randomNumber){
    displayMsg(`You guessed it right ${randomNumber}`)
    endGame();
  } else if(guess < randomNumber){
    displayMsg(`Number is TOO low`)
  }else {
    displayMsg(`Number is TOO high`)
  }
}

function displayGuess(guess) {
  //guess printing and clean the input
  userInput.value='';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${10-numGuess}`;
}

function displayMsg(msg) {
  //msg displaying
  lowOrHigh.innerHTML = `${msg}`
  
}

function newGame() {

    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*100+1)
        numGuess = 0;
        prevGuess = [];
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${10-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p)
        playGame = true;

    })

}

function endGame() {
    userInput.value='';
    userInput.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML='<h2 id=newGame> Start New Game</h2>'
    p.style.border='2px solid black'
    p.style.borderRadius='30px'
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
