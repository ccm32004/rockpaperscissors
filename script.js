
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
        return "you're tied! You both chose " + computerSelection;
    }

    else if (fixedSelection === 'paper'){
        if (computerSelection === 'scissors'){
            return 'You lose! Scissors beats paper!';
        }
        else{
            return 'you win! paper beats rock!';
       }
    }

    else if (fixedSelection === 'rock'){
        if (computerSelection === 'paper'){
            return 'You lose! paper beats rock!';
        }
        else{
            return 'you win! rock beats scissors!';
       }
    }

    else {
        if (computerSelection === 'rock'){
            return 'You lose! Rock beats scissors!';
        }
        else{
            return 'you win! Scissors beats paper!';
       }
    }

}


function game(){
    for(let i = 0; i < 5; i++){
        let userChoice = prompt("Please input: rock, paper, or scissors")
        console.log(oneRound(userChoice, getComputerChoice()));
    }
}

game()


