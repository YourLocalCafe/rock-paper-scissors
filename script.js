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


function playGame()
{
    computerScore = 0;
    humanScore = 0;
    
    function playRound(humanChoice, computerChoice)
    {
        humanChoice = humanChoice.toLowerCase();
    
        if(humanChoice === 'rock' && computerChoice === 'rock')
        {
            console.log("You drew!");
            computerScore++;
            humanScore++;
        }
        else if(humanChoice === 'rock' && computerChoice === 'paper')
        {
            console.log("You lose! Paper beats rock.");
            computerScore++;
        }
        else if(humanChoice === 'rock' && computerChoice === 'scissors')
        {
            console.log("You win! Rock beats scissors.");
            humanScore++;
        }
        else if(humanChoice === 'paper' && computerChoice === 'rock')
        {
            console.log("You win! Paper beats rock.");
            humanScore++;
        }
        else if(humanChoice === 'paper' && computerChoice === 'paper')
        {
            console.log('You drew!');
            humanScore++;
            computerScore++;
        }
        else if(humanChoice === 'paper' && computerChoice === 'scissors')
        {
            console.log("You lose! Scissors beat paper.");
            computerScore++;
        }
        else if(humanChoice === 'scissors' && computerChoice === 'rock')
        {
            console.log("You lose! Rock beats scissors.");
            computerScore++;
        }
        else if(humanChoice === 'scissors' && computerChoice === 'paper')
        {
            console.log("You win! Scissors beat paper.");
            humanScore++;
        }
        else
        {
            console.log("You drew!");
            humanScore++;
            computerScore++;
        }
    }

    for(i = 0; i < 5; i++)
    {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if(humanScore === computerScore) console.log("Draw!");
    else if(humanScore > computerScore) console.log("Human wins!");
    else console.log("Computer wins!");
}

playGame();