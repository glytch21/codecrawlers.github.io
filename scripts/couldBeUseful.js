// Placement Tiles Data Code------------------------------------------------------------------------------------------------------------------------
const placementTilesData2D = []              // step 3. Building Placement using Placement Tiles

for (let i = 0; i < placementTilesData.length; i += 63) {             // the magic number is 20 since each row of the map has 20 columns of 64pixel squares, so its a "20 x 12" map. 
    placementTilesData2D.push(placementTilesData.slice(i, i + 63))    // so this formula pushes an array with 20 values repeatedly until 12 arrays are formed inside the array which is a "2D Array".
}    // UNCOMMENT THIS IF YOU WANT TO BRING BACK THE HIGHLIGHT 16x16 BOXES AGAIN.

const placementTiles = []

placementTilesData2D.forEach((row, y) => {
    row.forEach((symbol, x) => {     // this doesn't have to be "1" in the array, it just became 1 because it's tile number 1 that was placed on that coordinate on tilemap.
        if (symbol === 1) {    // So by that not needing to be 1, we could change that to any other number but there's also no need to. just a reminder.
            // add building placement tile here.
            placementTiles.push(new PlacementTile({
                position: {     // This whole calculation works by putting placement tile positions on an array.
                    x: x * 16,
                    y: y * 16
                }
            }))
        }
    })
})

const mouse = {
    x: undefined,
    y: undefined
}

canvas.addEventListener('mousemove', (event) => {   // this where mouse.x and mouse.y is defined
    const rect = canvas.getBoundingClientRect()
    mouse.x = event.clientX - rect.left
    mouse.y = event.clientY - rect.top             // this is how to get the x and y axis on the gameMap itself.

    activeTile = null
    for (let i = 0; i < placementTiles.length; i++) {   // we used this loop instead of forEach because forEach doesn't support "break" yet.
        const tile = placementTiles[i]

        if (mouse.x > tile.position.x && mouse.x < tile.position.x + tile.size &&
            mouse.y > tile.position.y && mouse.y < tile.position.y + tile.size) {
                activeTile = tile
                break
            }
    }
})

placementTiles.forEach(tile => {    // This was on the animate() function
    tile.update(mouse)
})
// -------------------------------------------------------------------------------------------------------------------------------------------------


// THIS CODE IS FOR SINGLE TARGETING VIRUS ONLY-----------------------------------------------------------------------------------------------------
const spawnCrawlers = () => {
    crawlers.forEach((crawler, i) => {
        crawler.update()
        crawler.target = null
        const validViruses = viruses.filter(virus => {
            const xDifference = virus._xpos - crawler._xpos   // This is to calculate the distance between the projectile and the targeted virus.
            const yDifference = virus._ypos - crawler._ypos
            const distance = Math.hypot(xDifference, yDifference)

            return distance < virus._radius + crawler._radius
        })
        crawler.target = validViruses[0]    // Target the virus that's first in line. After the target gets eliminated, the second one becomes the new first in line, and so on...

        for (let i = crawler.projectiles.length - 1; i >= 0; i--) {
            const projectile = crawler.projectiles[i]
        
            projectile.update()
            
            const xDifference = projectile.virus.xpos - projectile.position.x   // This is to calculate the distance between the projectile and the targeted virus.
            const yDifference = projectile.virus.ypos - projectile.position.y
            const distance = Math.hypot(xDifference, yDifference)

            if (distance < projectile.virus.radius + projectile.radius) {
                crawler.projectiles.splice(i, 1)    // Projectiles disappear one after the other after making contact with the virus.
            }
        }
    })
    updateColors() // to update color of the radius
}
// -------------------------------------------------------------------------------------------------------------------------------------------------