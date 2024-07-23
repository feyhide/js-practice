//everything inside class are called object

// class car{
//     //constructor
//     constructor(name, color, speed){
//         this.name = name
//         this.color = color
//         this.speed = speed
//     }
//     //method
//     drive(){
//         console.log("hello")
//     }
// }

// const bmw = new car('bmw','blue',200)
// console.log(bmw) 
// bmw.drive()

//these are methods as well
const number = [1,2,3]
// number.push(4)
// console.log(number)

//OWN array methods
// Array.prototype.pusi = function(){
//     return this.length
// }

// console.log(number.pusi())
// Array.prototype.pusi = function(){
//     number[2] = 'fahad'
//     return number
// }

// console.log(number.pusi())
Array.prototype.pusi = function(item){
    number[2] = item
    return number
}

console.log(number.pusi('fahad'))