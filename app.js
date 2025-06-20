let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScoreSpan = document.querySelector('#user-score');
const compScoreSpan = document.querySelector('#computer-score');
const resetBtn = document.querySelector('.reset-button');

const getComputerChoice = () => {
    const optipons = ['rock', 'paper', 'scissors'];
    const randIn = Math.floor(Math.random()*3);
    return optipons[randIn];

}

const drawGame = () => {
      msg.innerText = "The game is a draw."
      msg.style.backgroundColor = 'Grey';
}

const resetbutton = () => {
    userScore = 0;
    compScore = 0;
    userScoreSpan.innerText = userScore;
    compScoreSpan.innerText = compScore;
    msg.innerText = "Choose your option";
    msg.style.backgroundColor= 'black'
}

const showWinner = (userWin,ComputerChoice) => {
    if(userWin){
        userScore++;
        msg.style.backgroundColor = '#16610E';
        msg.innerText = "You win!, Computer Chose : " + ComputerChoice;
        userScoreSpan.innerText = userScore;
    }else{
        compScore++;
        msg.style.backgroundColor = 'Red';
        msg.innerText = "Computer wins!, Computer Chose : " + ComputerChoice;
        compScoreSpan.innerText = compScore;
    }
}
const playGame = (userChoice) => {
    console.log("User choice",userChoice);
    const ComputerChoice = getComputerChoice();
    console.log("Computer choice",ComputerChoice);

    if(userChoice === ComputerChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === 'rock'){
            userWin = ComputerChoice === 'scissors' ? true : false;
        }else if (userChoice === 'paper'){
            userWin = ComputerChoice === 'rock' ? true : false;
        }else if (userChoice === 'scissors'){
            userWin = ComputerChoice === 'paper' ? true : false;
        }
    showWinner(userWin,ComputerChoice);
    }
}

choices.forEach(choice => {
   console.log(choice);
   choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute('id');
    playGame(userChoice);
  })
})
resetBtn.addEventListener('click', () => {
    
    resetbutton();
})