// CodeCrawlers v1.0.0

function animate() {
	runAnimation(animate)

	// Code goes here
	spawnCrawlers(420, 290)
	spawnCrawlers(580, 290)
	spawnCrawlers(420, 410)
	spawnCrawlers(580, 410)
	
	crawlers.map((crawler) => {
		crawler.defend()
	})
}

// Before Testing: Add crawler distance between each other condition...