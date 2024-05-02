xpos = ''
ypos = ''

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

const start = document.querySelector('.start-button')
const startButton = () => {
    hasStarted = true
    runLevel(virusQuantity)   // run level1: spawn 3 viruses.
    updateScript()
    start.style.display = 'none'
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

        if (!FJA[0].firewallsJudgementAvailable) {       // if there is an instance of FJ. run this code.
            FJA[0].resume()
        }
    }
}

const updateScript = () => {        // THIS RUNS THE CODE INPUTTED IN THE CODE EDITOR ON THE WEBPAGE
    try {
        if (currentLevel === 1 && (currentIndex === 45 || currentIndex === 50)){
            openDialog()
        }

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