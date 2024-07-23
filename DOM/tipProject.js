let inc = document.querySelectorAll(".inc")
let dec = document.querySelectorAll(".dec")
let pp = document.getElementById("people")
let cost = document.getElementById("cost")
let noOfPeople = 0,money = 0;

function increment() {
    noOfPeople++
    pp.innerText = noOfPeople
    let bill = parseFloat(document.getElementById("bill").value)
    let tip = parseFloat(document.getElementById("tip").value)
    
    if(!isNaN(bill)&&!isNaN(tip)){
        money = (bill+tip)/noOfPeople
        cost.innerText = "$"+money.toLocaleString('en-US')

    }
}

function decrement(){
    if(noOfPeople>0){
        noOfPeople--
        pp.innerText = noOfPeople
        let bill = parseFloat(document.getElementById("bill").value)
        let tip = parseFloat(document.getElementById("tip").value)

        if(!isNaN(bill)&&!isNaN(tip)&&noOfPeople>0){        
            money = (bill+tip)/noOfPeople
            cost.innerText = "$"+money.toLocaleString('en-US')
        }else if(noOfPeople<=0){
            cost.innerText = ""

        }
    }
}