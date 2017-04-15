//Background Image Setting
var bgImg = document.createElement("img");
var enemyImg = document.createElement("img");
var towerBtn = document.createElement("img");
bgImg.src="images/map.png"
enemyImg.src="images/rukia.gif"
towerBtn.src="images/tower-btn.png"
var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");

//Enemy Setting
var enemy ={
 x:96,
 y:448
}

function draw(){
 ctx.drawImage(bgImg,0,0) 
 ctx.drawImage(enemyImg,enemy.x,enemy.y) 
 ctx.drawImage(towerBtn,560,432,48,48)
}

setInterval(draw,16);
