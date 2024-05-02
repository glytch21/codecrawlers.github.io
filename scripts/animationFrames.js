let animateID3 = 'something'
const spliceAudio = new Audio('../../public/audio/sfx/crawler-dying.wav')

const runAnimation3 = (animate) => {        // shortened version of requestAnimationFrame with variable assigned
    animateID3 = requestAnimationFrame(animate);
    return animateID3; // If you want to do something with the ID later
}

cancelAnimationFrame(animateID3)
const secretService = () => {
    runAnimation3(secretService)

    crawlers.forEach((crawler, i) => {
        crawler.draw()

        if (crawler.health <= 0) {  // if crawlers health is 0, that crawler gets spliced.
            xposParams = crawler.xpos
            yposParams = crawler.ypos
            removeFromCode(`spawnCrawlers(${xposParams}, ${yposParams})`)   // removes the argument inside and updates the code editor
            toBeRemoved.push([xposParams, yposParams])      // push the to be removed spawnPositions to an array
            
            crawlers.splice(i, 1)
            
            spliceAudio.play()  // crawler death audio
            removePosition(toBeRemoved)
        }
    })

    logicBombs.forEach((logicBomb, i) => {
        if (logicBomb.health <= 0) {
            logicBombs.splice(i, 1)

            // logic bomb death audio
        }
    })
}