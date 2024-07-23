let healthp1 = document.getElementsById("player1health")
let healthp2 = document.getElementsById("player2health")

let namep1 = document.getElementsById("p1name")
let namep2 = document.getElementsById("p2name")

class player{
    constructor(name,health,attdmg){
        this.name = name
        this.health = health
        this.attdmg = attdmg
    }
}

class Game{

}

const updategame = () => {
    console.log("hello")
}

let player1 = new player("Fahad",100,30)
let player2 = new player("Hassan",100,20)
let p1 = player1
let p2 = player2
let game = new Game()

updategame()