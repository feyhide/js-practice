const emotes = document.querySelectorAll(".emoji")
const pctext = document.getElementById("pcchoose")
const playertext = document.getElementById("userchoose")
const pcptext = document.getElementById("pcpoints")
const playerptext = document.getElementById("userpoints")
const res = document.getElementById("res1")
let pcpoints = 0 , playerpoints = 0
let t2 = "Start" , t1 = "Game"
function result(p2,p1){
    if(p1===3){
        res.innerText = "P1 Wins"
        reset("Game","Replay")
    }else if(p2===3){
        res.innerText = "P2 Wins"
        reset("Game","Replay")
    }
}

function check(p1,p2){
    pctext.innerText = p1
    playertext.innerText = p2
    pcptext.innerText = pcpoints
    playerptext.innerText = playerpoints
    if(p1==="rock"){
        if(p2==="scissors"){
            pcpoints++
            pcptext.innerText = pcpoints
            playerptext.innerText = playerpoints
            result(playerpoints,pcpoints)
        }else if(p2 === "paper"){
            playerpoints++            
            pcptext.innerText = pcpoints
            playerptext.innerText = playerpoints
            result(playerpoints,pcpoints)
        }
    }else if(p1==="paper"){
        if(p2==="scissors"){
            playerpoints++
            pcptext.innerText = pcpoints
            playerptext.innerText = playerpoints
            result(playerpoints,pcpoints)
        }else if(p2 === "rock"){
            pcpoints++
            pcptext.innerText = pcpoints
            playerptext.innerText = playerpoints
            result(playerpoints,pcpoints)
        }
    }else if(p1==="scissors"){
        if(p2==="paper"){
            pcpoints++
            pcptext.innerText = pcpoints
            playerptext.innerText = playerpoints
            result(playerpoints,pcpoints)
        }else if(p2 === "rock"){
            playerpoints++
            pcptext.innerText = pcpoints
            playerptext.innerText = playerpoints
            result(playerpoints,pcpoints)
        }
    }
}

function selected(playerchoice){
    let random = Math.floor(Math.random()*3)
    let pcchoice = emotes[random].value
    check(pcchoice,playerchoice)
}

function playgame(){
    emotes.forEach(emoji => {
        emoji.onclick = () => selected(emoji.value)
    })
}

function reset(t1,t2){
    pcpoints = 0
    playerpoints = 0
    check(t1,t2)
}
function resetbut(){
    res.innerText = ""
    reset(t1,t2)
}
playgame();