

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}


function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getPlayerMove(move) {
   return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'paper' && computerMove === 'rock') || (playerMove === 'scissors' && computerMove === 'paper')) {
        winner = 'player';
    }
    else if ((computerMove === 'rock' && playerMove === 'scissors') || (computerMove === 'paper' && playerMove === 'rock') || (computerMove === 'scissors' && playerMove === 'paper')) {
        winner = 'computer';
    }
    else {
    winner = 'tie';
    }
    return winner;
}



function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

while (playerWins < 5 && computerWins < 5){
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner(playerMove, computerMove);
    console.log('Player move was ' + playerMove + ' and computer move was ' + computerMove);
        if (winner == 'player'){
        playerWins += 1;
        console.log('Player wins, The current score is ' + playerWins + 'to ' + computerWins);
        }
        else if (getWinner == 'computer') {
        computerWins += 1;
        console.log('Computer wins, The current score is ' + playerWins + 'to ' + computerWins);
        }
        else {
        console.log('It\'s a tie, the current score is ' + playerWins + ' to ' + computerWins);
        }
    return [playerWins, computerWins];
    }
}

playToFive();


