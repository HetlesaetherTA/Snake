function keyPressed() {
  switch(keyCode) {
    case UP_ARROW:
      game.moveUP()
      break;
    case DOWN_ARROW:
      game.moveDOWN()
      break;
    case LEFT_ARROW:
      game.moveLEFT()
      break;
    case RIGHT_ARROW:
      game.moveRIGHT()
      break;
    case SHIFT:
      game.setForceEat()
    default:
  }
}