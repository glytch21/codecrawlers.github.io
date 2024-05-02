// toggle light/dark mode function
let darkTheme = JSON.parse(localStorage.getItem('darkTheme'))
const theme = document.body;

const updateTheme = () => {
    if (darkTheme) {
        theme.classList.add('dark-mode');

        const bookIcon = document.querySelector('.book-icon')
        bookIcon.src = '../public/icons2/book-dark.png'
    
        const toggleSwitch = document.querySelector(".toggle-switch");
        toggleSwitch.src = "../public/icons2/darkmode.png"
    } else {
        theme.classList.remove('dark-mode')
        const bookIcon = document.querySelector('.book-icon')
        bookIcon.src = '../public/icons2/book.PNG'
    
        const toggleSwitch = document.querySelector(".toggle-switch");
        toggleSwitch.src = "../public/icons2/lightmode.png"
    }
}
updateTheme()

const toggleTheme = () => {
    theme.classList.toggle('dark-mode');
    
    if (!darkTheme) {
        const bookIcon = document.querySelector('.book-icon')
        bookIcon.src = '../public/icons2/book-dark.png'
    
        const toggleSwitch = document.querySelector(".toggle-switch");
        toggleSwitch.src = "../public/icons2/darkmode.png"

        darkTheme = true
        localStorage.setItem('darkTheme', JSON.stringify(darkTheme))
    } else {
        const bookIcon = document.querySelector('.book-icon')
        bookIcon.src = '../public/icons2/book.PNG'
    
        const toggleSwitch = document.querySelector(".toggle-switch");
        toggleSwitch.src = "../public/icons2/lightmode.png"

        darkTheme = false;
        localStorage.setItem('darkTheme', JSON.stringify(darkTheme))
    }
}

let displayGame = true
const toggleMapOrConsole = () => {
    const gameMap = document.getElementById('game-map')
    const consoleContainer = document.getElementById('console-container')
    const startButton = document.querySelector('.start-button')
    const resumeButton = document.querySelector('.resume-button')

    if (displayGame) {
        consoleContainer.style.display = 'initial'
        gameMap.style.display = 'none'
        startButton.style.display = 'none'
        resumeButton.style.display = 'none'
        displayGame = false

    } else if (!displayGame) {
        consoleContainer.style.display = 'none'
        gameMap.style.display = 'initial'
        startButton.style.display = 'initial'
        resumeButton.style.display = 'initial'
        displayGame = true
    }
}