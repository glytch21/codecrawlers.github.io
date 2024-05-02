let firstLevelFlag = false
let secondLevelFlag = false
let endlessQuantity = 1     // Used in endless.js
let speed = 50

const newWave = new Audio('../public/audio/sfx/new-wave.mp3')

const level1 = (quant) => {
    let quantity = quant
    
    if (!firstLevelFlag) {
        firstLevelFlag = true
        newWave.volume = (sfxRange.value / sfxRange.max)
        newWave.play()
        for (let i = 0; i < quantity; i++) {
            setTimeout(() => {
                randomSpawnAlgorithm()
                randomNumber()
                viruses.push(new Virus('Virus', xpos, ypos, speed, 100, 100))
            }, 1000 * i)
        }
        for (let i = 0; i < quantity; i++) {       // NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW 
            setTimeout(() => {
                randomSpawnAlgorithm()
                randomNumber()
                malwares.push(new MalwareVirus('Malware', xpos, ypos, speed, 80, 80))
            }, 1000 * i)
        }
        for (let i = 0; i < quantity; i++) {       // NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW 
            setTimeout(() => {
                randomSpawnAlgorithm()
                randomNumber()
                melees.push(new MeleeVirus('Melee', xpos, ypos, speed, 150, 150))
            }, 1000 * i)
        }
        for (let i = 0; i < quantity; i++) {       // NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW 
            setTimeout(() => {
                randomSpawnAlgorithm()
                randomNumber()
                logicBombs.push(new LogicBombVirus('LogicBomb', xpos, ypos, speed, 60, 60))
            }, 1000 * i)
        }
    } else if (!secondLevelFlag && firstLevelFlag && viruses.length <= 0) {
        // Second Level
        endlessQuantity++
        waveNumber++
        updateWaveElement()
        secondLevelFlag = true
        for (let i = 0; i < quantity; i++) {
            setTimeout(() => {
                randomSpawnAlgorithm()
                randomNumber()
                viruses.push(new Virus('Virus', xpos, ypos, speed, 100, 100)) 
            }, 1000 * i)
        }

        for (let i = 0; i < quantity; i++) {
            setTimeout(() => {
                randomSpawnAlgorithm()
                randomNumber()
                viruses.push(new Virus('Virus', xpos, ypos, speed, 100, 100)) 
            }, 1000 * i)
        }
    } else if (secondLevelFlag && firstLevelFlag && viruses.length <= 0) {
        // Endless Level
        endlessQuantity++
        waveNumber++
        updateWaveElement()
        for (let i = 0; i < quantity; i++) {
            setTimeout(() => {
                randomSpawnAlgorithm()
                randomNumber()
                viruses.push(new Virus('Virus', xpos, ypos, speed, 100, 100)) 
            }, 1000 * i)
        }

        for (let i = 0; i < quantity; i++) {
            setTimeout(() => {
                randomSpawnAlgorithm()
                randomNumber()
                viruses.push(new Virus('Virus', xpos, ypos, speed, 100, 100)) 
            }, 1000 * i)
        }
    }
}