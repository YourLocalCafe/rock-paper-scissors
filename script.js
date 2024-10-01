let humanScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    compChoice = Math.floor(Math.random() * 3) + 1;
    
    if(compChoice === 1) return 'rock';
    else if(compChoice === 2) return 'paper';
    else return 'scissors';
}


function playRound(humanChoice, computerChoice)
{
    const humanCounter = document.querySelector("#player-score");
    const computerCounter = document.querySelector("#computer-score");
    const winnerDiv = document.querySelector(".winner");

    winnerDiv.textContent = "";

    if(humanChoice === 'rock' && computerChoice === 'paper')
    {
        computerScore++;
    }
    else if(humanChoice === 'rock' && computerChoice === 'scissors')
    {
        humanScore++;
    }
    else if(humanChoice === 'paper' && computerChoice === 'rock')
    {
        humanScore++;
    }
    else if(humanChoice === 'paper' && computerChoice === 'scissors')
    {
        computerScore++;

    }
    else if(humanChoice === 'scissors' && computerChoice === 'rock')
    {
        computerScore++;

    }
    else if(humanChoice === 'scissors' && computerChoice === 'paper')
    {
        humanScore++;
    }
    else
    {
        humanScore += 0.5;
        computerScore += 0.5;
    }

    computerCounter.textContent = `${computerScore}`;
    humanCounter.textContent = `${humanScore}`;

    if(humanScore + computerScore == 5)
    {
        if(humanScore > computerScore)
        {
            winnerDiv.textContent = "Player wins!";
        }
        else if(humanScore < computerScore)
        {
            winnerDiv.textContent = "Computer wins!";
        }
        else
        {
            winnerDiv.textContent = "Draw!";
        }

        humanScore = 0;
        computerScore = 0;
    }
}

const playerMoves = document.querySelector(".moves");

playerMoves.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            playRound('rock', getComputerChoice());
            break;
        case 'paper':
            playRound('paper', getComputerChoice());
            break;
        case 'scissors':
            playRound('scissors', getComputerChoice());
            break;
    }
});

