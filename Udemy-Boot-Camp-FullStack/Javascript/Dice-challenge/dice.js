
    var random1 = `./images/dice${Math.floor(Math.random()*6)+1}.png`;
     var random2 =  `./images/dice${Math.floor(Math.random()*6)+1}.png`;
     
if (random1 > random2) {
    document.querySelector("h1").innerText="Player 1 Wins!";
    
} else if ( random2>random1)
{
    document.querySelector("h1").innerText = "Player 2 Wins!";
}else {
    document.querySelector("h1").innerText= "Rresh Me Again."
}
document.querySelector("img[class = 'img1']").setAttribute("src",random1);
document.querySelector("img[class = 'img2']").setAttribute("src",random2);

   