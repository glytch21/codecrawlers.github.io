let animateID2 = 'something'

const runAnimation2 = (animate) => {        // shortened version of requestAnimationFrame with variable assigned
    animateID2 = requestAnimationFrame(animate);
    return animateID2; // If you want to do something with the ID later
}

function endlessAlgorithm() {   // makes this revealable for now
    const endlessInterval = setInterval(() => {
        level1(endlessQuantity)
    }, 2000)

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
}