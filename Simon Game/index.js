var levelCount=0;
var simon = [];
var user = [];
var buttonId = ["green","red","yellow","blue"];
var buttonSound = ["green.mp3","red.mp3","yellow.mp3","blue.mp3"];
var started = false;

$("#playAgain").hide();

$(document).on("keypress",function() {
    if (!started) {
      $("#level-title").text("Level " + levelCount);
      nextSequence();
      started = true;
    }
  });

  $(".btn").on("click",function(){
    var index = buttonId.indexOf($(this).attr("id"));
    user.push(index);
    playButton(index);
    checkAnswer(user.length-1);
});

function nextSequence(){
    $("#playAgain").hide();
    user = [];
    levelCount++;
    $("#level-title").text("Level"+" "+levelCount);
    var num = Math.floor(Math.random()*4);
    simon.push(num);
    playButton(num);
}
  

function checkAnswer(currentLevel){
    if (simon[currentLevel] === user[currentLevel]) {
        if (user.length === simon.length){
          setTimeout(function () {
            nextSequence();
          }, 1000);
        }
    }    
    else {
        $("body").addClass("game-over");
        var gameOverMusic = new Audio("sounds/wrong.mp3");
        gameOverMusic.play();
        setTimeout(function(){$("body").removeClass("game-over");},200);
        $("#level-title").text("Game Over");
        $("#playAgain").show();
        startOver();
    }
}

function playButton(num){
    $("#"+buttonId[num]).addClass("pressed");
    var audio = new Audio("sounds/"+buttonSound[num]);
    audio.play();
    setTimeout(function(){$("#"+buttonId[num]).removeClass("pressed");},100);
}

 
function startOver() {
    levelCount = 0;
    simon = [];
    started = false;
}
