const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const decompteDisplay = document.getElementById('decompte-popup')
const popupDisplay = document.getElementById('popup-Form')
const gridDisplay = document.getElementById('grid')

let squares
let result = 0
let hitPosition
let currentTime
let countDownTimerId
let total = 0
let ChoixGrille 
let tailleSquare
let vitesse
let Time
let randomSquareInterval
let playing = true

function createGrille(choix, taille){
	currentTime = Time
	for(let i =0;i<(choix*choix);i++){
		var e = document.createElement("div")
		e.className="square"+taille
		e.setAttribute("id","square")
		gridDisplay.appendChild(e)
	}
	squares = document.querySelectorAll("#square")
	squares.forEach(square => {
		square.addEventListener('mousedown', () => {
			if(square.className == hitPosition){
				result++
				score.textContent = result
				hitPosition = null
			}
		})
	})

	moveMole()
}

function randomSquare(){
	if(playing==true){
		squares.forEach(square => {
			square.classList.remove('mole')
		})
	
		let randomSquare = squares[Math.floor(Math.random() * (ChoixGrille*ChoixGrille))]
		randomSquare.classList.add('mole')
	
		hitPosition = randomSquare.className
		total++
	}
}



function moveMole(){
		countDownTimerId = setInterval(countDown, 1000)	
		randomSquareInterval = setInterval(randomSquare, 500/vitesse)
	
}

function countDown(){
	if(playing==true){
		currentTime--
		timeLeft.textContent = currentTime
	
		if(currentTime == 0){
			clearInterval(countDownTimerId)
			popupDisplay.innerHTML = "<h2>ton score final est de " + Math.round((result/total)*100) +" %</h2>"
			openForm()
			gridDisplay.style.display = 'none'
		}
	}
}

function openForm() {
	popupDisplay.style.display = "block"
}

function closeForm() {
	popupDisplay.style.display = "none"
	gridDisplay.style.display = 'flex'
	timeLeft.textContent = currentTime
	createGrille(ChoixGrille,tailleSquare)
}

function idChoixGrille(idGrille){
	if(idGrille == "3x3"){
		ChoixGrille=3
		tailleSquare = 200
	}
	if(idGrille == "5x5"){
		ChoixGrille=5
		tailleSquare = 120
	}
}

function idChoixTemps(idTemps){
	if(idTemps == "20s"){
		Time = 20
	}
	if(idTemps == "45s"){
		Time = 45
	}
}

function idChoixVitesse(idVitesse){
	if(idVitesse == "1x"){
		vitesse = 1
	}
	if(idVitesse == "1.5x"){
		vitesse = 1.5
	}
	if(idVitesse == "2x"){
		vitesse = 2
	}
	if(idVitesse == "2.5x"){
		vitesse = 2.5
	}
}

function effaceGrille(){
	document.querySelectorAll("#square").forEach(e => e.remove())
	var e = document.createElement("div")
	e.setAttribute("id","square")
	gridDisplay.appendChild(e)
}
function restart(){
	clearInterval(randomSquareInterval)
	clearInterval(countDownTimerId)
	result = 0
	score.textContent = result
	effaceGrille()
	setTimeout(	function(){
				createGrille(ChoixGrille,tailleSquare)
				},1000)
}
function pause(){
	playing=false
}
function play(){
	playing=true
}
	openForm()