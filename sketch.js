var canvas, backgroundImage;
var trackImage,P1I,P2I,P3I,P4I;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;


function preload(){
  P1I=loadImage("car1.png")
  P2I=loadImage("car2.png")
  P3I=loadImage("car3.png")
  P4I=loadImage("car4.png")
  trackImage=loadImage("track.jpg")
}




function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end()
  }
}
