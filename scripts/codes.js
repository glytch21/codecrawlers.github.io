// --------------------------------------------------------CRAWLERS CODE----------------------------------------------------------------------------

const spawnedPositions = []
// let lastFrameTime = 0  // Essential for constant speed even in multiple update()

function spawnCrawlers(xposParams, yposParams) {
    // Check if the number of crawlers in the array is less than 2 before pushing new instances
    const positionKey = xposParams + ',' + yposParams
    if (!spawnedPositions.includes(positionKey) && energy >= 50) {  // Checks if the position is already taken. If not, then new crawler gets pushed.
        energy -= 50    // energy gets subtracted
        updateEnergyResource()

        crawlers.push(new Crawler(xposParams || 20, yposParams || 20))
        spawnedPositions.push(positionKey)
        spawnAudio.play()   // spawn sound
    } else if (!spawnedPositions.includes(positionKey) && energy < 50) {
        displayError("You do not have enough energy to spawn crawlers")
    }

    // Update crawlers and their projectiles
    crawlers.forEach((crawler, i) => {
        crawler.draw()
    })
}


// --------------------------------------------------------VIRUSES CODE-----------------------------------------------------------------------------
const spawnVirus = () => {
    // Iterate over the viruses array in reverse to safely splice elements
    for (let i = viruses.length - 1; i >= 0; i--) {
        const virus = viruses[i]

        virus.update()

        if (Math.round(virus.xpos) === Math.round(centerX) ||
            Math.round(virus.ypos) === Math.round(centerY)) {
            // Splice the virus from the viruses array
            viruses.splice(i, 1)    // This splices or removes the class when it reaches the center.

            crawlers.forEach((crawler) => {
                crawler.health -= 10
            })
            baseHealth -= 10
            updateGameOverHealth()
            gameOver(baseHealth)    // add a base death function results in gameover.
        }
    }
}

const spawnMalware = () => {        // not yet configured
    for (let i = malwares.length - 1; i >= 0; i--) {
        const malware = malwares[i]
        
        malware.update()

        if (Math.round(malware.xpos) === Math.round(centerX) &&
            Math.round(malware.ypos) === Math.round(centerY)) {
            malwares.splice(i, 1)       // This splices or removes the class when it reaches the center.

            crawlers.forEach((crawler) => {
                crawler.health -= 10
            })
            baseHealth -= 10
            updateGameOverHealth()
            gameOver(baseHealth)    // add a base death function results in gameover.
        }
    }
}

const spawnSpyware = () => {
    for (let i = spywares.length - 1; i >= 0; i--) {
        const spyware = spywares[i]

        spyware.update()

        if (Math.round(spyware.xpos) === Math.round(centerX) ||
            Math.round(spyware.ypos) === Math.round(centerY)) {
            spywares.splice(i, 1)   // This splices or removes the class when it reaches the center.
            
            crawlers.forEach((crawler) => {
                crawler.health -= 10
            })
            baseHealth -= 10
            updateGameOverHealth()
            gameOver(baseHealth)    // add a base death function results in gameover.
        }
    }
}

const spawnMelee = () => {        // not yet configured
    for (let i = melees.length - 1; i >= 0; i--) {
        const melee = melees[i]
        
        melee.update()

        if (Math.round(melee.xpos) === Math.round(centerX) &&
            Math.round(melee.ypos) === Math.round(centerY)) {
            melees.splice(i, 1)       // This splices or removes the class when it reaches the center.

            crawlers.forEach((crawler) => {
                crawler.health -= 10
            })
            baseHealth -= 10
            updateGameOverHealth()
            gameOver(baseHealth)    // add a base death function results in gameover.
        }
    }
}

const spawnLogicBomb = () => {        // not yet configured
    for (let i = logicBombs.length - 1; i >= 0; i--) {
        const logicBomb = logicBombs[i]
        
        logicBomb.update()

        if (Math.round(logicBomb.xpos) === Math.round(centerX) &&
            Math.round(logicBomb.ypos) === Math.round(centerY)) {
            logicBombs.splice(i, 1)       // This splices or removes the class when it reaches the center.

            crawlers.forEach((crawler) => {
                crawler.health -= 10
            })
            baseHealth -= 10
            updateGameOverHealth()
            gameOver(baseHealth)    // add a base death function results in gameover.
        }
    }
}


// --------------------------------------------------------ERROR CODE FUNCTIONS----------------------------------------------------------------------
let errorTimeout;
const displayError = (error) => {
    const errorDisplay = document.querySelector('.error-display')       // Responsible for displaying error
    errorDisplay.innerHTML = `${error}. Erase the error and resume the game.`
    errorDisplay.style.display = 'initial'

    clearTimeout(errorTimeout)
    
    errorTimeout = setTimeout(() => {
        errorDisplay.style.display = 'none'     // After 4 seconds, display error will disappear
    }, 4000)

    cancelAnimationFrame(animateID)     // Stopping animation
    console.error(`${error}. Erase the error and resume the game.`)    // console.log the error message

    if (hasStarted) {       // Only hides the run button and reveals the resume button if game has already started (to avoid bug exploits)
        pauseFunction() // same effect but more complete.
    }

    errorPresent = true
    errorScroll()

    logNotification()   // displays a red circle to indicate a console logs update.
}

const displayError2 = (error) => {      // displayError without the "Erase the error and resume the game" version.
    const errorDisplay = document.querySelector('.error-display')       // Responsible for displaying error
    errorDisplay.innerHTML = `${error}`
    errorDisplay.style.display = 'initial'

    clearTimeout(errorTimeout)
    
    errorTimeout = setTimeout(() => {
        errorDisplay.style.display = 'none'     // After 4 seconds, display error will disappear
    }, 4000)

    cancelAnimationFrame(animateID)     // Stopping animation
    console.error(`${error}`)    // console.log the error message

    if (hasStarted) {       // Only hides the run button and reveals the resume button if game has already started (to avoid bug exploits)
        pauseFunction() // same effect but more complete.
    }

    errorPresent = true
    errorScroll()

    logNotification()   // displays a red circle to indicate a console logs update.
}


// -------------------------------------------------REMOVE SPLICED CRAWLER POSITION FUNCTIONS--------------------------------------------------------
const toBeRemoved = []
const removePosition = (toBeRemoved) => {
    toBeRemoved.map((toRemove) => {
        const positionKey = toRemove[0] + ',' + toRemove[1]

        const index = spawnedPositions.indexOf(positionKey);
        if (index !== -1) {
            spawnedPositions.splice(index, 1);
        }
    })

    toBeRemoved.length = 0
}

const removeFromCode = (stringToRemove) => {
    var code = editor.getValue();

    // Check if the string exists in the code
    if (code.includes(stringToRemove)) {
        // Remove the string from the code
        code = code.replace(stringToRemove, stringToRemove)
        editor.setValue(code)   // updates the code editor
    }
}

const scrollDown = () => {

}


// ----------------------------------------------------DISPLAY MESSAGE AND PAUSE THE GAME-----------------------------------------------------------
let messageTimeout;
const displayMessage = (message) => {
    const messageDisplay = document.querySelector('.message-display')       // Responsible for displaying message
    messageDisplay.innerHTML = `${message}.`
    messageDisplay.style.display = 'initial'

    clearTimeout(messageTimeout)
    
    messageTimeout = setTimeout(() => {
        messageDisplay.style.display = 'none'     // After 4 seconds, display message will disappear
    }, 4000)

    cancelAnimationFrame(animateID)     // Stopping animation
    console.log(`${message}.`)    // console.log the message message

    if (hasStarted) {       // Only hides the run button and reveals the resume button if game has already started (to avoid bug exploits)
        document.querySelector('.run').style.display = 'none'
        resume.style.display = 'initial'
        cancelAnimationFrame(animateID2)
    }

    errorPresent = true

    logNotification()   // displays a red circle to indicate a console logs update.
}


// --------------------------------------------------------------PAUSE FUNCTION---------------------------------------------------------------------
const pauseFunction = () => {
    const pauseDisplay = document.querySelector('.pause')

    cancelAnimationFrame(animateID)

    if (hasStarted) {
        pauseDisplay.style.display = 'initial'
        document.querySelector('.run').style.display = 'none'
        resume.style.display = 'initial'
        cancelAnimationFrame(animateID2)

        if (FJA[0] && !FJA[0].firewallsJudgementAvailable) {   // if there is an instance of FJ class. then run the code.
            FJA[0].pause()
        }
    }
}

let isPaused = false
document.addEventListener('keydown', (event) => {
    // event.preventDefault()

    if (event.code === 'Space' && event.ctrlKey === true) {
        if (!isPaused) {
            pauseFunction()
            isPaused = true
        } else {
            resumeButton()
            isPaused = false
        }
    }
})

// DELETE ALL VIRUSES ON THE VICINITY!
const FJA = []
let FJAempty = true

function firewallsJudgement() {
    if (FJAempty) {
        FJA.push(new FJ(/* sheesh */))
        FJAempty = false
    }

    FJA[0].run()
}