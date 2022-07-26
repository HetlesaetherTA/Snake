let game, scl;
const len = 21

function setup() {
  createCanvas(800, 600);
  frameRate(10)
  scl = 400/len
  game = new Game(scl, len)
}

function draw() {
  background(52);

  game.update()
  
  if (game.dead()) {
    game.restart()
  }
  
  
  game.draw()
}