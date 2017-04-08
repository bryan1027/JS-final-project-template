//Background Image Setting
var BIS = document.createElement("img");
BIS.src="images/map.png"
var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");

function draw(){
 ctx.drawImage(BIS,0,0) 
}

setTimeout(draw,1000);
