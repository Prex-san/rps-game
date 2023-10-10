let playButton = document.getElementById("switch");
let options = document.querySelectorAll(".options > div");
let playerMenu = document.querySelector(".player-menu");
let playerResult = document.querySelector(".player-result");
let choice;
let playerMessage = document.querySelector(".player-message");
let playerMessageResult = document.querySelector(".player-result-message");
let computerMenu = document.querySelector(".computer-menu");
let computerResult = document.querySelector(".computer-result");
let computerMessage = document.querySelector(".computer-message");
let computerMessageResult = document.querySelector(".computer-result-message");
let playerSelection;
let choiceScreen = document.querySelectorAll(".choice-screen");
let playerImage = document.getElementById("player-image-choice");
let computerImage = document.getElementById("computer-image-choice");
let choicePlayer,choiceComputer;
let playerScore = 0, computerScore = 0;
let playerScorePlaceholder = document.getElementById("player-score");
let computerScorePlaceholder = document.getElementById("computer-score");
const finalScore = 5;
let finalScreen = document.querySelector(".final-screen");
let playerScoreFinal = document.getElementById("player-score-fin");
let computerScoreFinal = document.getElementById("computer-score-fin");
let game = document.querySelector("section");
let anotherRound = document.getElementById("another-round");

function playRound(computerSelection, playerSelection){
    // 0 - Rock , 1 - Paper , 2 - Scissors
    // Result = 0 - Draw , 1 - Player win , 2 - Computer win
    let result = 0;
    console.log(computerSelection, playerSelection);
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
    return result; 
}
function getComputerChoice(){
    return Math.floor(Math.random()*3);
}
function displayResult(result){
    switch(result){
        case 0:
            playerMessageResult.textContent = "The game is a draw";
            computerMessageResult.textContent = "The game is a draw";
            break;
        case 1:
            playerMessageResult.textContent = "You Win! 😆";
            computerMessageResult.textContent = "The computer lost!";
            break;
        case 2:
            playerMessageResult.textContent = "You lost 😭";
            computerMessageResult.textContent = "The computer beat you!";   
            break; 
    }
}
function getLink(choice){
    if(choice === 0) return "./res/stone.gif";
    else if(choice === 1) return "./res/paper.gif";
    else return "./res/scissor.gif";
}
function setChoiceScreen(computerChoice,playerChoice){
    computerImage.setAttribute("src",getLink(computerChoice));
    playerImage.setAttribute("src",getLink(playerChoice));
    playerMessage.textContent = choicePlayer.toUpperCase();
    computerMessage.textContent = choiceComputer.toUpperCase();
}

let buttonState = 0;
for(let i = 0;i<options.length;i++){
    options[i].addEventListener('click',function(){
        let result;
        for(let i=0;i<choiceScreen.length;i++) choiceScreen[i].classList.remove("hidden");
        playerMenu.classList.add("hidden");
        computerMenu.classList.add("hidden");
        buttonState = 1;
        if(options[i].classList.contains("rock")){
            choice = "rock";
            playerSelection = 0;
        }
        else if(options[i].classList.contains("scissors")){ 
            choice = "scissors";
            playerSelection = 2;
        }
        else{
            choice = "paper";
            playerSelection = 1;
        }
        playButton.disabled = false;
        let computerChoice = getComputerChoice();
        result = playRound(computerChoice,choice);
        setChoiceScreen(computerChoice,playerSelection);
        if(result == 1) playerScore++;
        else if(result == 2) computerScore++;
        displayResult(result);
    });        
}

playButton.disabled = true;
//0 - menu 1 - choice screen 2 - result
playButton.addEventListener('click',function(){
    if(buttonState === 1){
        for(let i=0;i<choiceScreen.length;i++) choiceScreen[i].classList.add("hidden");
        playerResult.classList.remove("hidden");
        computerResult.classList.remove("hidden");
        playButton.setAttribute("value","Play Again");
        playerScorePlaceholder.textContent = playerScore;
        computerScorePlaceholder.textContent = computerScore;
        buttonState = 2;
    }
    else if(buttonState === 2){
        if(!(playerScore >= finalScore) && !(computerScore >= finalScore)){
            playerResult.classList.add("hidden");
            computerResult.classList.add("hidden");
            playerMenu.classList.remove("hidden");
            computerMenu.classList.remove("hidden");
            playButton.disabled = true;
            playButton.setAttribute("value","Next");
        }
        else{
            finalScreen.classList.remove("hidden");
            game.classList.add("hidden");
            playerScoreFinal.textContent = playerScore;
            computerScoreFinal.textContent = computerScore;
            document.querySelector(".final-message").textContent = (playerScore === finalScore) ? "The player wins the round" : "The computer wins the round";

        }
    }
});
anotherRound.addEventListener('click', function(){
    playerScore = 0;
    computerScore = 0;
    playerScorePlaceholder.textContent = playerScore;
    computerScorePlaceholder.textContent = computerScore;
    finalScreen.classList.add("hidden");
    game.classList.remove("hidden");
    playerResult.classList.add("hidden");
    computerResult.classList.add("hidden");
    playerMenu.classList.remove("hidden");
    computerMenu.classList.remove("hidden");
    playButton.disabled = true;
    playButton.setAttribute("value","Next");
});

