let audio;
let colours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedColour;
let userInput = [];
let playerChoosenColour;
let gamestarted = false;
let level;

$(document).keypress(function () {
    if (!gamestarted) {
        $("h1").text("Level 1");
        gamestarted = true;
    }
});

$(".btn").click(function (Event) {
    userClickedColour = Event.target.id;
    userInput.push(userClickedColour);
    playSound(userClickedColour);
    console.log(Event.target.id);
});

// FUNKTION SECTION //

function generatedColour() {
    let randomColour = Math.floor(Math.random() * 4);
    gamePattern.push(colours[randomColour]);
    return colours[randomColour];
}

function nextLevel() {
    level++;
    let repeater = level;
    while (repeater > 0) {
        $(`.${generatedColour()}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        audio = new Audio(`sounds/${generatedColour()}`);
        audio.play();
        $("h1").text("Level 1");
        repeater--;
    }
}

function playSound(pickedColour) {
    switch (pickedColour) {
        case "red":
            audio = new Audio("sounds/red.mp3")
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

function checkAnswer(userAwnser) {
    for(let i = unserInput.length; i < unserInput; i--){
        if (unserInput[i] == gamePattern[i]) {
            nextLevel();
        } else {
            $("body").addClass("game-over").delay(200).removeClass("game-over");
            $("h1").text("Game Over, Press Any Key to Restart");
            audio.src("sounds/wrong.mp3");
            audio.play();
            gamestarted = false;
            break;
        }
    }
}