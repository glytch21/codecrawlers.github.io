// THIS IS THE FUNCTION THAT MAKES THE CRAWLERS REACT TO THE PRESENCE OF THE VIRUSES WHEN THEY ARE INSIDE THEIR RANGE-------------------------------
let getDistance = function (xpos1, ypos1, xpos2, ypos2) {    // pythagorean theorem formula for calculating the distance of A from B
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


// Game Over Function-------------------------------------------------------------------------------------------------------------------------------
let gameoverFlag = false
const gameOver = (baseHealth) => {
    let imgElement = document.querySelector('.game-over')
    if (baseHealth <= 0) {
        imgElement.classList.add('active');
        if (imgElement.classList.contains('active') && !gameoverFlag) {
            // session cookie -START
            let saveData = JSON.parse(localStorage.getItem('saveData')) || [];

            const getSessionCookie = () => {
                const cookie = document.cookie
                    .split("; ")
                    .find((row) => row.startsWith("sessionId="))
                    ?.split("=")[1];
                return cookie || "";
            };

            const cookie = getSessionCookie()
            const storedData = saveData.find(data => data.id === parseInt(cookie));
            // session cookie -END
            
            if (storedData.highscore <= score) { 
                storedData.highscore = score // update score
                localStorage.setItem('saveData', JSON.stringify(saveData)); // update storage
            }

            if (storedData.highscorekills <= terminatedVirus){
                storedData.highscorekills = terminatedVirus
                localStorage.setItem('saveData', JSON.stringify(saveData)); // update storage
            }

            storedData.overallkills += terminatedVirus
            localStorage.setItem('saveData', JSON.stringify(saveData)); // update storage

            gameoverFlag = true
            cancelAnimationFrame(animateID)
            energy = 0
            crawlers.length = 0
        }

    } else {
        
    }
}

// -------------------------------------------------------------------------------------------------------------------------------------------------