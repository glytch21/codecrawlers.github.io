const updateScript = () => {        // THIS RUNS THE CODE INPUTTED IN THE CODE EDITOR ON THE WEBPAGE
    var code = editor.getValue()

    var scriptContent = `
    ${code}     // Insert the user input`

    eval(scriptContent)
}

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
