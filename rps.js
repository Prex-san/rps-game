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
function game(numberOfRounds){
    let playerScore = 0, computerScore = 0;
    let currentRound = 1;
    let computerSelection,playerSelection;
    while(playerScore !== numberOfRounds && computerScore !== numberOfRounds){
        computerSelection = getComputerChoice();
        playerSelection = prompt("Enter your choice").toLowerCase();
        let result = playRound(computerSelection,playerSelection);
        if(result == 0){
            console.log("Round "+currentRound+": The round is a tie.");
        }
        else if(result==1){
            console.log("Round "+currentRound+": The player wins!");
            playerScore++;
        }
        else if(result==2){
            console.log("Round "+currentRound+": The computer wins!");
            computerScore++;
        }
        else{
            console.log("Enter a vaild input, you imbecile");
        }
        console.log("Player Score: "+playerScore+" Computer Score: "+computerScore);
        currentRound++;
    }
    if(playerScore === numberOfRounds){
        console.log("The PLAYER wins!");
    }
    else{
        console.log("The COMPUTER wins!");
    }
}
game(5);