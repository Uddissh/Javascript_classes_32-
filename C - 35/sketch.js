var database;
var position;
var canvas, backgroundIMG, gameState = 0, playerCount, form, player, game;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game()
  game.getState();
  game.start();
}

function draw(){
  background("white");
  
}
