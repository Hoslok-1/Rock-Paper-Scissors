function getComputerChoice()
{
    let array = ['rock','paper','scissors'];
    let guess = Math.floor(Math.random() * 3);
        
    console.log(array[guess]);
    return array[guess];
    
}



function game()
{
     for(i = 0;i<5;i++)
     {
          playerSelection = prompt("enter your move");
          getComputerChoice();
          computerSelection = getComputerChoice();
          console.log(playRound(playerSelection,computerSelection));
     }
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

     return decision
}

game();


