function prepareGame() {
    document.getElementById("round-result").innerHTML = "";
    let humanScore = 0;
    let computerScore = 0;

    let numberRoundRaw = prompt("How many round");
    let playedRound = 0;
    let finished = false;

    let numberRound =numberRoundRaw !== null ? parseInt(numberRoundRaw) :1;
        
    document.getElementById("roundNumber").innerText = numberRound;
    return [humanScore, computerScore, playedRound, finished, numberRound]
}
let [humanScore, computerScore, playedRound, finished, numberRound] = prepareGame();




function playGame(humanSelection) {

    function playRound(humanSelection, computerSelection) {
        if (finished) { alert("Gioco finito ricarica"); return; }
        let roundDiv = document.createElement("div");
        roundDiv.classList.add("round");
        roundDiv.innerText = "";
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

        if (result.includes("win")) {
            humanScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }



        roundDiv.innerText = "the computer played " + computerSelection + " and " + result;

        document.getElementById("round-result").appendChild(roundDiv)


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

    playRound(humanSelection, computerSelection);


    document.getElementById("human").textContent = humanScore;
    document.getElementById("computer").innerText = computerScore;
    playedRound++
    if (playedRound == numberRound) {
        let result = "";
        if (humanScore > computerScore) {
            result = "You won";
        } else if (humanScore < computerScore) {

            result = "You lost";
        } else if (humanScore == computerScore) {

            result = "You draw";
        }
        document.getElementsByClassName("shadow-back")[0].classList.toggle("show");
        document.getElementById("result").innerText = result;
        finished = true;
        return
    };
}






document.addEventListener("click", (e) => {

    let choice = e.target.id;
    switch (choice) {
        case "rock":

            playGame(choice);
            break;
        case "paper":

            playGame(choice);
            break;
        case "scissors":

            playGame(choice);
            break;
        case "playAgain":
            document.getElementsByClassName("shadow-back")[0].classList.toggle("show");
            [humanScore, computerScore, playedRound, finished, numberRound] = prepareGame();
            break;
    }

}
)