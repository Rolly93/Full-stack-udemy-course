var bottonColours= ["red","blue","green","yellow"];
var userClickedPattern = [];
var level =0;
var gamePattern = [];

$(document).keypress(function (e) {
    nextSequence();
});

//my random sequence
function nextSequence(){

    userClickedPattern = [];
    level++;
    $("#level-title").text("level "+level) ;
 
    var randomNumber = Math.floor(Math.random()*4);
    var randomChoseColours = bottonColours[randomNumber];
    gamePattern.push(randomChoseColours);
    animation(randomChoseColours);
    Sound(randomChoseColours);

}

//click color choose
$(".btn").click(function () { 

    var selectedColor =$(this).attr("id");
    //se almacena en un arreglo el color almacenado
    userClickedPattern.push(selectedColor);
    Sound(selectedColor);
    animation(selectedColor);

    checkAnswer(userClickedPattern.length -1);
});

function Sound(myColor) {
    const color = new Audio(`./sounds/${myColor}.mp3`);
    color.play();
}

//funcion para hace efecto de boton presioando
function animation(myColor) {
$(`.${myColor}`).addClass("pressed");

setTimeout(() => {$(`.${myColor}`).removeClass("pressed");}, 100);
  }
  

  function checkAnswer(currentLevel){
if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    $('h1').text("correcst");
if (gamePattern.length === userClickedPattern.length) {

    setTimeout(() => { nextSequence()},1000);
    $('h1').text("DONE");
}
} else {
    $('h1').text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over")
    const wrong = new Audio ("./sounds/wrong.mp3");
    setTimeout(() => { $("body").removeClass("game-over")}, 200);
    wrong.play();
    startOver()    
}
  }
  function startOver() {
    userClickedPattern = [];
    gamePattern = [];
    level =0;
  } 