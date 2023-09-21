class Game {
  constructor(){

  }
  async getState(){
    database.ref("gameState").on("value",(data)=>{
      console.log(data.val())
      gameState = data.val()
      console.log(gameState)
    })
    console.log(gameState)
  }

  start(){

  }
  play(){

  }

}

