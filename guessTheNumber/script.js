'use strict';
let secretNumber = Math.trunc(Math.random()*20)+1
let myScore = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click',function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number!';
    } else if (guess>secretNumber) {
        if (myScore>1) {
            document.querySelector('.message').textContent = '📈 Too High';
            myScore--;
            document.querySelector('.score').textContent = myScore;
        } else {
            document.querySelector('.message').textContent = '💥 You Lost';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess<secretNumber) {
        if (myScore>1) {
            document.querySelector('.message').textContent = '📉 Too Small';
            myScore--;
            document.querySelector('.score').textContent = myScore;
        } else {
            document.querySelector('.message').textContent = '💥 You Lost';
            document.querySelector('.score').textContent = 0;
        }
    } else {
        document.querySelector('.message').textContent = '🎉 Correct Number 🎉';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent=secretNumber;
        if (myScore>highScore) {
            highScore= myScore;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
})
document.querySelector('.again').addEventListener('click',function () {
    secretNumber = Math.trunc(Math.random()*20)+1;
    myScore = 20;
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('.score').textContent = myScore;
    document.querySelector('body').style.backgroundColor = '#222';
})
