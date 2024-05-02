const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')

// Set the canvas's width and height.
canvas.width = 1008
canvas.height = 704

const centerX = canvas.width / 2
const centerY = canvas.height / 2

const background = () => {
    c.beginPath()
        // c.fillStyle = '#222222'
        // c.fillRect(0, 0, canvas.width, canvas.height)
        c.drawImage(mapImage, 0, 0, canvas.width, canvas.height)
    c.closePath()

    // Clear the canvas
    c.clearRect(0, 0, canvas.width, canvas.height)

    // Draw the current frame of the GIF
    c.drawImage(mapImage, 0, 0, canvas.width, canvas.height)
}