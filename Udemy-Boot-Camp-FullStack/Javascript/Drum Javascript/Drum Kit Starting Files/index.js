
addEventListener("keydown",function(event){
    
  sound(event.key);
  buttonAnimation(event.key);
 });

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click",function () {
  
var buttnInnerHTML = this.innerHTML;
sound(buttnInnerHTML);
buttonAnimation(buttnInnerHTML);

}); 
}

function sound(buttnInnerHTML){
    
switch (buttnInnerHTML || keyBoard) {
    case "w": var tom1 = new Audio("./sounds/tom-1.mp3")       
    tom1.play();
    break;
    case"a": var audio = new Audio("./sounds/tom-2.mp3");
    audio.play();
    break;
    case"s": var audio = new Audio("./sounds/tom-3.mp3");
    audio.play();
    break;
    case"d": var audio = new Audio("./sounds/tom-4.mp3");
    audio.play();
    break;
    case"j": var audio = new Audio("./sounds/snare.mp3");
    audio.play();
    break;
    case"k": var audio = new Audio("./sounds/kick-bass.mp3");
    audio.play();
    break;
    case"l": var audio = new Audio("./sounds/crash.mp3");
    audio.play();
    break;


default: console.log(buttnInnerHTML);
    break;
}
}
function buttonAnimation(currentKey){
var myKey=   document.querySelector(`.${currentKey}`);
myKey.classList.add("pressed");

setTimeout(function(){
    myKey.classList.remove("pressed");
} ,100 );

}
//const audio = new Audio("./sounds/tom-1.mp3");
//audio.play();
