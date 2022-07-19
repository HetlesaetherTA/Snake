

function keyPressed() {
    if (keyCode === UP_ARROW) {
      if (snake.prevDirection != "HORIZONTAL" || snake.total === 0) {
        snake.x_vol = 0
        snake.y_vol = -1
      }
    } else if (keyCode === DOWN_ARROW) {
        if (snake.prevDirection != "HORIZONTAL" || snake.total === 0) {
          snake.x_vol = 0
          snake.y_vol = 1
      }    
    } else if (keyCode === LEFT_ARROW) {
        if (snake.prevDirection != "VERTICAL"|| snake.total === 0) {
          snake.x_vol = -1
          snake.y_vol = 0
      }
    } else if (keyCode === RIGHT_ARROW) {
        if (snake.prevDirection != "VERTICAL" || snake.total === 0) {
          snake.x_vol = 1
          snake.y_vol = 0
      }
    }
}