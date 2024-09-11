document.addEventListener('DOMContentLoaded', function() {

    const userElement = document.getElementById('user');
    const rockBtn = document.getElementById('rock');
    const paperBtn = document.getElementById('paper');
    const scissorBtn = document.getElementById('scissor');

    const dict = {"user-score": 0, "computer-score": 0}
    

    if (rockBtn) {
        rockBtn.addEventListener('click', function() {
            playRound("rock");
        });
    }

    if (paperBtn) {
        paperBtn.addEventListener('click', function() {
            playRound("paper");
        });
    }

    if (scissorBtn) {
        scissorBtn.addEventListener('click', function() {
            playRound("scissor");
        });
    }

    function playRound(userChoice) {
        const choices = ["rock", "paper", "scissor"];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        console.log(computerChoice);
        
        let result;
        
        if (userChoice === computerChoice) {
            result = "It's a tie!";
        }
         else if (
            ((userChoice === "rock") && (computerChoice=="scissor") ) ||
            ((userChoice === "paper") && (computerChoice=="rock") ) ||
            ((userChoice === "scissor") && (computerChoice=="paper"))
        ) {
            result = "You win!";
            dict["user-score"] = dict["user-score"] + 1
            console.log(dict);
        } else {
            result = "You lose!";
            dict["computer-score"] = dict["computer-score"] + 1
            console.log(dict);
        }
        
        userElement.innerHTML = `My Choice: ${userChoice} , Computer Choice: ${computerChoice}. ${result}`;
        updateScore();
    }

    function updateScore() {
        document.getElementById('userScore').textContent = `Your score: ${dict["user-score"]}`;
        document.getElementById('computerScore').textContent = `Computer score: ${dict["computer-score"]}`;
    }

})