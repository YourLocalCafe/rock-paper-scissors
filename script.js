computerScore = 0;
humanScore = 0;

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

function playRound(humanChoice, computerChoice)
{
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === 'rock' && computerChoice === 'rock')
    {
        alert("You drew!")
        computerScore++;
        humanScore++;
    }
    else if(humanChoice === 'rock' && computerChoice === 'paper')
    {
        alert("You lose! Paper beats rock.");
        computerScore++;
    }
    else if(humanChoice === 'rock' && computerChoice === 'scissors')
    {
        alert("You win! Rock beats scissors.");
        humanScore++;
    }
    else if(humanChoice === 'paper' && computerChoice === 'rock')
    {
        alert("You win! Paper beats rock.");
        humanScore++;
    }
    else if(humanChoice === 'paper' && computerChoice === 'paper')
    {
        alert('You drew!');
        humanScore++;
        computerScore++;
    }
    else if(humanChoice === 'paper' && computerChoice === 'scissors')
    {
        alert("You lose! Scissors beat paper.");
        computerScore++;
    }
    else if(humanChoice === 'scissors' && computerChoice === 'rock')
    {
        alert("You lose! Rock beats scissors.");
        computerScore++;
    }
    else if(humanChoice === 'scissors' && computerChoice === 'paper')
    {
        alert("You win! Scissors beat paper.");
        humanScore++;
    }
    else
    {
        alert("You drew!")
        humanScore++;
        computerScore++;
    }
}