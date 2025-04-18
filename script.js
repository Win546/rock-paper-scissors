console.log("ciao")


function getComputerChoice(){
    console.log(Math.random());
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

let computerChoice = getComputerChoice();
let userChoiceRaw= prompt("Make a choice")
let userChoice=userChoiceRaw.toLowerCase();
let result="";
if(userChoice == "paper"){
    result= computerChoice == "paper" ? "you draw" : computerChoice == "rock" ? "you win" : "you lose" ;
} else if(userChoice == "rock"){
    result= computerChoice == "rock" ? "you draw" : computerChoice == "siccsors" ? "you win" : "you lose" ;
} else{
    result= computerChoice == "scissors" ? "you draw" : computerChoice == "paper" ? "you win" : "you lose" ;
}

console.log("the computer played " +computerChoice+ " so " +result);