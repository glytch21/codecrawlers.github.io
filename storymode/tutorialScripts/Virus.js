class Virus {
    constructor(name, xpos = 0, ypos = 0, speed, health) {
        this.name = name
        this.xpos = xpos
        this.ypos = ypos
        this.radius = 18
        this.image = new Image()
        this.image.src = './../public/icons/enemies.png'
        this.centerX = centerX
        this.centerY = centerY
        this.speed = speed
        this.health = health
        this.frames = {
            max: 4,
            current: 0,
            elapsed: 0,
            hold: 20
        }
    }

    hidePropertiesFromConsole() {
        Object.defineProperty(this, 'radius', { enumerable: false });
        Object.defineProperty(this, 'image', { enumerable: false });
        Object.defineProperty(this, 'image.src', { enumerable: false });
        Object.defineProperty(this, 'centerX', { enumerable: false });
        Object.defineProperty(this, 'centerY', { enumerable: false });
        Object.defineProperty(this, 'speed', { enumerable: false });
        Object.defineProperty(this, 'frames', { enumerable: false });
        Object.defineProperty(this, 'maxHealth', { enumerable: false });
        Object.defineProperty(this, 'frames2', { enumerable: false });
        Object.defineProperty(this, 'addSpeed', { enumerable: false });
        Object.defineProperty(this, 'audio', { enumerable: false });
        // Add more properties to hide as needed
    }

    draw() {
        this.hidePropertiesFromConsole()
        const cropWidth = this.image.width / this.frames.max
        const crop = {
            xpos: cropWidth * this.frames.current,
            ypos: 0,
            width: cropWidth,
            height: this.image.height
        }
        const hehe = 220;
        c.drawImage(this.image, crop.xpos, crop.ypos, crop.width, crop.height, this.xpos - 11, this.ypos - 22, crop.width - 22, crop.height - 22)

        // Responsible for animation
        if (this.name === 'Malware' || this.name === 'Melee' || this.name === 'LogicBomb') {
            if (this.target) {          // if malware has targets, then animation starts. (this will later be changed to always animating but different animation png file when this.target is truthy.)
                this.frames.elapsed++

                if (this.frames.elapsed % this.frames.hold === 0) {
                    this.frames.current++
                    if (this.frames.current >= this.frames.max - 1) {
                        this.frames.current = 0
                    }
                }
            }
        } else {
            this.frames.elapsed++

            if (this.frames.elapsed % this.frames.hold === 0) {
                this.frames.current++
                if (this.frames.current >= this.frames.max - 1) {
                    this.frames.current = 0
                }
            }
        }

        // health bar
        c.fillStyle = 'red'
        //          x position of hp,          y position of hp          width of hp,     height of hp by pixels
        c.fillRect(this.xpos - this.radius, this.ypos - this.radius * 1.5, this.radius * 2, 5)

        c.fillStyle = 'cyan'
        c.fillRect(this.xpos - this.radius, this.ypos - this.radius * 1.5, (this.radius * 2) * this.health / 100, 5)
    }

    targetUnit(xpos, ypos) {    // this is for the attacker to go directly to the unit it's attacking. (suitable for melee type units (crawlers or viruses))
        const speed = this.speed
    
        const yDistance = ypos - this.ypos
        const xDistance = xpos - this.xpos
    
        // Calculate the change in position (deltaX and deltaY) based on the angle and speed
        const angle = Math.atan2(yDistance, xDistance)
        const deltaX = Math.cos(angle) * speed * 0.01
        const deltaY = Math.sin(angle) * speed * 0.01
    
        // Update the position by applying the change in position
        this.xpos += deltaX
        this.ypos += deltaY

        this.draw()
    }

    attack() {
        if (this.frames2 % this.attackSpeed === 0 && this.target) {       // This is where the speed of projectiles getting pushed is determined.
            // this.audio.attack.volume = sfxRange.value / sfxRange.max
            // this.audio.attack.play()
            this.projectiles.push(
                new Projectile({
                    position: {
                        x: this.xpos,
                        y: this.ypos
                    },
                    virus: this.target,
                    speed: this.projectileSpeed,
                    name: this.name
                })
            )
        }
    
        this.frames2++

        this.draw()
    }

    update() {
        const speed = this.speed
        this.xpos--
        
        this.draw()
    }
}

class MalwareVirus extends Virus {
    constructor(name, xpos, ypos, radius, speed, health) {
        super(name, xpos, ypos, radius, speed, health)

        this.image.src = './public/icons/malware.png'
        this.target
        this.projectiles = []
        this.frames2 = 0
        this.projectileSpeed = 200
        this.attackSpeed = 50
    }

    // Override the update method to include malware behavior
    update() {
        if (this.target) {  // this is for animation. if there is a target, start animation (this.draw()), if not, just walk (super.update())
            if (!this.addSpeed.logicBomb) {
                this.speed = this.speed * 1.2
                this.addSpeed.logicBomb = true
            }

            if (((this.xpos - this.target.xpos < 60 && this.xpos - this.target.xpos > 0) && (this.ypos - this.target.ypos < 60) && (this.ypos - this.target.ypos > 0)) ||   // this condition is so that the ranged (malware) virus
                ((this.xpos - this.target.xpos < 60 && this.xpos - this.target.xpos > 0) && (this.ypos - this.target.ypos > -60) && (this.ypos - this.target.ypos < 0)) ||  // only gets closer a little bit, not taking it's position literally
                ((this.xpos - this.target.xpos > -60 && this.xpos - this.target.xpos < 0) && (this.ypos - this.target.ypos < 60) && (this.ypos - this.target.ypos > 0)) ||  // before attacking.
                ((this.xpos - this.target.xpos > -60 && this.xpos - this.target.xpos < 0) && (this.ypos - this.target.ypos > -60) && (this.ypos - this.target.ypos < 0))) {
                this.attack()
            } else {
                this.targetUnit(this.target.xpos, this.target.ypos)
            }

        } else {
            super.update()  // go to center
        }

        const allValidCrawlers = []

        crawlers.forEach((crawler) => {
            const xDifference = crawler.xpos - this.xpos
            const yDifference = crawler.ypos - this.ypos
            const distance = Math.hypot(xDifference, yDifference)

            if ((distance) < crawler.radius + this.radius) {
                allValidCrawlers.push(crawler)
                return // Break out of the loop after finding the first valid enemy
            }
        })

        this.target = allValidCrawlers[0]

        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const projectile = this.projectiles[i]
            projectile.update()

            const xDifference = projectile.virus.xpos - projectile.position.x
            const yDifference = projectile.virus.ypos - projectile.position.y
            const distance = Math.hypot(xDifference, yDifference)

            // This is when a projectile hits an enemy
            if ((distance + 100) < projectile.virus.radius + projectile.radius) {
                projectile.virus.health -= 10      // This is the damage of the crawlers.

                this.projectiles.splice(i, 1)
            }
        }
    }
}

class SpywareVirus extends Virus {
    constructor(name, xpos, ypos, radius, speed, health) {
        super(name, xpos, ypos, radius, speed, health)

        this.image.src = './public/icons/enemies.png'
    }

    update() {
        // Call the update method of the parent class without passing any arguments
        super.update()

        // Additional behavior specific to SpywareVirus
        // For example, execute the spyware behavior here
        this.executeSpywareBehavior()
    }

    // Additional method for executing the spyware behavior
    executeSpywareBehavior() {
        // Check if the virus is close to the center
        if (this.calculateDistanceToCenter() < 70) {
            // Move in a random zigzag manner
            const randomAngle = Math.random() * Math.PI * 2 // Random angle in radians
            const randomDistance = Math.random() * 20 // Random distance
            this.xpos += Math.cos(randomAngle) * randomDistance
            this.ypos += Math.sin(randomAngle) * randomDistance
        }
    }

    // Override the calculateDistanceToCenter method to use the properties directly
    calculateDistanceToCenter() {
        const dx = this.centerX - this.xpos
        const dy = this.centerY - this.ypos
        return Math.sqrt(dx * dx + dy * dy)
    }
}

class MeleeVirus extends Virus {
    constructor(name, xpos, ypos, speed, health, maxHealth) {
        super(name, xpos, ypos, speed, health, maxHealth)

        this.image.src = './public/icons/melee.png'
        this.target
        this.projectiles = []
        this.projectileSpeed = 200
        this.attackSpeed = 40
    }

    update() {
        if (this.target) {  // this is for animation. if there is a target, start animation (this.draw()), if not, just walk (super.update())
            if (!this.addSpeed.melee) {
                this.speed = this.speed * 2
                this.addSpeed.melee = true
            }

            if (((this.xpos - this.target.xpos < 22 && this.xpos - this.target.xpos > 0) && (this.ypos - this.target.ypos < 22) && (this.ypos - this.target.ypos > 0)) ||   // this condition is so that the melee virus
                ((this.xpos - this.target.xpos < 22 && this.xpos - this.target.xpos > 0) && (this.ypos - this.target.ypos > -22) && (this.ypos - this.target.ypos < 0)) ||  // only gets closer, not taking it's position literally
                ((this.xpos - this.target.xpos > -22 && this.xpos - this.target.xpos < 0) && (this.ypos - this.target.ypos < 22) && (this.ypos - this.target.ypos > 0)) ||  // before attacking.
                ((this.xpos - this.target.xpos > -22 && this.xpos - this.target.xpos < 0) && (this.ypos - this.target.ypos > -22) && (this.ypos - this.target.ypos < 0))) {
                this.attack()
            } else {
                this.targetUnit(this.target.xpos, this.target.ypos)
            }

        } else {
            super.update()  // go to center
        }

        const allValidCrawlers = []

        crawlers.forEach((crawler) => {
            const xDifference = crawler.xpos - this.xpos
            const yDifference = crawler.ypos - this.ypos
            const distance = Math.hypot(xDifference, yDifference)

            if ((distance) < crawler.radius + this.radius) {
                allValidCrawlers.push(crawler)
                return // Break out of the loop after finding the first valid enemy
            }
        })

        this.target = allValidCrawlers[0]

        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const projectile = this.projectiles[i]
            projectile.update()

            const xDifference = projectile.virus.xpos - projectile.position.x
            const yDifference = projectile.virus.ypos - projectile.position.y
            const distance = Math.hypot(xDifference, yDifference)

            // This is when a projectile hits an enemy
            if ((distance + 100) < projectile.virus.radius + projectile.radius) {
                projectile.virus.health -= 10      // This is the damage of the crawlers.

                this.projectiles.splice(i, 1)
            }
        }
    }
}

class LogicBombVirus extends Virus {    // Self Destructing Virus. damage on contact: 50 (if completed self destruct (360ms). lower damage if killed quickly before 360ms)
    constructor(name, xpos, ypos, speed, health, maxHealth) {
        super(name, xpos, ypos, speed, health, maxHealth)

        this.image.src = './public/icons/logicBomb.png'
        this.target
        this.projectiles = []
        this.projectileSpeed = 200
        this.attackSpeed = 7    // ultra high speed attacking, simulating a self destructing damage because it's so fast.
    }

    update() {
        if (this.target) {
            if (!this.addSpeed.logicBomb) {
                this.speed = this.speed * 3
                this.addSpeed.logicBomb = true
            }
            // self distruct then decrease the targeted crawlers health while splicing the logic bomb unit...
            if (((this.xpos - this.target.xpos < 1 && this.xpos - this.target.xpos > 0) && (this.ypos - this.target.ypos < 1) && (this.ypos - this.target.ypos > 0)) ||   // this condition is so that the logicBomb virus
                ((this.xpos - this.target.xpos < 1 && this.xpos - this.target.xpos > 0) && (this.ypos - this.target.ypos > -1) && (this.ypos - this.target.ypos < 0)) ||  // only gets closer, not taking it's position literally
                ((this.xpos - this.target.xpos > -1 && this.xpos - this.target.xpos < 0) && (this.ypos - this.target.ypos < 1) && (this.ypos - this.target.ypos > 0)) ||  // before attacking.
                ((this.xpos - this.target.xpos > -1 && this.xpos - this.target.xpos < 0) && (this.ypos - this.target.ypos > -1) && (this.ypos - this.target.ypos < 0))) {
                this.attack()
                setTimeout(() => {
                    this.health -= this.maxHealth
                    this.audio.logicBombAttack.volume = (sfxRange.value / sfxRange.max)
                    this.audio.logicBombAttack.play()
                }, 360)
            } else {
                this.targetUnit(this.target.xpos, this.target.ypos)
            }

        } else {
            super.update()  // go to center
        }

        const allValidCrawlers = []

        crawlers.forEach((crawler) => {
            const xDifference = crawler.xpos - this.xpos
            const yDifference = crawler.ypos - this.ypos
            const distance = Math.hypot(xDifference, yDifference)

            if ((distance) < crawler.radius + this.radius) {
                allValidCrawlers.push(crawler)
                return // Break out of the loop after finding the first valid enemy
            }
        })

        this.target = allValidCrawlers[0]

        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const projectile = this.projectiles[i]
            projectile.update()

            const xDifference = projectile.virus.xpos - projectile.position.x
            const yDifference = projectile.virus.ypos - projectile.position.y
            const distance = Math.hypot(xDifference, yDifference)

            // This is when a projectile hits an enemy
            if ((distance + 100) < projectile.virus.radius + projectile.radius) {
                projectile.virus.health -= 10      // This is the damage of the crawlers.

                this.projectiles.splice(i, 1)
            }
        }
    }
}