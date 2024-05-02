// selectors
const bodyElement = document.body;


// state
const presentTheme = localStorage.getItem('theme');


// on mount (start of the page/reload/automatic run)
if (presentTheme) {
    document.body.classList.add(presentTheme);
}


// handlers/functions
function toggleTheme() {
    const theme = document.body;
    theme.classList.toggle('dark-mode');
}

// events
document.querySelector('.cc-logo')
    .addEventListener('click', () => {
        toggleTheme();

        if (bodyElement.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.removeItem('theme');
        }
    });

