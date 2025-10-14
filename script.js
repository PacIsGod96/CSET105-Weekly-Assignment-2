let cpuInput = cpu()
let btnInput = document.getElementsByClassName(`userBtn`)
for(let i = 0; i < btnInput.length; i++){
    btnInput[i].addEventListener(`click`, function(){
        let btnText = this.textContent.trim()
        let play = ``
        if(btnText == `Rock`){
            play = 2
        }else if (btnText == `Scissors`){
            play = 1
        }else{
            play = 0
        }
        console.log(play)
    })
}

function cpu(){
    let btnNumber = Math.floor(Math.random()*3)
    return btnNumber
}