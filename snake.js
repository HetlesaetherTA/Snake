function Snake(tile) {
    this.x = (width - tile) / 2
    this.y = (height - tile) / 2
    this.x_vol = 0
    this.y_vol = 0
    this.appleX
    this.appleY

    this.tail = []
    this.score = 0
    
    this.generateAppleLoc = function() {
        this.appleX = floor(random(0,17)) * tile
        this.appleY = floor(random(0,17)) * tile
    }

    this.update = function() {
        
        if (int(this.x) == int(this.appleX) && int(this.y) == int(this.appleY)) {
            this.tail.push({"x": this.x, "y": this.y })
            this.score++
            this.generateAppleLoc()
            console.log(this.score)
        }
         
        for (let i = this.tail.length; i > 0; i--) {
            if (i == 0) {
                this.tail[i] = {"x": this.x, "y": this.y}
            }
            console.log(this.tail.length)
            this.tail[i] = this.tail[i - 1]
        }

        this.x += this.x_vol * tile;
        this.y += this.y_vol * tile;
    }
    
    this.checkDeath = function () {
        if (this.x < 0 || this.x > width - tile) {
            return true
        }
        if (this.y < 0 || this.y > height - tile) {
            return true
        }
        
        return false
    }
    
    this.dead = function() {
        console.log("Game Over")
        this.x = (width - tile) / 2
        this.y = (height - tile) / 2
        this.x_vol = 0
        this.y_vol = 0
        this.score = 0
        this.generateAppleLoc()

    }
    
    this.generateAppleLoc() 
  }