let humanScore = 0;
let computerScore = 0;

let numberRoundRaw = prompt("How many round");

let numberRound = parseInt(numberRoundRaw);

function playGame() {
    function playRound(humanSelection, computerSelection) {
        let result = "";
        if (humanSelection == "paper") {
            result = computerSelection == "paper" ? "you draw" : computerSelection == "rock" ? "you win" : "you lose";
        } else if (humanSelection == "rock") {
            result = computerSelection == "rock" ? "you draw" : computerSelection == "scissors" ? "you win" : "you lose";
        } else if (humanSelection == "scissors") {
            result = computerSelection == "scissors" ? "you draw" : computerSelection == "paper" ? "you win" : "you lose";
        } else {
            result = "you didn't make a valid choice"
            return;
        }
      

        return result;
    }

    function getComputerChoice() {
        let random = Math.random();
        let choice = ""
        if (random < 0.33) {
            choice = "rock";
        } else if (random >= 0.33 && random <= 0.66) {
            choice = "paper";
        } else {
            choice = "scissors";
        }
        return choice;
    }





        let computerSelection = getComputerChoice();
        let humanSelectionRaw = prompt("Make a choice");
        let humanSelection = humanSelectionRaw.toLowerCase();
        let round = playRound(humanSelection, computerSelection);

        if (round.includes("win")) {
            humanScore++;
        } else  if (round.includes("lose")) {
            computerScore++;
        }
        console.log("the computer played " + computerSelection + " and " + round);

   
}



 for (let i = 1; i <= numberRound; i++) {
    playGame();
 }

 if (humanScore > computerScore) {
    console.log("You won");
} else if (humanScore < computerScore) {
    console.log("You lost");
} else if (humanScore == computerScore) {
    console.log("You draw");
}