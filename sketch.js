let game, settings, ui;

function setup() {
  createCanvas(810, 610);
  // settings sliders are rendered automatically by Settings() function
  settings = new Settings()
  game = new Game()
  ui = new UI()
  frameRate(settings.speed())
}

function draw() {
  background(68,155,88);
  ui.startingScreen(game.getGameWidth(), game.getGameHeight())
  ui.drawTitle()
  settings.draw()
  ui.drawScore(game.score())
  
  if (game.running()) {
    game.draw()
    game.update()
    
    if (game.dead()) {
      game.restart()
    }
  } else {
    game.updateSettings(settings.speed(),settings.size())
  }
  
}