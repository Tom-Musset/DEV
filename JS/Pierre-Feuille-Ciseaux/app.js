const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) =>{
    userChoice = e.target
    userChoiceDisplay.innerHTML = userChoice.id
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)

    possibleChoices.forEach(function(possibleChoice){ 

        if(Array.prototype.indexOf.call(possibleChoices, possibleChoice) == randomNumber)
        {
            computerChoice = possibleChoice
        } 
        
    })
    computerChoiceDisplay.innerHTML = computerChoice.id
}

function getResult(){
    //console.log("computer choice : "+Array.prototype.indexOf.call(possibleChoices, computerChoice))
    console.log("you're choice : " +userChoice)
    console.log("computer choice : "+computerChoice)

    if (computerChoice === userChoice){
        result = "it's a draw !" 
    }else{
        if((computerChoice.id != 'pierre' && computerChoice.id != 'ciseaux')&&(userChoice.id!='pierre'&&userChoice.id!='ciseaux')){
            if(Array.prototype.indexOf.call(possibleChoices, computerChoice) > Array.prototype.indexOf.call(possibleChoices, userChoice)){
                result = "you loose"
            }else{
                result = "you win !"
            }
        }else{
            if(computerChoice.id== 'pierre'&&userChoice.id== 'ciseaux'){
                result ="you loose..."
            }else{
                result ='you win !'
            }
        }        
    }
    resultDisplay.innerHTML = result
}