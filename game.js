var buttons = ["rock", "paper", "scissor"];

var computerScore = 0;
var userScore = 0;
var computer = "";
var user = "";
let tile = $(".xz");

const playWon = ()=>{
    let audio = new Audio(`sounds/win.mp3`);
    audio.play();
};

const playLose = ()=>{
    let audio = new Audio(`sounds/lose.wav`);
    audio.play();
};

const winLose = function (user) {
    let rndm = Math.floor(Math.random() * 3);
    computer = buttons[rndm];
    if (computer === "rock") {
        if (user === "paper") {
            // ! Increasing User Score 
            userScore++;
            
            $("main").addClass("win");
            setTimeout(() => {
                $("main").removeClass("win");
            }, 2000);
            playWon();
        } else if (user === "scissor") {
            // ! Increasing Computers Score
            computerScore++;
            
            $("main").addClass("lose");
            setTimeout(() => {
                $("main").removeClass("lose");
            }, 2000);
            playLose();
        } else if (user === "rock") {
            $("main").addClass("draw");
            setTimeout(() => {
                $("main").removeClass("draw");
            }, 2000);
        }
    } else if (computer === "paper") {
        if (user === "scissor") {
            // ! Increasing User Score 
            userScore++;
            
            
            $("main").addClass("win");
            setTimeout(() => {
                $("main").removeClass("win");
            }, 2000);
            playWon();
        } else if (user === "rock") {
            // ! Increasing Computers Score
            computerScore++;
            
            $("main").addClass("lose");
            setTimeout(() => {
                $("main").removeClass("lose");
            }, 2000);
            playLose();
        } else if (user === "paper") {
            $("main").addClass("draw");
            setTimeout(() => {
                $("main").removeClass("draw");
            }, 2000);
        }
    } else if (computer === "scissor") {
        if (user === "rock") {
            // ! Increasing User Score 
            userScore++;
            
            $("main").addClass("win");
            setTimeout(() => {
                $("main").removeClass("win");
            }, 2000);
            playWon();
        } else if (user === "paper") {
            // ! Increasing Computers Score
            computerScore++;
            
            $("main").addClass("lose");
            setTimeout(() => {
                $("main").removeClass("lose");
            }, 2000);
            playLose();
        } else if (user === "scissor") {
            $("main").addClass("draw");
            setTimeout(() => {
                $("main").removeClass("draw");
            }, 2000);
        }
    }
}

const score = function (computer, user) {
    $("#computerScore").html(`Computer : ${computer}`);
    $("#userScore").html(`User : ${user}`);
}

for (let i = 0; i < tile.length; i++) {
    tile[i].addEventListener("click", function () {
        var user = this.name;
        setTimeout(() => {
            winLose(user);
            score(computerScore, userScore);
        }, 500);
    });
}