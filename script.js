console.log("ciao")


function getComputerChoice(){
    console.log(Math.random());
    let random=Math.random();
    let choice=""
    if(random < 0.33 ){
choice="Rock";
    } else if (random >= 0.33 && random <= 0.66){
        choice="Paper";
    } else {
        choice="Scissors";
        }
        return choice;
}

let computerChoice=getComputerChoice();