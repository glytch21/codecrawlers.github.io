class PlacementTile {
    constructor({position = { x: 0, y: 0 }}) {  // constructor is where variables are set for the methods that are created to rely on.
        this.position = position
        this.size = 16 // could've been this.width = 64 and this.height = 64, but since it's both 64, it's turned to this.size = 64.
        this.color = 'rgba(255, 255, 255, 0)'
        this.occupied = false
    }

    draw() {    // this is where the character or unit is drawn
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.size, this.size) // this is 16 since each box on the tilemap is 16x16 in width and height.
    }

    update(mouse) {     // this is where the movement or behavior or algorithm of the unit is defined or made.
        this.draw()     // so that when it is placed in the animate() function, it will just do its own animation (maybe?)

        if (mouse.x > this.position.x && mouse.x < this.position.x + this.size &&    // collision detection code formula
            mouse.y > this.position.y && mouse.y < this.position.y + this.size) {
                this.color = 'rgba(255, 255, 255, 0.5'
        } else {
            this.color = 'rgba(255, 255, 255, 0'
        }
    }
}