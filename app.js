let userscore = 0;
let computerscore = 0;

const buttons = document.querySelectorAll(".select-btn");
const display = document.querySelector("#msg-display");
const usercounter = document.querySelector("#user-counter")
const computercounter = document.querySelector("#computer-counter")
const fulldisplay = document.querySelector(".result-display-screen")


const drawoption = () => {
    display.innerText = "Game Draw !! Play Again!!";
    fulldisplay.style.backgroundColor = "gray";
}
const showWinner = (userWin , userchoice , comchoice) =>{
    if(userWin){
        display.innerText = `You Win !! ${userchoice} beats ${comchoice}`;
        fulldisplay.style.backgroundColor = "green";
        userscore++;
        usercounter.innerText = userscore;
    }else{
        display.innerText =  `You Win !! ${comchoice} beats ${userchoice}`;
        fulldisplay.style.backgroundColor = "red";
        computerscore++;
        computercounter.innerText = computerscore;
    }
}
const comgenchoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
}
const playGame = (userchoice) =>{
    const comChoice = comgenchoice()

    if(userchoice === comChoice){
        drawoption();
    }else{
        let userWin = true;
        if(userchoice === "rock"){
            userWin = comChoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            userWin = comChoice === "scissors" ? false : true;
        }else{
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin , userchoice , comChoice);
    }
}
buttons.forEach((btn) => {
    btn.addEventListener("click", () =>{
        const userchoice = btn.getAttribute("id");
        playGame(userchoice);
    })
})