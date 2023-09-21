var gameState
var database

function setup(){
  createCanvas(600,600)
  database = firebase.database()
  game = new Game()
  game.getState()
  console.log(gameState)
  game.start()

 
}

function draw(){
  background("white")

  if(gameState === 1){
    gameState.play()
  }
}