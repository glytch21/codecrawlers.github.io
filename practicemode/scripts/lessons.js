const page1PM = `<p>Super <span class="highlight">Good job</span>! on finishing Lesson 1 page 1 and 2: Console and Comments!.</p>`
const page1ConsolePM = `function animate() {
  runAnimation(animate)
  
  spawnCrawlers(500, 350)
}
// DO NOT CHANGE THE CODE ABOVE

// Start Coding here
`

const page2PM = `hahaha`
const page2ConsolePM = `function animate() {
  runAnimation(animate)
  
  spawnCrawlers(500, 350)
}
// DO NOT CHANGE THE CODE ABOVE

// Start Coding here
`

const page3PM = `hahahahaha`
const page3ConsolePM = `function animate() {
  runAnimation(animate)
  
  spawnCrawlers(500, 350)
}
// DO NOT CHANGE THE CODE ABOVE

// Start Coding here
`
















const pagesPM = [page1PM, page2PM, page3PM]
const consolePagesPM = [page1ConsolePM, page2ConsolePM, page3ConsolePM]

const guideArrayPM = pagesPM
const consoleArrayPM = consolePagesPM

const guideContentPM = document.querySelector('.guide-content')
const paginationPM = document.querySelector('.pagination')

const consoleContentPM = document.getElementById('editor')

let pagePM = JSON.parse(localStorage.getItem('pagePM')) || 0

const updateContent = () => {
    pagePM = JSON.parse(localStorage.getItem('pagePM')) || 0
    // guideContentPM.innerHTML = guideArrayPM[pagePM]
    paginationPM.innerHTML = `${pagePM + 1} / ${guideArrayPM.length}`

    consoleContentPM.innerHTML = consoleArrayPM[pagePM] || ''
}

updateContent()

const nextPage = () => {
    if (pagePM < guideArrayPM.length - 1) {
        pagePM++
        localStorage.setItem('pagePM', JSON.stringify(pagePM))
    } else {
        return;
    }
    updateContent()
    codeEditor()
}

const previousPage = () => {
    if (pagePM > 0) {
        pagePM--
        localStorage.setItem('pagePM', JSON.stringify(pagePM))
    } else {
        return
    }
    updateContent()
    codeEditor()
}

const redirectTutorial = () => {
    window.location.href = '../tutorial/tutorial.html'
}