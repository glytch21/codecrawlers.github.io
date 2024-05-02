class FJ { // firewalls judgement
    constructor() {
        this.firewallsJudgementAvailable = true

        this.remainingTime = 30000
        this.remainingTimeSeconds = this.remainingTime / 1000

        this.timerId
        this.startTime
        this.intervalId

        this.displayCD = document.querySelector('.fj-cd')
        this.displayImg = document.querySelector('.fj-skill')

        this.remainingTimeTaken = false
    }

    run() {
        if (!hasStarted) {
            displayError2('Can not use skill "firewallsJudgement()". Game has not started yet.')
        } else {
            if (this.firewallsJudgementAvailable) {
                this.firewallsJudgementAvailable = false

                for (let i = 0; i < 30; i++) {  // code for nuking the viruses
                    viruses.map((enemy, i) => {
                        enemy.health -= 5
                
                        if (enemy.health <= 0) {
                            viruses.splice(i, 1)
                        }
                    })
                
                    malwares.map((enemy, i) => {
                        enemy.health -= 5
                
                        if (enemy.health <= 0) {
                            malwares.splice(i, 1)
                        }
                    })
                
                    spywares.map((enemy, i) => {
                        enemy.health -= 5
                
                        if (enemy.health <= 0) {
                            spywares.splice(i, 1)
                        }
                    })
                
                    melees.map((enemy, i) => {
                        enemy.health -= 5
                
                        if (enemy.health <= 0) {
                            melees.splice(i, 1)
                        }
                    })
                
                    logicBombs.map((enemy, i) => {
                        enemy.health -= 5
                
                        if (enemy.health <= 0) {
                            logicBombs.splice(i, 1)
                        }
                    })
                }
        
                this.start(this.remainingTime)
            } else {
                displayError('You can only use firewallsJudgement once every 30 seconds')
            }
        }
    }

    start(delay) {
        this.intervalId = setInterval(() => {
            this.displayCD.innerText = this.remainingTimeSeconds -= 1
            this.displayImg.style.opacity = 0.5
        }, 1000)

        this.startTime = Date.now()
        this.timerId = setTimeout(() => {
            this.displayCD.innerText = 'READY'
            this.displayImg.style.opacity = 1

            this.firewallsJudgementAvailable = true
            console.warn('FirewallsJudgement() is up!')
            this.remainingTime = 30000
            this.remainingTimeSeconds = this.remainingTime / 1000
            
            clearInterval(this.intervalId)
            clearTimeout(this.timerId)
        }, delay)
    }

    pause() {
        clearInterval(this.intervalId)
        clearTimeout(this.timerId)

        if (!this.remainingTimeTaken && !this.firewallsJudgementAvailable) {
            this.remainingTime = this.remainingTime - (Date.now() - this.startTime)
            this.remainingTimeTaken = true
        }
    }

    resume() {
        clearInterval(this.intervalId)
        clearTimeout(this.timerId)

        this.start(this.remainingTime)
        this.remainingTimeTaken = false
    }
}