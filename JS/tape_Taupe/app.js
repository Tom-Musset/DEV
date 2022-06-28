const squares = document.querySelectorAll(".square")
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const decompteDisplay = document.getElementById('decompte-popup')
const startDisplay = document.getElementById('popup-Form')
const gridDisplay = document.getElementById('grid')

let result = 0
let hitPosition
let currentTime = 60
let countDownTimerId

var now 
var deadline
var nowSeconds
var t = deadline - now
var seconds = Math.floor((t%(1000*60)) / 1000)

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
	countDownTimerId = setInterval(countDown, 1000)	
	setInterval(randomSquare, 500)
}

function countDown(){
	currentTime--
	timeLeft.textContent = currentTime

	if(currentTime == 0){
		clearInterval(countDownTimerId)
		alert('Perdu ! ton score final est de ' + result)
		gridDisplay.style.display = 'none'
	}
}

function openForm() {
	startDisplay.style.display = "block"
}

function closeForm() {
	startDisplay.remove()
	decompte()
}

function decompte(){
	now = new Date()
	nowSeconds = now.getSeconds()
	deadline = now.setSeconds(nowSeconds + 3)
	decompteDisplay.style.display = 'block'
	while(t!=0){
		now = new Date()
		t = deadline - now
		decompteDisplay.innerHTML = "<h2>"+ t +"</h2>"
	}
	gridDisplay.style.display = 'flex'
	decompteDisplay.style.display = 'none'
	console.log("ok !")
	moveMole()
}

	openForm()