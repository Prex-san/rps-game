function playRound(computerSelection, playerSelection){
    // 0 - Rock , 1 - Paper , 2 - Scissors
    // Result = 0 - Draw , 1 - Player win , 2 - Computer win
    let result = 0;
    let choicePlayer,choiceComputer;
    switch(playerSelection){
        case "rock":
            playerSelection = 0;
            choicePlayer = "rock";
            break;
        case "paper":
            playerSelection = 1;
            choicePlayer = "paper";
            break;
        case "scissors":
            playerSelection = 2;
            choicePlayer = "scissors";
            break;
        default:
            return -1;
    }
    if(computerSelection === 0){
        choiceComputer = "rock";
        switch(playerSelection){
            case 0:
                result = 0;
                break;
            case 1:
                result = 1;
                break;
            case 2:
                result = 2;
                break;
        }
    }
    else if(computerSelection === 1){
        choiceComputer = "paper";
        switch(playerSelection){
            case 0:
                result = 2;
                break;
            case 1:
                result = 0;
                break;
            case 2:
                result = 1;
                break;
        }
    }
    else if(computerSelection === 2){
        choiceComputer = "scissors";
        switch(playerSelection){
            case 0:
                result = 1;
                break;
            case 1:
                result = 2;
                break;
            case 2:
                result = 0;
                break;
        }
    }
    console.log("The computer played : "+choiceComputer+" and you played : "+choicePlayer);
    return result; 
}
function getComputerChoice(){
    return Math.floor(Math.random()*3);
}
let computerSelection = getComputerChoice();
let playerSelection = prompt("Enter your choice").toLowerCase();
let result = playRound(computerSelection,playerSelection);
if(result == 0){
    console.log("The game is a tie.");
}
else if(result==1){
    console.log("The player wins!");
}
else if(result==2){
    console.log("The computer wins!");
}
else{
    console.log("Enter a vaild input, you imbecile");
}


