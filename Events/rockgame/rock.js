    let userscore = 0;
    let compscore = 0;

    const choices = document.querySelectorAll(".choice");
    const userScorePara = document.querySelector("#user-score");
    const compScorePara = document.querySelector("#comp-score");

    const showWinner = (userWin, userChoice, compChoice) => {
        if (userWin) {
        userscore ++;
        userScorePara.innerText = userscore ;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        } else {
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        }
    };

    const drawGame = () => {
    // console.log("game was Draw");
    msg.style.backgroundColor = "#081b31";
    };

    const gencomputerChoise = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
    };

    const playGame = (userChoice) => {
    // console.log("User Choice = ", userChoice);
    const compChoice = gencomputerChoise();
    // console.log("comp Choice =", compChoice);

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
        //rock, scissors
        userWin = compChoice === "scissors" ? false : true;
        } else {
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    };

    choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("your Choise was Click", userChoice)
        playGame(userChoice);
    });
    });
