let msg = document.querySelector("#msg");
let choices = document.querySelectorAll(".choice");

let userRock = document.querySelector("#rock");
let userPaper = document.querySelector("#paper");
let userScissor = document.querySelector("#scissor");

let compRock = document.querySelector("#comp-rock");
let compPaper = document.querySelector("#comp-paper");
let compScissor = document.querySelector("#comp-scissor");

let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");
let us = 0;
let cs = 0;

const genCompChoice = (c) => {
  const opt = ["rock", "paper", "scissor"];
  return opt[c];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userChoice === "paper" && compChoice === "rock") {
    userPaper.style.backgroundColor = "green";
    compRock.style.backgroundColor = "red";
  } else if (userChoice === "rock" && compChoice === "scissor") {
    userRock.style.backgroundColor = "green";
    compScissor.style.backgroundColor = "red";
  } else if (userChoice === "scissor" && compChoice === "paper") {
    userScissor.style.backgroundColor = "green";
    compPaper.style.backgroundColor = "red";
  } else if (userChoice === "rock" && compChoice === "paper") {
    userRock.style.backgroundColor = "red";
    compPaper.style.backgroundColor = "green";
  } else if (userChoice === "scissor" && compChoice === "rock") {
    userScissor.style.backgroundColor = "red";
    compRock.style.backgroundColor = "green";
  } else {
    userPaper.style.backgroundColor = "red";
    compScissor.style.backgroundColor = "green";
  }

  if (userWin) {
    us++;
    userScore.innerText = us;
    msg.innerText = `You Win! Your ${userChoice} beats Computer's ${compChoice}`;
    msg.style.backgroundColor = "Green";
  } else {
    cs++;
    compScore.innerText = cs;
    msg.innerText = `Computer Win. Computer's ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  let c = Math.floor(Math.random() * 3);
  let compChoice = genCompChoice(c);

  if (userChoice === compChoice) {
    if (userChoice === "paper" && compChoice === "paper") {
      userPaper.style.backgroundColor = "black";
      compPaper.style.backgroundColor = "black";
    } else if (userChoice === "rock" && compChoice === "rock") {
      userRock.style.backgroundColor = "black";
      compRock.style.backgroundColor = "black";
    } else {
      userScissor.style.backgroundColor = "black";
      compScissor.style.backgroundColor = "black";
    }

    //draw
    msg.innerText = "Draw. Play again.";
    msg.style.backgroundColor = "black";
  } else {
    userWin = true;
    if (userChoice === "rock") {
      //paper, scissor
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock, scissor
      userWin = compChoice === "rock" ? true : false;
    } else {
      // rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    // User 
    userRock.style.backgroundColor = "transparent";
    userPaper.style.backgroundColor = "transparent";
    userScissor.style.backgroundColor = "transparent";

    // Comp
    compRock.style.backgroundColor = "transparent";
    compPaper.style.backgroundColor = "transparent";
    compScissor.style.backgroundColor = "transparent";
    
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
