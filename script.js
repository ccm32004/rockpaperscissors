
function getComputerChoice(){
    let num = Math.floor(Math.random()*3 + 1);

    switch (num){
        case 1:
            return 'rock';
        
        case 2: 
            return 'paper';
        case 3:
            return 'scissors';
    }
}

var userScore = 0;
var computerScore = 0;

function oneRound(playerSelection, computerSelection){
    const fixedSelection = playerSelection.toLowerCase();
    if (fixedSelection === computerSelection){
        text.textContent = "you're tied! You both chose " + computerSelection;
    }

    else if (fixedSelection === 'paper'){
        if (computerSelection === 'scissors'){
            computerScore += 1;
            text.textContent = 'You lose! Scissors beats paper!';
        }
        else{
            userScore += 1;
            text.textContent = 'you win! paper beats rock!';
       }
    }

    else if (fixedSelection === 'rock'){
        if (computerSelection === 'paper'){
            computerScore += 1;
            text.textContent = 'You lose! paper beats rock!';
        }
        else{
            userScore += 1;
            text.textContent = 'you win! rock beats scissors!';
       }
    }

    else {
        if (computerSelection === 'rock'){
            computerScore += 1;
            text.textContent = 'You lose! Rock beats scissors!';
        }
        else{
            userScore += 1;
            text.textContent = 'you win! Scissors beats paper!';
       }
    }

}


function game(){
    for(let i = 0; i < 5; i++){
        let userChoice = prompt("Please input: rock, paper, or scissors")
        console.log(oneRound(userChoice, getComputerChoice()));
    }
}

const buttons = document.querySelectorAll('button');

//adding div to display results:
const results = document.querySelector('.results');

const text = document.createElement('div');
text.classList.add('text');
buttons.forEach(button => button.addEventListener('click', () => oneRound(button.id, getComputerChoice())));

results.appendChild(text);

var scores = document.createElement('div');
scores.classList.add('score');
scores.textContent = `you: ${userScore} and computer: ${computerScore}`;

results.appendChild(scores);


