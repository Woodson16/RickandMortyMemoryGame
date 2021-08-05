const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

let totalMatches = 0

let turn = 0

function flipCard() {
if (lockBoard) return;
if (this === firstCard)return;

this.classList.add ('flip'); 
console.log('this',this);

if (!hasFlippedCard){
//first click

turn=1
console.log('firstTurn',turn);
hasFlippedCard = true;
firstCard = this;
console.log('firstCard',firstCard)
return;
    }

    // second click
    turn = 2
    console.log('secondTurn',turn);
    if (turn===2){
        secondCard = this;
    console.log('secondCard',secondCard);
    checkForMatch();
    } 
}
function checkForMatch(){
firstCardData=firstCard.getAttribute('dataName')
secondCardData=secondCard.getAttribute('dataName')

    let isMatch = firstCardData===secondCardData
    console.log('isMatch',isMatch);
    isMatch ? disableCards():unFlipCards();
    turn = 0
    console.log('resetTurn',turn)
    hasFlippedCard = false; 
  }   
function disableCards(){
    totalMatches++
    
    console.log('totalMatches=',totalMatches);
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);  
    if (totalMatches===6){
        alert('You Win')
    }
    
}


function unFlipCards(){
    lockBoard = true;
setTimeout(() => {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')

    resetBoard();
    }, 1500);
}

function resetBoard(){
hasFlippedCard = false;
lockBoard = false;
firstCard = null;
secondCard = null;
}

(function shuffle(){
    cards.forEach(card =>{
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click',flipCard));

