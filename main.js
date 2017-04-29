//Background Image Setting
var bgImg = document.createElement("img");
var enemyImg = document.createElement("img");
var towerBtn = document.createElement("img");
var towerImg = document.createElement("img");

bgImg.src="images/map3.png"
enemyImg.src="images/rukia.gif"
towerBtn.src="images/tower-btn.png"
towerImg.src="images/tower.png"

var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
var isBuilding = false ;
var FPS = 60;

//Enemy Setting
var enemy = {
 x:96,
 y:448,
 speedX:0,
 speedY:-64,
 pathDes:0,
 move: function(){
  if(isCollided(enemyPath[this.pathDes].x,[this.pathDes].y,this.x,this.y,64/FPS,64/FPS)){
  }
  else{
     this.x=this.x+this.speedX/FPS;
     this.y=this.y+this.speedY/FPS;
  }
 } 
};
var enemyPath=[
 {x:96,y:380},
 {x:32,y:380},
 {x:32,y:28},
 {x:160,y:28},
 {x:160,y:412},
 {x:288,y:412},
 {x:288,y:28},
 {x:416,y:28},
 {x:416,y:412},
 {X:548,y:412},
 {x:548,y:92}
 ]

//Cursor Setting
var cursor = {
 x:0,
 y:0
};

var tower = {
 
};

$("#game-canvas").on("mousemove",function(event){
 cursor.x=event.offsetX
 cursor.y=event.offsetY
})
$("#game-canvas").on("click",function(event){
 if(isCollided(cursor.x,cursor.y,345,432,48,48)){
    isBuilding=true;
    }
    else if(isBuilding&&!isCollided(cursor.x,cursor.y,345,432,48,48)){
     tower.x = cursor.x-cursor.x%32;
     tower.y = cursor.y-cursor.y%32;
    }
    else{
    isBuilding=false;
    }
})

function draw(){
 enemy.move();
 ctx.drawImage(bgImg,0,0) ;
 ctx.drawImage(enemyImg,enemy.x,enemy.y) ;
 ctx.drawImage(towerBtn,345,432,48,48);
 if(isBuilding==true){
    ctx.drawImage(towerImg,cursor.x,cursor.y)
}
 ctx.drawImage(towerImg,tower.x,tower.y)
}

setInterval(draw,1000/FPS);

function isCollided(pointX, pointY, targetX, targetY, targetWidth, targetHeight) {
    if(     pointX >= targetX
        &&  pointX <= targetX + targetWidth
        &&  pointY >= targetY
        &&  pointY <= targetY + targetHeight
    ){
        return true;
    } else {
        return false;
    }
}

