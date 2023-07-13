let playerScore = 0, computerScore = 0;

    function getComputerChoice() {
        const items = ['rock', 'paper', 'scissors'];
        let randomIndex = Math.floor(Math.random() * 3);
        return items[randomIndex];
    }

    function getPlayerChoice() {
        const selections = document.getElementsByName('selection');
        for (let i = 0; i < selections.length; i++) {
            if (selections[i].checked) {
                return selections[i].value;
            }
        }
    }

    function chooseWinner(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return;
        }

        if (playerSelection === 'rock' && computerSelection === 'scissors') {
            updatePlayerScore(playerScore);
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            updatePlayerScore(playerScore);
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            updatePlayerScore(playerScore);
        } else {
            updateComputerScore(computerScore);
        }
    }

    function updatePlayerScore() {
        playerScore++;
        const score = document.querySelector('#player-score');
        score.textContent = playerScore;
    }

    function updateComputerScore() {
        computerScore++;
        const score = document.querySelector('#computer-score');
        score.textContent = computerScore;
    }

    function hasWinner() {
        return playerScore === 5
            || computerScore === 5;
    }

    function getWinner() {
        return (playerScore === 5) ? 'Player' : 'Computer';
    }

    function printWinner(winner) {
        const result = document.querySelector('#result');
        result.textContent = `${winner} wins!`;
    }

    const selections = document.querySelectorAll('.selection');

    function playRound() {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        chooseWinner(playerSelection, computerSelection);
        if (hasWinner()) {
            const winner = getWinner();
            printWinner(winner);
        }
    }
    selections.forEach(selection => selection.addEventListener('click', playRound));