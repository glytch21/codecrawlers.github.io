let firstLevelFlag = false
let speed = 35

function generateRandomNumber(min, max) {
    // Generate a random decimal number between 0 and 1
    const randomDecimal = Math.random();
  
    // Scale the random decimal to fit the range [min, max]
    const randomInRange = randomDecimal * (max - min + 1) + min;
  
    // Use Math.floor to get the integer value within the range
    const randomNumber = Math.floor(randomInRange);
  
    ypos = randomNumber;
}

const level1 = (quant) => {
    let quantity = quant
    
    if (!firstLevelFlag) {
        firstLevelFlag = true
        for (let i = 0; i < quantity; i++) {
            setTimeout(() => {
                generateRandomNumber(290, 410)      // for ypos
                viruses.push(new Virus('Virus', 1140, ypos, speed, 100)) 
            }, 1000 * i)
        }
    }
}


// FOR RUNNING LEVELS
let animateID2 = 'something'

const runAnimation2 = (animate) => {        // shortened version of requestAnimationFrame with variable assigned
    animateID2 = requestAnimationFrame(animate);
    return animateID2; // If you want to do something with the ID later
}

function runLevel(count) {   // makes this revealable for now
    level1(count)

    cancelAnimationFrame(animateID2)

    function animate() {
        c.clearRect(0, 0, canvas.width, canvas.height)
        runAnimation2(animate)

        spawnVirus()

    }

    animate()
}