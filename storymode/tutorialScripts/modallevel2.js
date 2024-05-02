// Array of texts for the dialog
const dialogTexts = [
    /*0*/   'Welcome back, Creator. It has been a while...',
    /*1*/   'It appears that you required our aid in eliminating the presence of these malicious software entities.',
    /*2*/   'Allow me to assist you in refreshing your memory on how to utilize, us, the <strong>Crawlers</strong>.',
    /*3*/   'The highlighted button, on the bottom-right of your screen, is the <strong>HOME</strong> button.',
    /*4*/   'It allows you to navigate to the main menu.',
    /*5*/   'The button that is next to the <strong>HOME</strong> is the <strong>COORDINATES</strong>.',
    /*6*/   'This displays the X - Axis and the Y - Axis of the map.',
    /*7*/   'You will be needing this a lot to specifically pinpoint where you want to place your <strong>CRAWLERS</strong>.',
    /*8*/   'Next up, is the <strong>Mute/Unmute</strong> button.',
    /*9*/   'We created this specifically for you, making it easily accessible, as we understand your need to focus and mute the music.',
    /*10*/   'The last button is the <strong>SETTINGS</strong>.',
    /*11*/   "It allows you to change the volume of the sound effects (SFX) or the music if you don't wish to mute the music.",
    /*12*/   'It also has a function to increase/decrease your font size depending on your preference.',
    /*13*/   'An important aspect that is in the settings is the toggling of the Visual Radius. It allows you to see the range of your Crawlers.',
    /*14*/   "Now, let me explain to you what are the large boxes that takes up almost all the space on your screen.",
    /*15*/   "This is the < strong>CODESPACE</strong>.",
    /*16*/   "The <strong>CODESPACE</strong> is where you'll spend your precious time programming your <strong>CRAWLERS</strong>.",
    /*17*/   "To refresh your memory, <strong>CRAWLERS</strong> are the anti-virus units you created with the goal to eradicate malwares. <strong>CRAWLERS</strong> can be controlled using codes or <strong>scripts</strong> you wrote in the the <strong>CODESPACE.</strong>",
    /*18*/   "A vast diversity of <strong>CRAWLERS</strong> are waiting for you while completing the <strong>STORY MODE</strong>.",
    /*19*/   "To view the battlefield, we have the <strong>GAME MAP</strong>.",
    /*20*/   "You can't directly interact with elements within the <strong>GAME MAP</strong>. Instead, You have the ability to influence and interact with the game environment indirectly through the <strong>CODESPACE</strong>.",
    /*21*/   "The <strong>GAME MAP</strong> is where you will see how the <strong>CRAWLERS</strong> are following your given code or scripts.",
    /*22*/   "Majority of the time, you will be shown the <strong>ENERGY</strong> resource, <strong>HEALTH</strong> indicator, and a <strong>MEMORY</strong> module inside the <strong>GAME MAP</strong>.",
    /*23*/   "Let me explain and show you one by one.",
    /*24*/   "In the <strong>GAME MAP</strong>. at the upper-right is the <strong>ENERGY</strong> resource. In order to activate a <strong>CRAWLER, you will need <strong>ENERGY</strong>.",
    /*25*/   "The heart icon next to the <strong>ENERGY</strong> resource is the <strong>HEALTH</strong> of the <strong>MEMORY</strong>.",
    /*26*/   "The <strong>MEMORY</strong> is your base. This is the target of the malwares, also called the <strong>VIRUS</strong>.",
    /*27*/   "Your goal is to protect the <strong>MEMORY</strong> from the <strong>VIRUS</strong> using your <strong>CRAWLERS</strong> until the end.",
    /*28*/   "Now, let's talk about the <strong>VIRUS</strong>...",
    /*29*/   "While you were gone, we dedicated our time into studying all the types of <strong>VIRUS</strong>. They all have something in common...",
    /*30*/   "The <strong>VIRUS'</strong> greatest weakness are their predictability. They all follow the <strong>TRACES</strong>...",
    /*31*/   "<strong>TRACES</strong> are what's commonly known as the circuit. They are the path that leads to the <strong>MEMORY</strong>.",
    /*32*/   "With this information, we can form a strong defense strategy to counter their attack.",
    /*33*/   "Before we develop a defense strategy, It is important that I show you the updates we made while you were away.",
    /*34*/   "Let's start at the <strong>CLEAR</strong> button.",
    /*35*/   "The <strong>CLEAR</strong> button reset your <strong>CODESPACE</strong>, so BE CAREFUL using it.",
    /*36*/   "The <strong>RUN</strong> button acts as the injection. It activates <strong>CRAWLERS</strong> or injects your code or scripts to the brain of your <strong>CRAWLERS</strong>.",
    /*37*/   "The <strong>RUN</strong> button can also be used to run codes in the <strong>CONSOLE</strong>.",
    /*38*/   "The <strong>CONSOLE</strong> is located at the bottommost-left of your screen. It is where the system will display your errors.",
    /*39*/   "You can also log things on the <strong>CONSOLE</strong> using the function, 'console.log()', but we'll talk about it later.",
    /*40*/   "Whew! That was a lot to cover. I know you're excited to try the improved <strong>CODECRAWLERS</strong> so let's get started.",
    /*41*/   "To create a crawler in the <strong>GAME MAP</strong>, write the spawnCrawlers(x, y) function inside the <strong>CODEBASE</strong>. There's an indicator where you will type the function.",
    /*42*/   "The spawnCrawlers(x, y) function accepts x-axis and a y-axis, so you would need to constantly toggle the <strong>COORDINATES</strong> button whenever creating a crawler.",
    /*43*/   "For the sake of this lesson, let's use 250 for the x-axis and 350 for the y-axis.",
    /*44*/   "I logged in the function in the <strong>CONSOLE</strong> if ever you're having a hard time remembering it, and don't forget to use the <strong>RUN</strong> button.",
    /*45*/   "You have now created a new <strong>CRAWLER</strong>, but right now it is on standby mode.",
    /*46*/   "You would need to call a method. Methods are functions that are properties of a <strong>CRAWLER</strong>.",
    /*47*/   "<strong>CRAWLER</strong> have a method called .defend(). This method allows your crawler to fire a projectile when detecting a <strong>VIRUS</strong>.",
    /*48*/   "At the bottom of your function spawnCrawlers(250, 350), write crawlers[0].defend() to give your crawler an order to fight back against the <strong>VIRUS</strong>. Don't forget to run it!.",
    /*49*/   "I've also logged it in for you in the <strong>CONSOLE</strong>, in case you're having a hard time.",
    /*50*/   "The <strong>CRAWLER</strong> has now an order to attack.",
    /*51*/   "In order to start the battle, in our case the simulation, I've highlighted the <strong>START</strong> button at the bottom-right of the <strong>GAME MAP</strong> for you to click. This can also be used to <strong>PAUSE</strong> the battle.",
    /*50*/   "Congrats! You completed the first tutorial. Press the button below to go to the next lesson or close this message to continue learning.",
]


let currentIndex = 0; // Current index of the dialogTexts array

// Update the content of the dialog box
function updateDialogContent() {
    const dialogContent = document.getElementById('dialogContent');
    dialogContent.innerHTML = dialogTexts[currentIndex];

    // Show/hide buttons based on current index
    const backButton = document.getElementById('backButton');
    const nextButton = document.getElementById('nextButton');
    const closeButton = document.getElementById('closeButton');
    const startButton = document.querySelector('.start-button')
    const dialogBox = document.querySelector('.dialog-box')

    const energyResourceShadow = document.querySelector('.energyresource-shadow')
    const healthBarShadow = document.querySelector('.healthbar-shadow')
    const memoryModuleShadow = document.querySelector('.memorymodule-shadow')
    const virusPathShadow = document.querySelector('.viruspathing-shadow')
    const clearButtonShadow = document.querySelector('.clearbutton-shadow')
    const runButtonShadow = document.querySelector('.runbutton-shadow')

    if (currentIndex === 0) {
        backButton.style.display = 'none'
        closeButton.style.display = 'none'
        nextButton.style.opacity = 1
        nextButton.style.pointerEvents = 'initial'
        startButton.style.display = 'none'

    } else if (currentIndex >= 1 && currentIndex <= 2) {
        backButton.style.display = 'initial'
        closeButton.style.display = 'none'
        nextButton.style.opacity = 'initial'
        nextButton.style.pointerEvents = 'initial'
        nextButton.style.display = 'initial'

        document.querySelector('.home').style.zIndex = 'initial'
        document.querySelector('.dialog-btns').style.marginLeft = 'initial'
        dialogBox.style.marginTop = 'initial'
        dialogBox.style.marginLeft = 'initial'

    } else if (currentIndex >= 3 && currentIndex <= 4) {
        backButton.style.display = 'initial'
        closeButton.style.display = 'none'
        nextButton.style.opacity = 'initial'
        nextButton.style.pointerEvents = 'initial'
        nextButton.style.display = 'initial'

        document.querySelector('.home').style.zIndex = 99
        document.querySelector('.view').style.zIndex = 'initial'
        document.querySelector('.dialog-btns').style.marginLeft = '520px'
        dialogBox.style.marginTop = '375px'
        dialogBox.style.marginLeft = '450px'

    } else if (currentIndex >= 5 && currentIndex <= 7) {
        backButton.style.display = 'initial'
        closeButton.style.display = 'none'
        nextButton.style.opacity = 1
        nextButton.style.pointerEvents = 'initial'
        nextButton.style.display = 'initial'

        document.querySelector('.home').style.zIndex = 'initial'
        document.querySelector('.view').style.zIndex = 99
        document.querySelector('.sound').style.zIndex = 'initial'


    } else if (currentIndex >= 8 && currentIndex <= 9) {
        backButton.style.display = 'initial'
        closeButton.style.display = 'none'
        nextButton.style.opacity = 1
        nextButton.style.pointerEvents = 'initial'
        nextButton.style.display = 'initial'

        document.querySelector('.sound').style.zIndex = 99
        document.querySelector('.view').style.zIndex = 'initial'
        document.querySelector('.settings').style.zIndex = 'initial'

    } else if (currentIndex >= 10 && currentIndex <= 14) {
        backButton.style.display = 'initial'
        closeButton.style.display = 'none'
        nextButton.style.opacity = 1
        nextButton.style.pointerEvents = 'initial'
        nextButton.style.display = 'initial'

        document.querySelector('.sound').style.zIndex = 'initial'
        document.querySelector('.settings').style.zIndex = 99
        document.querySelector('.dialog-btns').style.marginLeft = '520px'
        dialogBox.style.marginTop = '375px'
        dialogBox.style.marginLeft = '450px'

        document.querySelector('.btn-container').style.pointerEvents = 'initial'
        document.querySelector('.btn-container').style.opacity = 'initial'
        document.querySelector('.code-container').style.zIndex = 'initial'


    } else if (currentIndex >= 15 && currentIndex <= 18) {
        backButton.style.display = 'initial'
        closeButton.style.display = 'none'
        nextButton.style.opacity = 1
        nextButton.style.pointerEvents = 'initial'
        nextButton.style.display = 'initial'

        document.querySelector('.settings').style.zIndex = 'initial'

        document.querySelector('.code-container').style.zIndex = '999', '!important'
        document.querySelector('.dialog-btns').style.marginLeft = 'initial'
        dialogBox.style.marginTop = 'initial'
        dialogBox.style.marginLeft = 'initial'
        document.querySelector('.btn-container').style.pointerEvents = 'none'
        document.querySelector('.btn-container').style.opacity = 0.2

        document.querySelector('.dialog-buttons').style.marginRight = 'initial'
        dialogBox.style.marginRight = 'initial'
        document.getElementById('game-map-container').style.zIndex = 'initial'

    } else if (currentIndex >= 19 && currentIndex <= 23) {
        backButton.style.display = 'initial'
        closeButton.style.display = 'none'
        nextButton.style.opacity = 1
        nextButton.style.pointerEvents = 'initial'
        nextButton.style.display = 'initial'

        document.querySelector('.btn-container').style.pointerEvents = 'initial'
        document.querySelector('.btn-container').style.opacity = 'initial'
        document.querySelector('.code-container').style.zIndex = 'initial'
        document.getElementById('game-map-container').style.zIndex = 200

        document.querySelector('.dialog-buttons').style.marginRight = '800px'
        dialogBox.style.marginRight = '800px'
        energyResourceShadow.style.display = 'none'


    } else if (currentIndex === 24) {
        backButton.style.display = 'initial'
        closeButton.style.display = 'none'
        nextButton.style.opacity = 1
        nextButton.style.pointerEvents = 'initial'
        nextButton.style.display = 'initial'

        energyResourceShadow.style.display = 'block'
        healthBarShadow.style.display = 'none'
        

    } else if (currentIndex === 25) {
        backButton.style.display = 'initial'
        closeButton.style.display = 'none'
        nextButton.style.opacity = 1
        nextButton.style.pointerEvents = 'initial'
        nextButton.style.display = 'initial'

        energyResourceShadow.style.display = 'none'
        healthBarShadow.style.display = 'block'
        memoryModuleShadow.style.display = 'none'

    } else if (currentIndex >= 26 && currentIndex <= 27) {
        backButton.style.display = 'initial'
        closeButton.style.display = 'none'
        nextButton.style.opacity = 1
        nextButton.style.pointerEvents = 'initial'
        nextButton.style.display = 'initial'

        memoryModuleShadow.style.display = 'block'
        memoryModuleShadow.style.width = '23%'
        memoryModuleShadow.style.height = '33%'
        memoryModuleShadow.style.left = '10%'
        healthBarShadow.style.display = 'none'


    } else if (currentIndex >= 28 && currentIndex <= 30) {
        backButton.style.display = 'initial'
        closeButton.style.display = 'none'
        nextButton.style.opacity = 1
        nextButton.style.pointerEvents = 'initial'
        nextButton.style.display = 'initial'

        memoryModuleShadow.style.display = 'none'
        virusPathShadow.style.display = 'none'

    } else if (currentIndex >= 31 && currentIndex <= 32) {
        backButton.style.display = 'initial'
        closeButton.style.display = 'none'
        nextButton.style.opacity = 1
        nextButton.style.pointerEvents = 'initial'
        nextButton.style.display = 'initial'

        virusPathShadow.style.display = 'block'
        virusPathShadow.style.height = '33%'
        virusPathShadow.style.left = '70%'



    } else if (currentIndex === 33) {
        backButton.style.display = 'initial'
        closeButton.style.display = 'none'
        nextButton.style.opacity = 1
        nextButton.style.pointerEvents = 'initial'
        nextButton.style.display = 'initial'

        document.getElementById('game-map-container').style.zIndex = 200

        virusPathShadow.style.display = 'none'
        document.querySelector('.dialog-buttons').style.marginRight = '800px'
        dialogBox.style.marginRight = '800px'
        runButtonShadow.style.display = 'none'
        document.querySelector('.code-container').style.zIndex = 'initial'
        clearButtonShadow.style.display = 'none'

    } else if (currentIndex >= 34 && currentIndex <= 35) {
        backButton.style.display = 'initial'
        closeButton.style.display = 'none'
        nextButton.style.opacity = 1
        nextButton.style.pointerEvents = 'initial'
        nextButton.style.display = 'initial'

        document.querySelector('.btn-container').style.pointerEvents = 'none'
        document.querySelector('.code-container').style.zIndex = '999', '!important'
        document.querySelector('.btn-container').style.opacity = 1
        document.getElementById('game-map-container').style.zIndex = 'initial'

        document.querySelector('.dialog-buttons').style.marginRight = 'initial'
        dialogBox.style.marginRight = 'initial'

        clearButtonShadow.style.display = 'block'
        runButtonShadow.style.display = 'none'

    } else if (currentIndex >= 36 && currentIndex <= 37) {
        backButton.style.display = 'initial'
        closeButton.style.display = 'none'
        nextButton.style.opacity = 1
        nextButton.style.pointerEvents = 'initial'
        nextButton.style.display = 'initial'

        clearButtonShadow.style.display = 'none'
        runButtonShadow.style.display = 'block'
        runButtonShadow.style.left = '75%'

        document.querySelector('.dialog-buttons').style.marginRight = 'initial'
        dialogBox.style.marginRight = 'initial'
        dialogBox.style.marginTop = 'initial'
        document.querySelector('.code-container').style.zIndex = '999', '!important'

        document.getElementById('console-container').style.zIndex = 'initial'

    } else if (currentIndex >= 38 && currentIndex <= 39) {
        backButton.style.display = 'initial'
        closeButton.style.display = 'none'
        nextButton.style.opacity = 1
        nextButton.style.pointerEvents = 'initial'
        nextButton.style.display = 'initial'

        runButtonShadow.style.display = 'none'

        document.getElementById('console-container').style.zIndex = 999
        document.querySelector('.code-container').style.zIndex = 'initial'

        dialogBox.style.marginRight = '950px'
        dialogBox.style.marginTop = '400px'
        document.querySelector('.dialog-buttons').style.marginRight = '950px'

    } else if (currentIndex >= 40 && currentIndex <= 43) {
        backButton.style.display = 'initial'
        closeButton.style.display = 'none'
        nextButton.style.opacity = 1
        nextButton.style.pointerEvents = 'initial'
        nextButton.style.display = 'initial'

        document.getElementById('console-container').style.zIndex = 'initial'
        document.querySelector('.code-container').style.zIndex = '999', '!important'
        dialogBox.style.marginRight = 'initial'
        dialogBox.style.marginTop = 'initial'
        document.querySelector('.dialog-buttons').style.marginRight = 'initial'

    } else if (currentIndex === 44) {
        backButton.style.display = 'initial'
        nextButton.style.display = 'none'
        closeButton.style.display = 'initial'

        document.querySelector('.btn-container').style.pointerEvents = 'initial'
        document.querySelector('.code-container').style.zIndex = 'initial'

    } else if (currentIndex === 45) {
        backButton.style.display = 'none'
        closeButton.style.display = 'none'
        nextButton.style.display = 'initial'
        nextButton.style.pointerEvents = 'initial'

        document.getElementById('game-map-container').style.zIndex = 200
        document.querySelector('.code-container').style.zIndex = 'initial'
        document.querySelector('.dialog-buttons').style.marginRight = '800px'
        dialogBox.style.marginRight = '800px'

    } else if (currentIndex >= 46 && currentIndex <= 48) {
        backButton.style.display = 'initial'
        closeButton.style.display = 'none'
        nextButton.style.opacity = 1
        nextButton.style.pointerEvents = 'initial'
        nextButton.style.display = 'initial'

        document.getElementById('game-map-container').style.zIndex = 'initial'
        document.querySelector('.code-container').style.zIndex = '999', '!important'
        document.querySelector('.dialog-buttons').style.marginRight = 'initial'
        dialogBox.style.marginRight = 'initial'

        document.querySelector('.btn-container').style.pointerEvents = 'none'
        document.querySelector('.btn-container').style.opacity = 0.2

    } else if (currentIndex === 49) {
        backButton.style.display = 'initial'
        nextButton.style.display = 'none'
        closeButton.style.display = 'initial'

        document.querySelector('.btn-container').style.pointerEvents = 'initial'
        document.querySelector('.btn-container').style.opacity = 'initial'
        document.querySelector('.code-container').style.zIndex = 'initial'

    } else if (currentIndex === 50) {
        backButton.style.display = 'none'
        closeButton.style.display = 'none'
        nextButton.style.display = 'initial'
        nextButton.style.pointerEvents = 'initial'


    } else if (currentIndex === 51) {
        backButton.style.display = 'initial'
        closeButton.style.display = 'initial'
        nextButton.style.display = 'none'

        startButton.style.display = 'initial'
        startButton.style.zIndex = 200

    } else if (currentIndex === 52) {
        backButton.style.display = 'none'
        closeButton.style.display = 'initial'
        nextButton.style.display = 'none'

        startButton.style.display = 'initial'
        startButton.style.zIndex = 'initial'
        dialogBox.style.marginTop = '400px'
        

        document.querySelector('.next-lesson').style.zIndex = 200
    }


    if (currentIndex === 44) {
        console.log('spawnCrawlers(250, 350)');
    } else if (currentIndex === 49) {
        console.log('crawlers[0].defend()');
    }

}

// Function to open the dialog box
function openDialog() {
    document.getElementById('dialogOverlay').style.display = 'flex';
    updateDialogContent();
}

// Function to close the dialog box
function closeDialog() {
    document.getElementById('dialogOverlay').style.display = 'none';
    currentIndex++;
}

// Function to show next content
function next() {
    currentIndex++;
    updateDialogContent();
}

// Function to show previous content
function back() {
    currentIndex--;
    updateDialogContent();
}

// Show the dialog box when the page loads
window.onload = function () {
    openDialog();
    updateEnergyResource()
    updateGameOverHealth()
};