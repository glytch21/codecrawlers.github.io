// Function to append log messages to the console-like display
let autoScroll = true;
const appendToConsole = (message, className, values) => {
    const consoleElement = document.getElementById('console');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    if (className) {
      messageElement.classList.add(className);
    }

    // Add event listener to show object properties or array values on click
    messageElement.addEventListener('click', function() {
        if (messageElement.textContent === message && message !== null) {
            // DISPLAY IT'S VALUES
            messageElement.textContent = values;

        } else if (messageElement.textContent === values) {
            // DISPLAY THE INITIAL MESSAGE
            messageElement.textContent = message
        }
    });

    consoleElement.appendChild(messageElement);

    if (autoScroll) {
        consoleElement.scrollTop = consoleElement.scrollHeight; // Scroll to bottom
    }

    consoleElement.addEventListener('wheel', function(event) {
        if (event.deltaY < 0) {
            // If scrolling up, remove auto-scrolling behavior
            autoScroll = false
        } else {
            // nandemonai...
        }
    });
}
  


// Override console.log to redirect its output
const originalLog = console.log;

console.log = function(...args) {
    let combinedLog = '';
    let classNames = args.map(item => {
        if (Array.isArray(item)) {
            return item[0]?._name ? `${item[0]._name} (${item.length})` : `Array (${item.length})`;
        } else if (typeof item === 'object') {
            return `Object (${Object.keys(item).length})`;
        } else {
            return item;
        }
    }).join(' ');

    args.forEach((arg, index) => {
        let logArg;
        if (Array.isArray(arg)) {
            logArg = '[' + arg.map(item => JSON.stringify(item)).join(', ') + ']';
        } else if (typeof arg === 'object') {
            logArg = JSON.stringify(arg);
        } else {
            logArg = arg;
        }
        combinedLog += logArg;
        if (index !== args.length - 1) {
            combinedLog += ' ';
        }
    });

    originalLog(combinedLog); // Call the original console.log once with the combined log
    appendToConsole(classNames, 'log', combinedLog);
};

// Override console.error to redirect its output
const originalError = console.error;
console.error = function(...args) {
    originalError(...args); // Call the original console.error
    appendToConsole(args.join(' '), 'error'); // Append the error message to the console-like display with an error class
};
  
// Override console.warn to redirect its output
const originalWarn = console.warn;
console.warn = function(...args) {
    originalWarn(...args); // Call the original console.warn
    appendToConsole(args.join(' '), 'warning'); // Append the warning message to the console-like display with a warning class
};
  
// Function to handle uncaught errors and display them
window.onerror = function(message, source, lineno, colno, error) {
    appendToConsole(message, 'error'); // Append the error message to the console-like display with an error class
};

// Function to toggle the visibility of the console
// const toggleConsole = () => {
//     const consoleElement = document.getElementById('console-container');
//     consoleElement.style.height = consoleElement.style.height === '150px' ? '0px' : '150px';

//     // Automatically scroll the page down
//     if (consoleElement.style.height === '150px') {
//         window.scrollBy({
//             top: 150 // Scroll down by the height of the viewport
//         });
//     }

//     const logUpdatedNotification = document.querySelector('.log-updated')
//     logUpdatedNotification.style.display = 'none'
//     logUpdatedNotification.classList.remove('bounce-in-top')
// }

const clearConsole = () => {
    const consoleElement = document.getElementById('console');
    consoleElement.innerHTML = ''; // Clear all child elements
};

// Override console.clear to clear the pseudo-console display
const originalClear = console.clear;
console.clear = function() {
    originalClear(); // Call the original console.clear
    clearConsole(); // Clear the pseudo-console display
};