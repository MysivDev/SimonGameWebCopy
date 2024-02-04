let audio;
let level = 0;
let buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour = buttonColours[nextSequence()];
let userChosenColour;
let userClickedPattern = [];
let gamePattern = randomChosenColour;
let gameStarted = false;



$(document).keypress(function (){
    nextSequence();
    gameStarted = true;
});



$('.btn').on('click', function (){
    userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress();
});
$(`#${randomChosenColour}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
    playSound(buttonColours[randomNumber]);
    level++;
    $('#level-title').text(`Level ${level}`);
    return randomNumber;
}

function playSound(colour){
    audio = new Audio(`sounds/${colour}.mp3`);
    audio.play();
}

function animatePress(currentColour){
    $(currentColour).on('click', function () {
        $(currentColour).addClass('pressed').delay(100).removeClass('pressed');        
    });
}