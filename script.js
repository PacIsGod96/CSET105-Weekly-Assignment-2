let userScore = 0
let cpuScore = 0
let tieScore = 0
let storeBtn = ``
let btnInput = document.getElementsByClassName(`userBtn`)
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
        tieScore = tieScore + 1
    }else if((cpuAnswer == `Rock`) && (storeBtn == `Scissors`)){
        cpuScore = cpuScore + 1
    }else if((cpuAnswer == `Paper`) && (storeBtn == `Rock`)){
        cpuScore = cpuScore + 1
    }else if((cpuAnswer == `Scissors`) && (storeBtn == `Paper`)){
        cpuScore = cpuScore + 1
    }else if((storeBtn == `Rock`) && (cpuAnswer == `Scissors`)){
        userScore = userScore + 1
    }else if((storeBtn == `Paper`) && (cpuAnswer == `Rock`)){
        userScore = userScore + 1
    }else if((storeBtn == `Scissors`) && (cpuAnswer == `Paper`)){
        userScore = userScore + 1
    }
    console.log(userScore)
    console.log(cpuScore)
    console.log(tieScore)
}

