let snake, tile;

function setup() {
  createCanvas(400, 400);
  frameRate(10)
  tile = width/17
  snake = new Snake(tile)
}

function draw() {
  background(220);
  grid()

  if (snake.checkDeath()) {
    snake.dead()
  }

  snake.update()

  push()
  fill(240,150,45)
  rect(snake.x, snake.y, tile, tile)
  pop()

  // push()
  // fill(240,100,20)
  // for(let i = 0; i < snake.tail)
  // rect(snake.)

  push()
  fill(240,100,20)

  for (let i = 0; i < snake.tail.length; i++) {
    try {
    rect(snake.tail[i].x, snake.tail[i].y,tile,tile)
    }
    catch {

    }
  }
  pop()

  push()
  fill(255,0,0)
  rect(snake.appleX, snake.appleY, tile, tile)
  pop()
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    if (snake.y_vol == 0 || snake.tail.length === 0) {
      snake.x_vol = 0
      snake.y_vol = -1
    }
  } else if (keyCode === DOWN_ARROW) {
      if (snake.y_vol == 0 || snake.tail.length === 0) {
        snake.x_vol = 0
        snake.y_vol = 1
    }    
  } else if (keyCode === LEFT_ARROW) {
      if (snake.x_vol == 0 || snake.tail.length === 0) {
        snake.x_vol = -1
        snake.y_vol = 0
    }
  } else if (keyCode === RIGHT_ARROW) {
      if (snake.x_vol == 0 || snake.tail.length === 0) {
        snake.x_vol = 1
        snake.y_vol = 0
    }
  }
}

function grid() {
  for (let x = 0; x < width / tile; x++) {
    line(x * tile, 0, x * tile, height)
  }
  for (let y = 0;y < height / tile; y++) {
    line(0,y * tile,width,y*tile)
  }
}

