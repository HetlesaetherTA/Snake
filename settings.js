function Settings() {
    this.settingsHeight = 120
    this.settingsMargin = 100
    // Yh, this code is scuffed, I wanted it in the 
    // draw function but it rendered wrong.
    // speed setting
    this.speedSlider = createSlider(5,25,10,1)
    this.speedSlider.position(width - this.settingsMargin,this.settingsHeight)
    this.speedSlider.style('width', '80px');
    this.speedSlider.addClass("setting")
    // size setting
    this.sizeSlider = createSlider(10,30,15,1);
    this.sizeSlider.style('width', '80px');
    this.sizeSlider.position(width - this.settingsMargin,this.settingsHeight + 35)
    this.sizeSlider.addClass("setting")
    // ai on/off setting
    this.aiSlider = createSlider(0,1,0,1);
    this.aiSlider.position(this.settingsMargin - 40, this.settingsHeight + 17.5)
    this.aiSlider.style("width", "40px")
    this.aiSlider.addClass("setting")

    this.draw = function() {
        fill(255)
        text("speed", width - 150, this.settingsHeight + 5)
        text("size", width - 150, this.settingsHeight + 35 + 5)

        text("self", 25, this.settingsHeight + 17.5 + 5)
        text("ai (unavailable)", this.settingsMargin + 5, this.settingsHeight + 17.5 + 5)
    }
    

    this.speed = function() {
        let value = this.speedSlider.value()
        return value
    }

    this.size = function() {
        let value = this.sizeSlider.value()
        return value
    }

    this.ai = function() {
        return false
    }

}