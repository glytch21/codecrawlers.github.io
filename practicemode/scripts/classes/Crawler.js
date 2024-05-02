class Crawler {
    constructor(xpos, ypos) {
        this.crawler = '../public/icons/crawlers.png'
        this.upgradedCrawler = '../public/icons/crawlers2.png'

        this.name = 'Crawler'
        this.xpos = xpos
        this.ypos = ypos
        this.radius = 100
        this.image = new Image()
        this.image.src = this.crawler
        this.centerX = centerX
        this.centerY = centerY
        this.color = 'cyan'
        this.projectiles = []
        this.target
        this.frames2 = 0
        this.projectileInterval = 200 // This is where the speed of the projectiles can be modified.
        this.lastProjectileTime = new Date().getTime() // Initialize the time of the last projectile added

        this.maxHealth = 100
        this.health = 100
        this.upgraded = false

        this.frames = {
            max: 4,
            current: 0,
            elapsed: 0,
            hold: 20
        }

        this.speed = 25
        this.projectileSpeed = 200

        this.active = {
            defend: false,
            repair: false,
            move: false
        }
    }

    hidePropertiesFromConsole() {
        Object.defineProperty(this, 'crawler', { enumerable: false });
        Object.defineProperty(this, 'upgradedCrawler', { enumerable: false });
        Object.defineProperty(this, 'image', { enumerable: false });
        Object.defineProperty(this, 'image.src', { enumerable: false });
        Object.defineProperty(this, 'centerX', { enumerable: false });
        Object.defineProperty(this, 'centerY', { enumerable: false });
        Object.defineProperty(this, 'color', { enumerable: false });
        Object.defineProperty(this, 'projectiles', { enumerable: false });
        // Object.defineProperty(this, 'target', { enumerable: false });
        Object.defineProperty(this, 'frames2', { enumerable: false });
        Object.defineProperty(this, 'projectileInterval', { enumerable: false });
        Object.defineProperty(this, 'lastProjectileTime', { enumerable: false });
        Object.defineProperty(this, 'maxHealth', { enumerable: false });
        Object.defineProperty(this, 'frames', { enumerable: false });
        Object.defineProperty(this, 'speed', { enumerable: false });
        Object.defineProperty(this, 'projectileSpeed', { enumerable: false });
        Object.defineProperty(this, 'audio', { enumerable: false });
        Object.defineProperty(this, 'active', { enumerable: false });
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

        c.save()
        c.beginPath()
        c.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false)
        c.closePath()
        
        c.drawImage(this.image, crop.xpos, crop.ypos, crop.width, crop.height, this.xpos - 11, this.ypos - 22, crop.width - 22, crop.height - 22)
        // c.drawImage(this.image, crop.xpos - this.radius * 2, this.ypos - this.radius, this.radius * 2, this.radius * 2)
        
        c.restore()
        c.strokeStyle = this.color
        c.stroke()        

        // health bar
        c.fillStyle = 'red'
        //          x position of hp,          y position of hp          width of hp,     height of hp by pixels
        c.fillRect(this.xpos - (this.maxHealth / 7), this.ypos - 29, this.maxHealth / 3, 5)

        c.fillStyle = 'cyan'
        c.fillRect(this.xpos - (this.maxHealth / 7), this.ypos - 29, this.health / 3, 5)

        updateColors()
    }

    update() {
        // even if this.target is already defined by the player, then it also has to be within range before the crawlers start attacking.
        // this is useful if a player wants a crawler to attack a specific type of virus.  e.g. WormByte, Malware, Seeker, LogicBomb...
        let xDifference;
        let yDifference;

        if (this.target) {
            xDifference = this.target.xpos - this.xpos
            yDifference = this.target.ypos - this.ypos
        }
        const distance = Math.hypot(xDifference, yDifference)

        if (this.target && distance < this.target.radius + this.radius) {
            this.frames.elapsed++   // This updates the animation frames
            if (this.frames.elapsed % this.frames.hold === 0) {
                this.frames.current++
                if (this.frames.current >= this.frames.max - 1) {
                    this.frames.current = 0
                }
            }
        } else {
            for (let i = this.frames.current; i > 0; i--) {
                this.frames.elapsed++   // This updates the animation frames
                
                if (this.frames.elapsed % this.frames.hold === 0) {
                    this.frames.current--
                }
            }
        }

        // Update the position and draw
        this.xpos = this.xpos
        this.ypos = this.ypos
        this.draw()
    
        // Add a new projectile if enough time has elapsed
        if (this.frames2 % this.speed === 0 && this.target && distance < this.target.radius + this.radius) {       // This is where the speed of projectiles getting pushed is determined.
            this.projectiles.push(
                new Projectile({
                    position: {
                        x: this.xpos,
                        y: this.ypos
                    },
                    virus: this.target,
                    speed: this.projectileSpeed
                })
            )
        }
    
        this.frames2++

        // updateColors()
    }

    defend() {
        this.active.defend = true

        this.update()
        let allValidEnemies = [] // Reset the array for each crawler

        enemies.forEach((enemy) => {
            enemy.forEach((virus) => {
                const xDifference = virus.xpos - this.xpos
                const yDifference = virus.ypos - this.ypos
                const distance = Math.hypot(xDifference, yDifference)

                if (distance < virus.radius + this.radius) {
                    allValidEnemies.push(virus)
                    return // Break out of the loop after finding the first valid enemy
                }
            })
        })

        this.target = allValidEnemies[0] // Set target to the first valid enemy

        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const projectile = this.projectiles[i]
            projectile.update()

            const xDifference = projectile.virus.xpos - projectile.position.x
            const yDifference = projectile.virus.ypos - projectile.position.y
            const distance = Math.hypot(xDifference, yDifference)

            // This is when a projectile hits an enemy
            if (distance < projectile.virus.radius + projectile.radius) {
                projectile.virus.health -= 20      // This is the damage of the crawlers.
               
                if (projectile.virus.health <= 0) {    // Looks for the enemy instance to accurately splice
                    const defeatedEnemyIndex = enemies.findIndex((enemyArray) => {
                        return enemyArray.includes(projectile.virus)
                    })
                
                    if (defeatedEnemyIndex !== -1) {    // This part selects the enemy to be spliced within it's own array.
                        const defeatedEnemyArray = enemies[defeatedEnemyIndex]
                        const enemyIndexInArray = defeatedEnemyArray.findIndex((enemy) => enemy === projectile.virus)
                        
                        if (enemyIndexInArray !== -1) {
                            // Splice the defeated enemy from the respective enemy array
                            defeatedEnemyArray.splice(enemyIndexInArray, 1)
                            energy += 1
                        }
                    }
                }

                this.projectiles.splice(i, 1)
                // this.health -= 1 // removed since there are attacker type viruses now.
            }
        }

        setTimeout(() => {
            this.active.defend = false
        }, 1)
    }

    move(xpos, ypos) {    // prototype
        let i = 0
        let j = 0
        const moveLoop = () => {
            if (xpos < 0) {
                if (i > xpos) {
                    setTimeout(() => {
                        this.xpos -= 1;
                        i--
                        moveLoop()
                    }, 50)
                }
            } else if (xpos > 0) {
                if (i < xpos) {
                    setTimeout(() => {
                        this.xpos += 1
                        i++
                        moveLoop()
                    }, 50)
                }
            }

            if (ypos < 0) {
                if (j > ypos) {
                    setTimeout(() => {
                        this.ypos -= 1;
                        j--
                        moveLoop()
                    }, 50)
                }
            } else if (ypos > 0) {
                if (j < ypos) {
                    setTimeout(() => {
                        this.ypos += 1
                        j++
                        moveLoop()
                    }, 50)
                }
            }
        };
        moveLoop();
    }

    repair() {
        if (this.active.defend) {
            displayError('Cannot run defend() and repair() at the same time')
        }
        this.draw()
        if (this.upgraded) {
            if (this.health >= 1 && this.health <= 149) {
                this.frames.elapsed++
                if (this.frames.elapsed % (this.frames.hold / 4) === 0) {
                    this.health++
                }
            }
        } else if (this.health >= 1 && this.health <= 99) {
            this.frames.elapsed++
            if (this.frames.elapsed % (this.frames.hold / 2) === 0) {
                this.health++
            }
        } else {
            return
        }
    }

    upgrade() {
        if (energy < 50) {
            displayError('Need 50 energy for upgrade')
            return
        }
        if (!this.upgraded) {
            energy -= 50

            this.maxHealth = 150
            this.health = 150
            this.radius = 150
            this.speed = 10
            this.projectileSpeed = 400
            this.upgraded = true

            this.image.src = this.upgradedCrawler   // to update
        } else {
            displayMessage('Upgrade complete. remove ".upgrade()" from code editor')
        }
    }
}