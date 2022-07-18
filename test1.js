function getComputerChoice()
{
    let array = ['rock','paper','scissors'];
    let guess = Math.floor(Math.random() * 3);
    
    return array[guess];
    
}

// function game()
// {
//      for(i = 0;i<5;i++)
//      {
//           playerSelection = 'rock';
//           getComputerChoice();
//           computerSelection = getComputerChoice();
//           console.log(playRound(playerSelection,computerSelection));
//      }
// }



let selectRock = document.getElementById('selectRock');
selectRock.addEventListener('click',ro);

function ro()
{
     document.getElementById('result').textContent = playRound('rock',getComputerChoice());
}

let selectPaper = document.getElementById('selectPaper');
selectPaper.addEventListener('click',pa);

function pa()
{
     document.getElementById('result').textContent = playRound('paper',getComputerChoice());
}

let selectScissors = document.getElementById('selectScissors');
selectScissors.addEventListener('click',sc);

function sc()
{
     document.getElementById('result').textContent = playRound('scissors',getComputerChoice());
}

function playRound(playerSelection,computerSelection)
{
     
     if(playerSelection == 'rock' && computerSelection == 'rock')
     {
          decision = 'Its a tie! Go again.';
     }
     else if(playerSelection == 'rock' && computerSelection == 'paper')
     {
          decision = 'You lost :(';
     }
     else if(playerSelection == 'rock' && computerSelection == 'scissors')
     {
          decision = 'You won!!!';
     }
     else if(playerSelection == 'paper' && computerSelection == 'rock')
     {
          decision = 'You won!!';
     }
     else if(playerSelection == 'paper' && computerSelection == 'paper')
     {
          decision = 'Its a tie, go again!';
     }
     else if(playerSelection == 'paper' && computerSelection == 'scissors')
     {
          decision = 'You lost :(';
     }
     else if(playerSelection == 'scissors' && computerSelection == 'rock')
     {
          decision = 'You lost :(';
     }
     else if(playerSelection == 'scissors' && computerSelection == 'paper')
     {
          decision = 'You won!!!';
     }
     else if(playerSelection == 'scissors' && computerSelection == 'scissors')
     {
          decision = 'Its a tie, go again!';
     }
     else 
     {
          decision = 'something went wrong';
     }

     return decision;
}
