function Snake(scl, len) {
    this.x = (width - scl) / 2
    this.y = (height - scl) / 2
    this.x_vol = 0
    this.y_vol = 0
    this.appleX
    this.appleY
    this.tail = []
    this.total = 0
    this.prevDirection;
    
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
        
        this.x += this.x_vol * scl;
        this.y += this.y_vol * scl;
        
        // When players press a horizontal and vertical button at time inverting the vol variable.
        this.avoidVolInverse() 
    }

    this.drawSnake = function() {
        push()
        fill(255)
        rect(this.x, this.y, scl, scl)
        for (let i =  0; i < this.total; i++) {
          rect(this.tail[i].x, this.tail[i].y, scl,scl)
        }
        pop()
      
        push()
        fill(255,0,100)
        rect(this.appleX, this.appleY, scl, scl)
        pop()
    }

    this.restart = function() {
        console.log("Game Over")
        this.x = (width - scl) / 2
        this.y = (height - scl) / 2
        this.x_vol = 0
        this.y_vol = 0
        this.total = 0
        this.tail = []
        this.generateFoodLoc()   
    }
    
    this.dead = function() {
        if (this.x < 0 || this.x > width - scl) {
            return true
        }
        if (this.y < 0 || this.y > height - scl) {
            return true
        }

        for (let i = this.total-1; i > 0; i--) {
            let pos = this.tail[i]
            if (dist(this.x, this.y, pos.x, pos.y) < 1) {
                return true
            }
        }
        return false
    }

    this.generateFoodLoc = function() {
        this.appleX = floor(random(0,len)) * scl
        this.appleY = floor(random(0,len)) * scl
    }
    
    this.eat = function () {
        if (dist(this.x, this.y, this.appleX, this.appleY) < 1) {
            this.generateFoodLoc()
            this.total++
            console.log(this.total)
        }
    }

    this.avoidVolInverse = function() {
        if (this.x_vol != 0) {
            this.prevDirection = "VERTICAL"
        } else if (this.y_vol != 0) {
            this.prevDirection = "HORIZONTAL"
        }
    }
}

