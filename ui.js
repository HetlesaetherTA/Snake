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

    this.drawTitle = function() {
        push()
        textFont(title)
        textAlign(CENTER,TOP)
        fill(255)
        stroke(255)
        textSize(72)
        text("Snake.ai", width / 2, 20)
        line(width / 2 - 90, 120, width / 2 + 90, 120)
        pop()
    }

    this.drawScore = function(int, bool) {
        push()
        fill(255)
        textSize(48)

        if (int < 10) {
            text(int, width / 2 - 12, 180)
        } else if (int < 100) {
            text(int, width / 2 - 27, 180)
        } else if (int < 1000) {
            text(int, width / 2 - 40, 180)
        } 
        pop()
    }

}