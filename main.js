//Background Image Setting
var bgImg = document.createElement("img");
var enemyImg = document.createElement("img");
var towerBtn = document.createElement("img");
var towerImg = document.createElement("img");
var HP = 100;

bgImg.src="images/map3.png"
enemyImg.src="images/rukia.gif"
towerBtn.src="images/tower-btn.png"
towerImg.src="images/tower.png"

var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
var isBuilding = false ;
var FPS = 60;
var clock = 0;
ctx.fillStyle = "white"
ctx.font = "24px Arial"

//Enemy Setting

function Enemy(){
 this.x = 96;
 this.y = 448;
 this.speedX = 0;
 this.speedY = -64;
 this.pathDes = 10;
 
 this.hp = 10;
 
 this.move = function(){
  if(isCollided(enemyPath[this.pathDes].x,enemyPath[this.pathDes].y,this.x,this.y,64/FPS,64/FPS)){
   if(this.pathDes===enemyPath.length-1){
    this.hp = 0;
    HP = HP - 10;
   }
   this.x = enemyPath[this.pathDes].x;
   this.y = enemyPath[this.pathDes].y;
   this.pathDes = this.pathDes + 1;
   console.log(enemyPath[this.pathDes].x);
   console.log(enemyPath[this.pathDes].y);
   
   if(enemyPath[this.pathDes].x > this.x){
      this.speedX=64;
      this.speedY=0 ;
      }
   if(enemyPath[this.pathDes].x < this.x){
      this.speedX=-64 ;
      this.speedY=0 ;
      }
   if(enemyPath[this.pathDes].y > this.y){
      this.speedX=0 ;
      this.speedY=64 ;
      }
   if(enemyPath[this.pathDes].y < this.y){
      this.speedX=0 ;
      this.speedY=-64 ;
      }
  }
  else{
     this.x=this.x+this.speedX/FPS;
     this.y=this.y+this.speedY/FPS;
  }
 } 
};

var enemies = [];

var enemyPath=[
 {x:96,y:384},
 {x:32,y:384},
 {x:32,y:32},
 {x:160,y:32},
 {x:160,y:416},
 {x:288,y:416},
 {x:288,y:32},
 {x:416,y:32},
 {x:416,y:416},
 {x:548,y:416},
 {x:548,y:96}
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
 ctx.drawImage(bgImg,0,0) ;
 ctx.fillText("HP:"+HP,20,20)
  if(clock%80==0){
  var newEnemy = new Enemy();
  enemies.push(newEnemy);
 }
 for(var i = 0 ;i < enemies.length;i++){
  
  if(enemies[i].hp<1){
   enemies.splice(i,1);
  }
  else{
  enemies[i].move();
  ctx.drawImage(enemyImg,enemies[i].x,enemies[i].y) ;
  }
 }
 ctx.drawImage(towerBtn,345,432,48,48);
 if(isBuilding==true){
    ctx.drawImage(towerImg,cursor.x,cursor.y)
}
 clock = clock+1;
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

