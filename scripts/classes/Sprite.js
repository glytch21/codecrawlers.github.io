class Sprite {
    constructor({ position = { x: 0, y: 0}} ) {
        this.position = position
        this.image = new Image()
        this.image.src = './public/icons/crawler-projectile.png'
        this.frames = {
            max: 1
        }
    }

    draw(code) {
        if (code === 'virus') {
            this.image.src = './public/icons/virus-projectile.png'
        } else if (code === 'stealth') {
            this.image.src = './'
        }
        const crop = {
            position: {
                x: 0,
                y: 0
            },
            width: this.image.width / this.frames.max,
            height: this.image.height
        }
        c.drawImage(this.image, this.position.x - this.radius, this.position.y - this.radius, this.radius * 2, this.radius * 2)
    }
}