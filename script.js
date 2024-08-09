function getComputerChoice()
{
    return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice()
{
    return prompt("Enter your choice from (Rock, Paper, Scissors)");
}

