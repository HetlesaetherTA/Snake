let game, settings, ui;

function setup() {
  createCanvas(800, 600);
  settings = new Settings()
  game = new Game()
  ui = new UI()
  frameRate(settings.speed())
}

function draw() {
  background(52);

  ui.startingScreen()
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