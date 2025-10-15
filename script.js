let userScore = 0
let cpuScore = 0
let tieScore = 0
let storeBtn = ``
let btnInput = document.getElementsByClassName(`userBtn`)
let choiceContainer = document.getElementById("choiceContainer")
let cpuContainer = document.getElementById("cpuContainer")
for(let i = 0; i < btnInput.length; i++){
    btnInput[i].addEventListener(`click`, function(){
        storeBtn = ``
        let btnText = this.textContent.trim()
        let play = ``
        if(btnText == `Rock`){
            play = `Rock`
        }else if (btnText == `Paper`){
            play = `Paper`
        }else{
            play = `Scissors`
        }
        console.log(play)
        storeBtn = play
    })
}

function cpu(){
    let btnNumber = Math.floor(Math.random()*3)
    let cpuAnswer = ``
    if(btnNumber == 0){
        cpuAnswer = `Rock`
    }else if(btnNumber == 1){
        cpuAnswer = `Paper`
    }else{
        cpuAnswer = `Scissors`
    }
    console.log(cpuAnswer)
    if(cpuAnswer == storeBtn){
        tieScore = tieScore + 1;
        cpuContainer.innerHTML = `<p>CPU Selection: ${cpuAnswer}</p>`
        score();
    }else if((cpuAnswer == `Rock`) && (storeBtn == `Scissors`)){
        cpuScore = cpuScore + 1;
        cpuContainer.innerHTML = `<p>CPU Selection: ${cpuAnswer}</p>`
        score();
    }else if((cpuAnswer == `Paper`) && (storeBtn == `Rock`)){
        cpuScore = cpuScore + 1;
        cpuContainer.innerHTML = `<p>CPU Selection: ${cpuAnswer}</p>`
        score();
    }else if((cpuAnswer == `Scissors`) && (storeBtn == `Paper`)){
        cpuScore = cpuScore + 1;
        cpuContainer.innerHTML = `<p>CPU Selection: ${cpuAnswer}</p>`
        score();
    }else if((storeBtn == `Rock`) && (cpuAnswer == `Scissors`)){
        userScore = userScore + 1;
        cpuContainer.innerHTML = `<p>CPU Selection: ${cpuAnswer}</p>`
        score();
    }else if((storeBtn == `Paper`) && (cpuAnswer == `Rock`)){
        userScore = userScore + 1;
        cpuContainer.innerHTML = `<p>CPU Selection: ${cpuAnswer}</p>`
        score();
    }else if((storeBtn == `Scissors`) && (cpuAnswer == `Paper`)){
        userScore = userScore + 1;
        cpuContainer.innerHTML = `<p>CPU Selection: ${cpuAnswer}</p>`
        score();
    }
    console.log(userScore)
    console.log(cpuScore)
    console.log(tieScore)
}

function rock() {
    choiceContainer.innerHTML = "<p>Your Selection: Rock </p>"
}

function paper() {
    choiceContainer.innerHTML = "<p>Your Selection: Paper </p>"
}

function scissors() {
    choiceContainer.innerHTML = "<p>Your Selection: Scissors </p>"
}


function score() {
    const container = document.getElementById("scoreContainer")
    container.innerHTML = `<p style="text-align: center;">You: ${userScore} CPU: ${cpuScore} Ties: ${tieScore}</p>`
}

score();
