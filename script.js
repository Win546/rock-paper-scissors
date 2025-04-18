let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    
    let random=Math.random();
    let choice=""
    if(random < 0.33 ){
choice="rock";
    } else if (random >= 0.33 && random <= 0.66){
        choice="paper";
    } else {
        choice="scissors";
        }
        return choice;
}

let computerSelection = getComputerChoice();
let userChoiceRaw= prompt("Make a choice");
let userChoice=userChoiceRaw.toLowerCase();


function playRound(userChoice){
    let result="";
    if(userChoice == "paper"){
        result= computerSelection == "paper" ? "you draw" : computerSelection == "rock" ? "you win" : "you lose" ;
    } else if(userChoice == "rock"){
        result= computerSelection == "rock" ? "you draw" : computerSelection == "scissors" ? "you win" : "you lose" ;
    } else if(userChoice == "scissors"){
        result= computerSelection == "scissors" ? "you draw" : computerSelection == "paper" ? "you win" : "you lose" ;
    } else {
        result = "you didn't make a valid choice"
    }
    return result;
}
let humanSelection=playRound(userChoice);

console.log("the computer played " +computerChoice+ " and " +humanSelection);