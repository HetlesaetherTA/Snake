function Settings() {
    this.speedSlider = createSlider(10,30,15,1);
    this.speedSlider.position(50,50)
    this.speedSlider.style('width', '80px');
    this.sizeSlider = createSlider(10,30,15,1);
    this.sizeSlider.position(50,100)
    this.sizeSlider.style('width', '80px');


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