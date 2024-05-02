const runButton = new Audio('../public/audio/sfx/runButton.wav')

xpos = ''
ypos = ''

// Generate random spawnpoint for Virus
const randomSpawnAlgorithm = () => {
    const dice = Math.random()

    if (dice > 0 && dice < .25) {
        ypos = 100
    } else if (dice > .25 && dice < .5) {
        xpos = 998
    } else if (dice > .5 && dice < .75) {
        ypos = 604
    } else {
        xpos = 100
    }
}

const randomNumber = (min, max) => { // this takes care the positioning of the viruses. 

    if (ypos === 100 || ypos === 604) {
        const result = Math.random() * (998 - 16) + 16
        xpos = result

    } else if (xpos === 998 || xpos === 100) {
        const result = Math.random() * (604 - 16) + 16
        ypos = result
    }
}


const enemies = []

const viruses = []
const malwares = []
const spywares = []
const melees = []
const logicBombs = []

const crawlers = []  


let animateID = 'something'

let hasStarted = false
const runAnimation = (animate) => {        // shortened version of requestAnimationFrame with variable assigned
    if (!hasStarted) {
        c.clearRect(0, 0, canvas.width, canvas.height)
        animateID = requestAnimationFrame(animate);
        return animateID; // If you want to do something with the ID later
    } else {
        animateID = requestAnimationFrame(animate);
        return animateID; // If you want to do something with the ID later
    }
}

const pauseDisplay = document.querySelector('.pause')
const start = document.querySelector('.start-button')
const startButton = () => {
    hasStarted = true
    endlessAlgorithm()
    updateScript()
    start.style.display = 'none'
    pauseDisplay.style.display = 'none'
}

let errorPresent = false
const resume = document.querySelector('.resume-button')
const resumeButton = () => {
    cancelAnimationFrame(animateID2)
    function animate() {
        c.clearRect(0, 0, canvas.width, canvas.height)
        runAnimation2(animate)

        spawnVirus()
        spawnMalware()
        spawnSpyware()
        spawnMelee()
        spawnLogicBomb()
    }

    animate()

    errorPresent = false    // set errorPresent to false and will stay false if the function within-
    updateScript()      // updateScript() doesn't catch an error (which will result in errorPresent = true)

    
    if (!errorPresent) {
        resume.style.display = 'none'
        document.querySelector('.run').style.display = 'initial'
        pauseDisplay.style.display = 'none'

        if (FJA[0] && !FJA[0].firewallsJudgementAvailable) {       // if there is an instance of FJ. run this code.
            FJA[0].resume()
        }
    }
}

const updateScript = () => {        // THIS RUNS THE CODE INPUTTED IN THE CODE EDITOR ON THE WEBPAGE
    try {
        // removePosition(toBeRemoved)
        var code = editor.getValue()
        let functionToRemove = 'animate()'
        // Define the regular expression pattern to match any variation of animate() function calls
        var animateRegex = /animate\s*\(\s*(?!'ryan'|\"ryan\"|`ryan`|ryan\b)(\d+|[a-zA-Z]+|'[^']*'|"[^"]*"|`[^`]*`)?\s*\)/g
        var crawlerHealthRegex = /\.health\s*(?:(\+|-|\*|\/)?=)?\s*(?:(\d+)|'([^']*)'|"([^"]*)"|`([^`]*)`|([a-zA-Z]+))/
        var energyRegex = /energy\s*(?:(\+|-|\*|\/)?=)?\s*('([^']*)'|"([^"]*)"|`([^`]*)`|(\d+)|([a-zA-Z]+))/
        var baseHealthRegex = /baseHealth\s*(?:(\+|-|\*|\/)?=)?\s*('([^']*)'|"([^"]*)"|`([^`]*)`|(\d+)|([a-zA-Z]+))/

        const crawlerHealthMatch = crawlerHealthRegex.exec(code)    // these are the arrays containing what values the regex detected.
        const energyMatch = energyRegex.exec(code)
        const baseHealthMatch = baseHealthRegex.exec(code)

        code = code.replace(functionToRemove, 'animate(ryan)')
        if (animateRegex.test(code)) {               // avoids animate() exploit
            code = code.replace(animateRegex, '')   // remove all animate() functions together with all possible arguments on the code editor.
        }

        if (crawlerHealthRegex.test(code)) {            // avoids any .health exploit.
            code = code.replace(crawlerHealthRegex, '')
            // displayError(`${crawlerHealthMatch[0]} is not allowed`)
            console.log('nice try.')
        }

        if (energyRegex.test(code)) {                   // avoids energy value exploit.
            code = code.replace(energyRegex, '')
            // displayError(`${energyMatch[0]} is not allowed`)
            console.log('nice try.')
        }

        if (baseHealthRegex.test(code)) {               // avoids baseHealth value exploit.
            code = code.replace(baseHealthRegex, '')
            // displayError(`${baseHealthMatch[0]} is not allowed`)
            console.log('nice try.')
        }

        secretService()     // running in the background.
        // Update the script content
        var scriptContent = `
        cancelAnimationFrame(animateID)
        ${code}     // Insert the user input
        try {
            animate()
        } catch (error) {
            displayError(error)
        }`
        eval(scriptContent)
        runButton.volume = (sfxRange.value / sfxRange.max)
        runButton.play()

    } catch (error) {       // catches the error and displays it on top of the code editor
        displayError(error)
    }
}

const clearEditor = () => {
    editor.setValue(`// CodeCrawlers v1.0.0

function animate() {
  runAnimation(animate)

  // Code goes here
  
}`)
    // Set the cursor position to the end of the comment
    editor.setCursor({ line: 6, ch: 4 })

    // Focus on the editor
    editor.focus()
}