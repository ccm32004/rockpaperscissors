
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


function oneRound(playerSelection, computerSelection){
    const fixedSelection = playerSelection.toLowerCase();
    if (fixedSelection === computerSelection){
        text.textContent = "you're tied! You both chose " + computerSelection;
        scores.textContent = `you: ${userScore} and computer: ${computerScore}`;
    }

    else if (fixedSelection === 'paper'){
        if (computerSelection === 'scissors'){
            computerScore += 1;
            text.textContent = 'You lose! Scissors beats paper!';
            scores.textContent = `you: ${userScore} and computer: ${computerScore}`;
        }
        else{
            userScore += 1;
            text.textContent = 'you win! paper beats rock!';
            scores.textContent = `you: ${userScore} and computer: ${computerScore}`;
       }
    }

    else if (fixedSelection === 'rock'){
        if (computerSelection === 'paper'){
            computerScore += 1;
            text.textContent = 'You lose! paper beats rock!';
            scores.textContent = `you: ${userScore} and computer: ${computerScore}`;
        }
        else{
            userScore += 1;
            text.textContent = 'you win! rock beats scissors!';
            scores.textContent = `you: ${userScore} and computer: ${computerScore}`;
       }
    }

    else {
        if (computerSelection === 'rock'){
            computerScore += 1;
            text.textContent = 'You lose! Rock beats scissors!';
            scores.textContent = `you: ${userScore} and computer: ${computerScore}`;
        }
        else{
            userScore += 1;
            text.textContent = 'you win! Scissors beats paper!';
            scores.textContent = `you: ${userScore} and computer: ${computerScore}`;
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

function play(e){
    oneRound(e.target.id, getComputerChoice());
    if (userScore === 5){
        const message = document.createElement('div');
        message.classList.add('message');
        message.textContent = "congratulations! You have won"

        results.appendChild(text);
        results.appendChild(scores);
        results.appendChild(message);
    
        userScore = 0;
        computerScore = 0;
    
    }

    else if(computerScore === 5){
        const message = document.createElement('div');
        message.classList.add('message');
        message.textContent = "sadge you have not won"

        results.appendChild(text);
        results.appendChild(scores);
        results.appendChild(message);
    
        userScore = 0;
        computerScore = 0;
    }

    
    else{
        element = document.querySelector('.message');
        if(element){
            results.removeChild(element);
        }
        results.appendChild(text);
        results.appendChild(scores);
    }

}


const results = document.querySelector('.results');

const text = document.createElement('div');
text.classList.add('text');

var scores = document.createElement('div');
scores.classList.add('score');

//declaring useful variables 
var userScore = 0;
var computerScore = 0;

buttons.forEach(button => button.addEventListener('click', play)); //after the first time, it only runs play, doesn't go down anymore?