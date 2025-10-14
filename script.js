let points = ``
let btnInput = document.getElementsByClassName(`userbtn`)
for(let i = 0; i < btnInput.length; i++){
    btnInput[i].addEventListener(`click`, function(){
        let btnText = this.textContent.trim()
        if(btnText == `Rock`){
            let play = 2
        }else if (btnText == `Scissors`){
            let play = 1
        }else{
            let play = 0
        }
    })
    console.log(play)
}

function cpu(){
    let btnNumber = Math.floor(Math.random()*3)
    return btnNumber
}
console.log(cpu())