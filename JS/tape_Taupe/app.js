const squares = document.querySelectorAll(".square")
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const decompteDisplay = document.getElementById('decompte-popup')
const popupDisplay = document.getElementById('popup-Form')
const gridDisplay = document.getElementById('grid')

let result = 0
let hitPosition
let currentTime = 20
let countDownTimerId
let total = 0
let ChoixGrille
let choixTemps 

function randomSquare(){
	squares.forEach(square => {
		square.classList.remove('mole')
	})

	let randomSquare = squares[Math.floor(Math.random() * 9)]
	randomSquare.classList.add('mole')

	hitPosition = randomSquare.id
	total++
}

squares.forEach(square => {
	square.addEventListener('mousedown', () => {
		if(square.id == hitPosition){
			result++
			score.textContent = result
			hitPosition = null
		}
	})
})

function moveMole(){
	countDownTimerId = setInterval(countDown, 1000)	
	setInterval(randomSquare, 500)
}

function countDown(){
	currentTime--
	timeLeft.textContent = currentTime

	if(currentTime == 0){
		clearInterval(countDownTimerId)
		popupDisplay.innerHTML = "<h2>ton score final est de " + Math.round((result/total)*100) +" %</h2>"
		openForm()
		gridDisplay.style.display = 'none'
	}
}

function openForm() {
	popupDisplay.style.display = "block"
}

function closeForm() {
	popupDisplay.style.display = "none"
	gridDisplay.style.display = 'flex'
	timeLeft.textContent = currentTime
	moveMole()
}

function idChoixGrille(idGrille){
	ChoixGrille = idGrille
	console.log(ChoixGrille)
}

function idChoixTemps(idTemps){
	choixTemps = idTemps
	console.log(choixTemps)
}
	openForm()