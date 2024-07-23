const screen = document.getElementById("screen")

class bank{
    constructor(balance){
        this.balance = balance
    }
    create(cash){
        cash = document.getElementById("input")
        cash = parseFloat(cash.value)
        this.balance = cash
        screen.innerText = `Balance: ${this.balance}`
    }
    withdraw(){
        cash = document.getElementById("input")
        cash = parseFloat(cash.value)
        if(this.balance >= cash){
            this.balance -= cash
            screen.innerText = `Balance: ${this.balance}`
            
        }else{
            screen.innerText = `Balance: ${this.balance}
Not Enough Balance To WithDraw`
        }
    }
    deposit(){
        cash = document.getElementById("input")
        cash = parseFloat(cash.value)
        this.balance += cash
        screen.innerText = `Balance: ${this.balance}`
    }
}

const random = new bank(0)

function newBank(){
    cash = document.getElementById("input")
    cash = parseFloat(cash.value)
    random.create(cash)
}


