let path = './tutorial1.html'
function changeLevel(level) {
  const levelTitle = document.getElementsByClassName('level-title')[0];
  const levelStory = document.getElementsByClassName('levelstory-container')[0];
  const levelInfo = document.getElementsByClassName('levelinfo-container')[0];

  path = level;

  if (level === './tutorial1.html') {
    levelTitle.innerHTML = 'Floor 1: Reinitialization';
    levelStory.innerHTML = "<p>Awakening from a decade-long slumber, I find myself thrust into a world ravaged by a global digital outbreak. Companies, once mighty, now lie in ruins, succumbing to the relentless onslaught of insidious viruses.</p><p>Summoned by the CEO, I am tasked with a monumental mission: to vanquish these malevolent entities and restore order to the chaos. It's time to breathe life back into 'CodeCrawlers', our beacon of hope in this darkened digital landscape.</p><h3 style='line-height: 60px;'>System Initialized... CodeCrawlers: <span style='color: green'>ONLINE</span></h3>";
    levelInfo.innerHTML = " 100 <img class='heart-display' src='/public/icons/heart.png'> 50 <img class='heart-display' src='/public/icons/energy.png'> 10 <img class='heart-display' src='/public/icons/alien.png'>"
  } else if (level === './level2.html') {
    levelTitle.innerHTML = 'Floor 2: Shadow of the Seeker';
    levelStory.innerHTML = "In the heart of the digital frontier, a shadow stirs—an entity known only as the Seeker, an anomaly from its descendants. Born from the darkest recesses of the virtual world, it roams the circuits and nodes, hunting my Crawlers with unmatched tenacity. With each encounter, the Seeker evolves, adapting to our defenses and striking where we're most vulnerable. In order to face this formidable foe in a high-stakes duel of wits and algorithms, I must also evolved. <h3 style='line-height: 60px;'>NEW CRAWLER UNLOCKED!</h3><h3 style='line-height: 10px;'>NEW COMMAND LEARNED: <span style='color: green'> .upgrade()</span></h3>"
    levelInfo.innerHTML = " 100 <img class='heart-display' src='/public/icons/heart.png'> 100 <img class='heart-display' src='/public/icons/energy.png'> 20 <img class='heart-display' src='/public/icons/alien.png'>"
  }
}

function startGame() {
  if (path) {
    window.location.href = path;
  }
}

document.addEventListener('DOMContentLoaded', function () {
});
