function Game() {
    let background = loadImage("img/gameBackground.png")
    this.len = settings.size()
    this.gameWidth = 800
    this.gameHeight = 400
    this.scl = this.gameHeight / this.len
    this.x = int(this.len * (this.gameWidth / this.gameHeight) /2)
    this.y = int(this.len / 2)
    this.x_vol = 0
    this.y_vol = 0
    this.appleX
    this.appleY
    this.tail = []
    this.total = 0
    this.prevDirection;
    this.forceEat = false;
    
    this.updateSettings = function(speed, size) {
        frameRate(speed)
        this.len = size
        this.scl = 400 / size
    }

    this.update = function() {
        this.eat()

        if (!this.appleX) {
            this.generateFoodLoc()
        }
        
        if (this.total === this.tail.length) {
            for (let i = 0; i < this.total - 1; i++) {
                this.tail[i] = this.tail[i+1]
            }
        }
        this.tail[this.total-1] = createVector(this.x, this.y)
        
        this.x += this.x_vol;
        this.y += this.y_vol;
        
        // When players press a horizontal and vertical button at time inverting the vol variable.
        this.avoidVolInverse() 
    }


    this.draw = function() {
        translate(width - this.gameWidth - 5, height - this.gameHeight - 5)
        push()
        stroke(40)
        rect(0, 0, this.gameWidth, this.gameHeight)
        image(background, 0, 0, this.gameWidth, this.gameHeight)
        pop()

        push()
        fill(255)
        rect(this.x * this.scl, this.y * this.scl, this.scl, this.scl)
        for (let i =  0; i < this.total; i++) {
          rect(this.tail[i].x * this.scl, this.tail[i].y * this.scl, this.scl,this.scl)
        }
        pop()
      
        push()
        fill(255,0,100)
        rect(this.appleX* this.scl, this.appleY * this.scl, this.scl, this.scl)
        pop()
    }

    this.running = function() {
        if (this.x_vol != 0 || this.y_vol != 0){
            return true
        }
    }

    this.restart = function() {
        this.x = int(this.len * (this.gameWidth / this.gameHeight) /2)
        this.y = int(this.len / 2)
        this.x_vol = 0
        this.y_vol = 0
        this.total = 0
        this.tail = []
        this.generateFoodLoc()   
    }
    
    this.dead = function() {
        if (this.x < 0 || this.x > this.len * (this.gameWidth / this.gameHeight) - 1) {
            return true
        }
        if (this.y < 0 || this.y > this.len - 1) {
            return true
        }

        for (let i = this.total-1; i >= 0; i--) {
            let pos = this.tail[i]
            if (dist(this.x, this.y, pos.x, pos.y) < 1) {
                return true
            }
        }
        return false
    }

    // this.drawHitbox = function() {
    //     for (let i = this.total-1; i >= 0; i--) {
    //         let pos = this.tail[i]
    //         push()
    //         fill(220,200,200)
    //         rect(pos.x * this.scl, pos.y * this.scl, this.scl,this.scl)
    //         pop()
    //     }
    // }

    this.generateFoodLoc = function() {
        this.appleX = floor(random(0,this.len))
        this.appleY = floor(random(0,this.len))

        // Check that new food loc is not === to tail loc (Might need some optimization)
        for (let i= 0; i < this.total; i++) {
            if(dist(this.x, this.y,this.appleX,this.appleY) < 1) {
                this.appleX = floor(random(0,this.len))
                this.appleY = floor(random(0,this.len))
                i = 0
            }
    
            try {
                if (dist(this.tail[i].x, this.tail[i].y, this.appleX, this.appleY) < 1) {
                    this.appleX = floor(random(0,this.len))
                    this.appleY = floor(random(0,this.len))
                    i = 0
                }} catch {}
            }
        }
        
    this.setForceEat = function() {
        this.forceEat = true
    }
        
    this.eat = function() {
        if (dist(this.x, this.y, this.appleX, this.appleY) < 1 || this.forceEat == true) {
            this.generateFoodLoc()
            this.forceEat = false
            this.total++
        }
    }

    this.avoidVolInverse = function() {
        if (this.x_vol != 0) {
            this.prevDirection = "VERTICAL"
        } else if (this.y_vol != 0) {
            this.prevDirection = "HORIZONTAL"
        }
    }

    this.moveLEFT = function() {
        if (game.prevDirection != "VERTICAL"|| game.total === 0) {
            game.x_vol = -1
            game.y_vol = 0
        }
    }

    this.moveRIGHT = function() {
        if (game.prevDirection != "VERTICAL" || game.total === 0) {
            game.x_vol = 1
            game.y_vol = 0
        }
    }

    this.moveDOWN = function() {
        if (game.prevDirection != "HORIZONTAL" || game.total === 0) {
            game.x_vol = 0
            game.y_vol = 1
        }
    }
    this.moveUP = function() {
        if (game.prevDirection != "HORIZONTAL" || game.total === 0) {
            game.x_vol = 0
            game.y_vol = -1
        }
    }

    this.score = function() {
        return this.total
    }

    this.getGameHeight = function() {
        return this.gameHeight
    }

    this.getGameWidth = function() {
        return this.gameWidth
    }
}
