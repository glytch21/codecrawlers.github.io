var scale = 1
var gameMapContainer = document.getElementById("game-map-container")
var gameMap = document.getElementById('game-map')

// Listen for mouse wheel scroll
gameMapContainer.addEventListener("wheel", function (e) {
    // Check if the Ctrl key is pressed
    if (e.altKey) {
        e.preventDefault()
        var delta = e.deltaY || e.detail || e.wheelDelta

        if (delta > 0) {
            // Scroll down, zoom out
            scale -= 0.1
        } else {
            // Scroll up, zoom in
            scale += 0.1
        }

        updateTransform()
        // updateScrollableArea() // Update the scrollable area after zooming
    }
})

const updateTransform = () => {
    // Limit the zoom level to avoid zooming too much in or out
    scale = Math.min(Math.max(scale, 0.1), 1.5)
    gameMap.style.transform = "scale(" + scale + ")"
}

const updateScrollableArea = () => {
    // Calculate the scaled dimensions of the map
    var mapWidth = gameMap.offsetWidth * scale
    var mapHeight = gameMap.offsetHeight * scale

    // Set the scrollable area based on the scaled dimensions
    gameMapContainer.style.width = mapWidth + "px"
    gameMapContainer.style.height = mapHeight + "px"
}

// Call the updateScrollableArea function initially
updateScrollableArea()
