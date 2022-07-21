function keyPressed() {
  switch(keyCode) {
    case UP_ARROW:
      snake.moveUP()
      break;
    case DOWN_ARROW:
      snake.moveDOWN()
      break;
    case LEFT_ARROW:
      snake.moveLEFT()
      break;
    case RIGHT_ARROW:
      snake.moveRIGHT()
      break;
    case SHIFT:
      snake.forceEat()
    default:
  }
}