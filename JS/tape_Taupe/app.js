const squares = document.querySelectorAll(".square")
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60

function randomSquare(){
	squares.forEach(square => {
		square.classList.remove('mole')
	})

	let randomSquare = squares[Math.floor(Math.random() * 9)]
	randomSquare.classList.add('mole')

	hitPosition = randomSquare.id
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
	setInterval(randomSquare, 500)
}

moveMole()

function countDown(){
	currentTime--
	timeLeft.textContent = currentTime

	if(currentTime == 0){
		clearInterval(countDownTimerId)
		alert('Perdu ! ton score final est de ' + result)
	}
}
let countDownTimerId = setInterval(countDown, 1000)