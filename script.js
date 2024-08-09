function getComputerChoice()
{
    compChoice = Math.floor(Math.random() * 3) + 1;
    
    if(compChoice === 1) return 'rock';
    else if(compChoice === 2) return 'paper';
    else return 'scissors';
}

function getHumanChoice()
{
    return prompt("Enter your choice from (Rock, Paper, Scissors)");
}

