let buttonColors = ["red", "blue", "green", "yellow"];
let userClickedPattern = [];
let gamePattern = [];
let audio;
let gameStarted = false;
let level = 0;

$(".btn").click(function (event){
    userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(event.target.id);
    checkAwnser(userClickedPattern.length - 1);
});

$(document).on("keypress", function (){
    if(!gameStarted){
        nextSequence();
        gameStarted = true;
        $("h1").text(`Level ${level}`);
    }else{
        console.log("Game cant start");
    }
});

function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);
    level++;

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    
    $("h1").text(`Level ${level}`);
}

function checkAwnser(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
        }
    }else{
        audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
        console.log("wrong");
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function playSound(btnColor){
    switch(btnColor){
        case "red":
            audio = new Audio("sounds/red.mp3");
            audio.play();
        break;
        case "blue":
            audio = new Audio("sounds/blue.mp3");
            audio.play();
        break;
        case "green":
            audio = new Audio("sounds/green.mp3");
            audio.play();
        break;
        case "yellow":
            audio = new Audio("sounds/yellow.mp3");
            audio.play();
        break;
    }
}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    gameStarted = false;
}