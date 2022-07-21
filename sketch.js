let snake, scl;
const len = 21

function setup() {
  createCanvas(400, 400);
  frameRate(10)
  scl = width/len
  snake = new Snake(scl, len)
}

function draw() {
  background(51);
  
  
  snake.update()
  
  if (snake.dead()) {
    snake.restart()
  }
  
  
  snake.drawSnake()
}