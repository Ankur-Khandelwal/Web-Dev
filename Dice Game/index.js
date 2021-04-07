var randomNum1,randomNum2;
randomNum1 = Math.floor(Math.random() * 6)+1;
randomNum2 = Math.floor(Math.random() * 6)+1;

document.querySelector(".dicep1 img").src="images/dice"+randomNum1+".png";
document.querySelector(".dicep2 img").src="images/dice"+randomNum2+".png";

if(randomNum1>randomNum2){
    document.querySelector(".p1-wins").innerHTML="Player 1 Wins";
    document.querySelector(".dicep1 p").innerText="👑";
    document.querySelector(".dicep1 p").style.fontSize="5rem";
    document.querySelector(".dicep1 p").style.margin="0";
}
else if(randomNum1<randomNum2){
    document.querySelector(".p2-wins").innerHTML="Player 2 Wins";
    document.querySelector(".dicep2 p").innerText="👑";
    document.querySelector(".dicep2 p").style.fontSize="5rem";
    document.querySelector(".dicep2 p").style.margin="0";
}
else{
    document.querySelector(".draw").style.visibility="visible";
}