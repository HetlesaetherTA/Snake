function UI() {
    let title = loadFont("./fonts/Roltand.otf")
    let img = loadImage("./img/Loading.jpg")
    this.startingScreen = function(gameWidth, gameHeight) {
        push()
        translate(5,height - gameHeight - 5)
        
        image(img,0,0)
        noFill()
        
        pop()
    }

    this.draw = function() {
        push()
        textFont(title)
        textAlign(CENTER,TOP)
        fill(255)
        textSize(72)
        text("Snake.ai", width / 2, 20)
        pop()
    }

}