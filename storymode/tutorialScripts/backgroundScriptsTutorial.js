// CODEMIRROR SCRIPT SO IT WORKS--------------------------------------------------------------------------------------------------------------------

var editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
    mode:  "javascript",
    theme: "darcula",
    smartIndent: true,
    tabSize: 2,
    lineNumbers: true,
    hintOptions: { completeSingle: false },
    autoCapitalize: true,
    indentUnit: 2,
    styleActiveLine: {nonEmpty: true}, // Add this line to style the active line
    lineWrapping: true,
    viewportMargin: 11,
    indentWithTabs: true,
    electricChars: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    showCursorWhenSelecting: true,
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
})

editor.on("inputRead", function(editor, change) {
    if (change.origin !== "complete") {
      CodeMirror.commands.autocomplete(editor, null, { completeSingle: false })
    }
  })

editor.getWrapperElement().style.backgroundColor = "#111"

// -------------------------------------------------------------------------------------------------------------------------------------------------


// Corect editor focus------------------------------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    editor.focus()
    editor.setCursor({ line: 6, ch: 4 }) // Set the cursor to line 2
})

// -------------------------------------------------------------------------------------------------------------------------------------------------


// THIS IS THE FUNCTION THAT MAKES THE CRAWLERS REACT TO THE PRESENCE OF THE VIRUSES WHEN THEY ARE INSIDE THEIR RANGE-------------------------------

let getDistance = function(xpos1, ypos1, xpos2, ypos2) {    // pythagorean theorem formula for calculating the distance of A from B
    let result = Math.sqrt(Math.pow(xpos2 - xpos1, 2) + Math.pow(ypos2 - ypos1, 2))
    return result
}

let isVirusFlagged = false
let isMalwareFlagged = false
let isSpywareFlagged = false
let isMeleeFlagged = false
let isLogicBombFlagged = false

let idleRadiusColor = 'skyblue'
let activeRadiusColor = 'red'

const updateColors = () => {
    for (let i = 0; i < crawlers.length; i++) {
        let anyVirusWithinRadius = false

        // Loop for viruses
        for (let j = 0; j < viruses.length; j++) {
            const distance = getDistance(viruses[j].xpos, viruses[j].ypos, crawlers[i].xpos, crawlers[i].ypos)
            const combinedRadius = crawlers[i].radius + viruses[j].radius

            if (distance < combinedRadius) {
                anyVirusWithinRadius = true
                if (!isVirusFlagged) {
                    isVirusFlagged = true
                    enemies.push(viruses)
                }
            }
        }

        // Loop for malwares
        for (let k = 0; k < malwares.length; k++) {
            const distance = getDistance(malwares[k].xpos, malwares[k].ypos, crawlers[i].xpos, crawlers[i].ypos)
            const combinedRadius = crawlers[i].radius + malwares[k].radius

            if (distance < combinedRadius) {
                anyVirusWithinRadius = true
                if (!isMalwareFlagged) {
                    enemies.push(malwares)
                    isMalwareFlagged = true
                }
            }
        }

        // Loop for spywares
        for (let l = 0; l < spywares.length; l++) {
            const distance = getDistance(spywares[l].xpos, spywares[l].ypos, crawlers[i].xpos, crawlers[i].ypos)
            const combinedRadius = crawlers[i].radius + spywares[l].radius

            if (distance < combinedRadius) {
                anyVirusWithinRadius = true
                if (!isSpywareFlagged) {
                    enemies.push(spywares)
                    isSpywareFlagged = true
                }
            }
        }

        // Loop for melees
        for (let m = 0; m < melees.length; m++) {
            const distance = getDistance(melees[m].xpos, melees[m].ypos, crawlers[i].xpos, crawlers[i].ypos)
            const combinedRadius = crawlers[i].radius + melees[m].radius

            if (distance < combinedRadius) {
                anyVirusWithinRadius = true
                if (!isMeleeFlagged) {
                    enemies.push(melees)
                    isMeleeFlagged = true
                }
            }
        }

        // Loop for logic bombs
        for (let n = 0; n < logicBombs.length; n++) {
            const distance = getDistance(logicBombs[n].xpos, logicBombs[n].ypos, crawlers[i].xpos, crawlers[i].ypos)
            const combinedRadius = crawlers[i].radius + logicBombs[n].radius

            if (distance < combinedRadius) {
                anyVirusWithinRadius = true
                if (!isLogicBombFlagged) {
                    enemies.push(logicBombs)
                    isLogicBombFlagged = true
                }
            }
        }

        // Set the color based on the flag
        crawlers[i].color = anyVirusWithinRadius ? activeRadiusColor : idleRadiusColor
    }
}

// -------------------------------------------------------------------------------------------------------------------------------------------------


// Update Resources Functions-------------------------------------------------------------------------------------------------------------------------------
const baseHealthElement = document.querySelector('.game-over-health')
const updateGameOverHealth = () => {
    baseHealthDisplay = baseHealth
    baseHealth <= 0 ? baseHealthDisplay = 0 : baseHealthDisplay = baseHealth
    baseHealthElement.innerHTML = baseHealthDisplay
}

const energyElement = document.querySelector('.energy-resource')
const updateEnergyResource = () => {
    energyElement.innerHTML = energy
}

// -------------------------------------------------------------------------------------------------------------------------------------------------


// Game Over Function-------------------------------------------------------------------------------------------------------------------------------
let simulationCompleteFlag = false
const simulationComplete = () => {
    let imgElement = document.querySelector('.simulation-complete')
    let nextLessonButton = document.querySelector('.next-lesson')

    if (viruses.length === 0) {
        imgElement.classList.add('active')
        nextLessonButton.classList.add('active')
        if (imgElement.classList.contains('active') && !simulationCompleteFlag) {
            const bgm = document.getElementById('backgroundAudio')
            bgm.pause()

            // simulation complete audio
            simulationCompleteFlag = true
            if(currentLevel === 1){
            openDialog()
            }
        }
    }
}

// -------------------------------------------------------------------------------------------------------------------------------------------------


// Game Over Function-------------------------------------------------------------------------------------------------------------------------------
let gameoverFlag = false
const gameOverAudio = new Audio('../public/audio/sfx/losing.wav')
const gameOver = (baseHealth) => {
    let imgElement = document.querySelector('.game-over')
    if (baseHealth <= 0) {
        imgElement.classList.add('active')
        if (imgElement.classList.contains('active') && !gameoverFlag) {     // this is so that the gameover audio only runs 1 time.
            const bgm = document.getElementById('backgroundAudio')
            bgm.pause()

            gameOverAudio.volume = 0.1
            gameOverAudio.play()    // game over audio
            gameoverFlag = true
            cancelAnimationFrame(animateID)
            energy = 0
            crawlers.length = 0
            spliceAudio.play()
            updateEnergyResource()
        }

    } else {
        imgElement.classList.remove('active');  // LAMAW
    }
}

// -------------------------------------------------------------------------------------------------------------------------------------------------


// Scroll Below on first error----------------------------------------------------------------------------------------------------------------------
let firstError = false
const errorScroll = () => {
    if (!firstError) {
        window.scrollBy({
            top: 25 // Scroll down by the height of the first error logged
        });

        firstError = true
    }
}
// ------------------------------------------------------------------------------------------------------------------------------------------------


// Log Notification--------------------------------------------------------------------------------------------------------------------------------
const logNotification = () => {
    const logUpdatedNotification = document.querySelector('.log-updated')
    logUpdatedNotification.style.display = 'none'
    logUpdatedNotification.classList.remove('bounce-in-top')

    setTimeout(() => {
        logUpdatedNotification.style.display = 'initial'
        logUpdatedNotification.classList.add('bounce-in-top')
    }, 1)
}
// -------------------------------------------------------------------------------------------------------------------------------------------------


// Button functions---------------------------------------------------------------------------------------------------------------------------------
// STORY MODE LEVEL 1 to LEVEL 2
let homeModalDisplay = false
const nextLesson = () => {
    // session cookie -START
    let saveData = JSON.parse(localStorage.getItem('saveData')) || [];
  
    const getSessionCookie = () => {
      const cookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("sessionId="))
        ?.split("=")[1];
      return cookie || "";
    };
  
    const cookie = getSessionCookie();
    const storedDataIndex = saveData.findIndex(data => data.id === parseInt(cookie));
  
    if (storedDataIndex !== -1 || storedDataIndex.storylevel === 0) {
      // Increment storedData.storylevel
      saveData[storedDataIndex].storylevel++;
      
      // Update localStorage
      localStorage.setItem('saveData', JSON.stringify(saveData));

      
    }
    window.location.href = './level2.html'; 
    // session cookie -END
  };
  

const homeModal = () => {
    const homeModal = document.querySelector('.are-you-sure-modal')

    if (!homeModalDisplay) {
        homeModal.style.display = 'flex'
        homeModalDisplay = true
    } else if (homeModalDisplay) {
        homeModal.style.display = 'none'
        homeModalDisplay = false
    }
}

const homeButton = () => {
    window.location.href = '../pages/modeSelect.html'
}

let gifCoordinatesVisible = false
const viewCoordinates = () => {
    const gifCoordinates = document.querySelector('.gif-coordinates')
    
    if (!gifCoordinatesVisible) {
        gifCoordinates.style.display = 'initial'
        gifCoordinatesVisible = true

    } else if (gifCoordinatesVisible) {
        gifCoordinates.style.display = 'none'
        gifCoordinatesVisible = false
    }
}

const soundOnOff = () => {
    const onSound = document.querySelector('.onSound')
    const offSound = document.querySelector('.offSound')

    if (bgmStatus) {
        bgm.pause()
        bgmStatus = false
        onSound.style.display = 'none'
        offSound.style.display = 'initial'

    } else if (!bgmStatus) {
        bgm.play()
        bgmStatus = true
        onSound.style.display = 'initial'
        offSound.style.display = 'none'
    }
}

let settingsModal = false
const settingsButton = () => {
    const settings = document.querySelector('.settings-modal')
    const settingsBackground = document.querySelector('.settings-modal-background')

    if (!settingsModal) {
        settings.style.display = 'flex'
        settingsBackground.style.display = 'initial'
        settingsModal = true

    } else if (settingsModal === true) {
        settings.style.display = 'none'
        settingsBackground.style.display = 'none'
        settingsModal = false
    }
}   

// -------------------------------------------------------------------------------------------------------------------------------------------------


// Settings Button Functions------------------------------------------------------------------------------------------------------------------------
const onSound = document.querySelector('.onSound')
const offSound = document.querySelector('.offSound')

const musicRange = document.getElementById('music-range')
const sfxRange = document.getElementById('sfx-range')


const spawnAudio = new Audio('../public/audio/sfx/Laser.wav')

bgm.volume = JSON.parse(localStorage.getItem('bgmVolume')) // || musicRange.value / musicRange.max
document.getElementById('music-range').value = JSON.parse(localStorage.getItem('bgmVolume'))


gameOverAudio.volume = JSON.parse(localStorage.getItem('gameOverAudioVolume')) // || sfxRange.value / sfxRange.max
spliceAudio.volume = JSON.parse(localStorage.getItem('spliceAudioVolume')) // || sfxRange.value / sfxRange.max
spawnAudio.volume = JSON.parse(localStorage.getItem('spawnAudioVolume')) // || sfxRange.value / sfxRange.max
document.getElementById('sfx-range').value = JSON.parse(localStorage.getItem('gameOverAudioVolume')) // Just take 1 of the sfx volumes since all 3 are the same anyway

musicRange.addEventListener('input', function() {
    bgm.volume = musicRange.value / musicRange.max; // Set volume based on range input value
    localStorage.setItem('bgmVolume', JSON.stringify(bgm.volume))

    if (bgm.volume === 0) {
        offSound.style.display = 'initial'
        onSound.style.display = 'none'
    } else if (bgm.volume > 0) {
        onSound.style.display = 'initial'
        offSound.style.display = 'none'
    }
});

sfxRange.addEventListener('input', () => {
    gameOverAudio.volume = sfxRange.value / sfxRange.max
    localStorage.setItem('gameOverAudioVolume', JSON.stringify(gameOverAudio.volume))

    spliceAudio.volume = sfxRange.value / sfxRange.max
    localStorage.setItem('spliceAudioVolume', JSON.stringify(spliceAudio.volume))

    spawnAudio.volume = sfxRange.value / sfxRange.max
    localStorage.setItem('spawnAudioVolume', JSON.stringify(spawnAudio.volume))
})

let codeEditorFontSize = JSON.parse(localStorage.getItem('codeEditorFontSize'))
document.querySelector('.CodeMirror').style.fontSize = `${codeEditorFontSize}px`

const updateFontDisplay = () => {
    fontDisplay = document.querySelector('.font-size-display')
    fontDisplay.innerHTML = `${codeEditorFontSize}px`
    localStorage.setItem('codeEditorFontSize', JSON.stringify(codeEditorFontSize))
}
updateFontDisplay() // display the correct value of the font in settings early on.

const reduceFontSize = () => {
    codeEditorFontSize--
    document.querySelector('.CodeMirror').style.fontSize = `${codeEditorFontSize}px`
    updateFontDisplay()
}

const increaseFontSize = () => {
    codeEditorFontSize++
    document.querySelector('.CodeMirror').style.fontSize = `${codeEditorFontSize}px`
    updateFontDisplay()
}

let visionRadiusActive = JSON.parse(localStorage.getItem('visionRadiusActive'))
const visionRadius = document.querySelector('.check')

const updateVisionRadius = () => {
    if (visionRadiusActive) {
        idleRadiusColor = 'skyblue'
        activeRadiusColor = 'red'
        
        visionRadius.style.display = 'initial'
        
    } else if (!visionRadiusActive) {
        idleRadiusColor = 'transparent'
        activeRadiusColor = 'transparent'
        
        visionRadius.style.display = 'none'
    }
}
updateVisionRadius()

const toggleVisionRadius = () => {
    
    if (visionRadiusActive) {
        idleRadiusColor = 'transparent'
        activeRadiusColor = 'transparent'
        
        visionRadius.style.display = 'none'
        visionRadiusActive = false
        
    } else if (!visionRadiusActive) {
        idleRadiusColor = 'skyblue'
        activeRadiusColor = 'red'
        
        visionRadius.style.display = 'initial'
        visionRadiusActive = true
    }
    localStorage.setItem('visionRadiusActive', JSON.stringify(visionRadiusActive))
}
// -------------------------------------------------------------------------------------------------------------------------------------------------