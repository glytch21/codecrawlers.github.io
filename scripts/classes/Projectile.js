class Projectile extends Sprite {
    constructor({ position = { x: 0, y:0 }, virus, speed, name }) {
        super({ position })
        this.velocity = {
            x: 0,
            y: 0
        }
        this.virus = virus
        this.radius = 11     // size of the projectile
        this.speed = speed
        this.name = name
    } 

    update() {
        if (this.name === 'Melee' || this.name === 'LogicBomb') {
            this.draw('stealth')
        } else if (this.virus.name === 'Crawler') {
            this.draw('virus')
        } else {
            this.draw()
        }

        const angle = Math.atan2(   // To get the angle, the Y position of the virus and the projectiles Y position is needed.
            this.virus.ypos - this.position.y,
            this.virus.xpos - this.position.x
        )

        const distanceX = Math.cos(angle) * this.speed * 0.01
        const distanceY = Math.sin(angle) * this.speed * 0.01

        this.position.x += distanceX
        this.position.y += distanceY
    }
}