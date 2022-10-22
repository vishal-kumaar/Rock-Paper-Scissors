const userScore = document.getElementById("userScoreVal");
const compScore = document.getElementById("compScoreVal");
const userResult = document.getElementById("result-user-stat");
const computerResult = document.getElementById("result-comp-stat");
const result = document.getElementById("result-final-stat");
const choices = document.getElementsByClassName("choice")
// const rock = document.getElementById("r");
// const paper = document.getElementById("p");
// const scissor = document.getElementById("s");

function computerTurn(){
    let arr = ["r", "p", "s"];
    let randNum = Math.floor(Math.random() * 3);
    return arr[randNum];
}

function selectWinner(userChoice, compChoice){
    if (userChoice == "r" && compChoice == "r"){
        return 0;
    }
    else if (userChoice == "r" && compChoice == "p"){
        return -1;
    }
    else if (userChoice == "r" && compChoice == "s"){
        return 1;
    }
    else if (userChoice == "p" && compChoice == "r"){
        return 1;
    }
    else if (userChoice == "p" && compChoice == "p"){
        return 0;
    }
    else if (userChoice == "p" && compChoice == "s"){
        return -1;
    }
    else if (userChoice == "s" && compChoice == "r"){
        return -1;
    }
    else if (userChoice == "s" && compChoice == "p"){
        return 1;
    }
    else {
        return 0;
    }
}

Array.from(choices).forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.id;
        let compChoice = computerTurn();
        if (userChoice == "r"){
            userResult.innerText = "User: Rock";
        }
        else if (userChoice == "p"){
            userResult.innerText = "User: Paper";
        }
        else{
            userResult.innerText = "User: Scissor";
        }

        if (compChoice == "r"){
            computerResult.innerText = "Computer: Rock";
        }
        else if (compChoice == "p"){
            computerResult.innerText = "Computer: Paper";
        }
        else{
            computerResult.innerText = "Computer: Scissor";
        }
    
        let winner = selectWinner(userChoice, compChoice);
        if (winner == 1){
            userScore.textContent = Number(userScore.textContent) + 1;
            result.innerText = "User";
        }
        else if (winner == -1){
            compScore.textContent = Number(userScore.textContent) + 1;
            result.innerText = "Computer";
        }
        else{
            result.innerText = "Tie";
        }
    })
})